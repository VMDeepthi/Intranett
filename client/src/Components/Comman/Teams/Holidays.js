import { Box, Container, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Download } from "@mui/icons-material";
import { jsPDF } from "jspdf";

function Holidays(props) {
    const { pageDetails } = props;
    const [holidayCalender, setHolidayCalender] = useState({});
    const [holidayTitles, setHolidayTitles] = useState([]);

    const exportPDF = async () => {
        const doc = new jsPDF({ orientation: "landscape" });

        holidayTitles.forEach((title ,index) => {
            if (index !== 0) {
                doc.addPage();
            }
            // doc.text(title, 20, 10); // Add title to the PDF
            doc.text(pageDetails.pageName, 20, 10);

            const holidayData = holidayCalender[title];

            doc.autoTable({
                head: [{ title: "Title", dataKey: "holiday_title" }, { title: "Date", dataKey: "holiday_date" }, { title: "Day", dataKey: "holiday_day" }],
                body: holidayData,
                theme: "grid",
                margin: { left: 20, right: 20 },
            });
            

            // doc.addPage(); // Add a new page for each title
        });

        doc.save("HolidayList.pdf");
    };

    useEffect(() => {
        if (pageDetails) {
            const pageDetailsData = pageDetails.pageData.map(data => ({ ...data, holiday_date: new Date(data.holiday_date).toLocaleString('en-CA', { day: 'numeric', month: 'short' }) }));

            // Extract all unique titles
            const allTitles = Array.from(new Set(pageDetailsData.map(data => data.holidaylist_title)));

            // Initialize an empty object to store holiday data for each title
            const holidayList = {};

            // Populate holidayList with data for each title
            allTitles.forEach(tit => {
                holidayList[tit] = pageDetailsData.filter(data => data.holidaylist_title === tit);
            });

            // Ensure that "holidaylistforai" and "holidaylistfor2024" are included in titles
            const additionalTitles = ["holidaylistforai", "holidaylistfor2024"];
            additionalTitles.forEach(title => {
                if (!allTitles.includes(title)) {
                    allTitles.push(title);
                    holidayList[title] = []; // Add an empty array for these titles
                }
            });

            setHolidayCalender(holidayList);
            setHolidayTitles(allTitles);
        }
    }, [pageDetails]);

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography textAlign={'center'} component={'p'} variant='p' fontSize={20} fontWeight={'bold'} ml={50} mt={2}>
                    {pageDetails.pageName}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-2.5%', mr: '3%' }}>
                    <Button variant="outlined" onClick={exportPDF}>
                        <Download fontSize="medium" />
                    </Button>
                </Box>
            </Box>
            <Container sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', mt: '-5%' }}>
                <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'flex-start', height: '80%', width: "100%", border: '1px solid gray', m: 2, pt: 1, overflow: 'auto' }}>
                    <Grid container spacing={2} display={'flex'} justifyContent={'center'}>
                        {holidayTitles.map((titl, index) => (
                            <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                                <Typography textAlign={'center'} component={'p'} variant='p' fontSize={12} fontWeight={'bold'}>
                                    {titl}
                                </Typography>
                                <Box m={1}>
                                    <DataTable
                                        size='small'
                                        resizableColumns
                                        scrollable={false}
                                        showGridlines
                                        value={holidayCalender[titl]}
                                        tableStyle={{ minWidth: 'auto', fontSize: "12px", maxHeight: '100px' }}
                                        rows={15}
                                    >
                                        <Column field="holiday_title" header="Title"></Column>
                                        <Column field="holiday_date" header="Date"></Column>
                                        <Column field="holiday_day" header="Day"></Column>
                                    </DataTable>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Holidays;

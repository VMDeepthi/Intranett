import { styled } from '@mui/material/styles';
//import AppBar from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useNavigate } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
//import CssBaseline from '@mui/material/CssBaseline';
import BusinessIcon from '@mui/icons-material/Business';
import { AccountBalanceWallet, AccountBox, AddAlert, Announcement, BadgeRounded, Campaign, Description, EventAvailable, ExpandLess, ExpandMore, ForwardToInbox, GroupAdd, LocalLibrary, LockOpen, LockReset, Logout, ManageHistory, NoteAdd, PersonAdd, Send, Settings, SupervisedUserCircle, TrendingUp, UploadFile, WorkHistory, WorkOff } from '@mui/icons-material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

import { CgListTree } from 'react-icons/cg'
import { Fade } from '@mui/material';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StoreIcon from '@mui/icons-material/Store';
import { useContext, useState } from 'react';
import { Avatar } from '@mui/material';
import UserContext from '../../context/UserContext';
//import Cookies from 'js-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
//import CompanyManagementPages from '../CompanyPagesManagement/AddCompanyManagementPages';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SyncLockIcon from '@mui/icons-material/SyncLock';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,

}));

// drawer width
const drawerWidth = 270;



export default function AdminNavBar(props) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);


  const navigate = useNavigate()

  const { window } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    //
    console.log(drawerOpen)
    setDrawerOpen(!drawerOpen);
  };

  const [openCompanyManagementMenu, setOpenCompanyManagementMenu] = useState(false);

  const [openCompanyPageManagementMenu, setOpenCompanyPageManagementMenu] = useState(false)
  const [openUserManagementMenu, setOpenUserManagementMenu] = useState(false);
  const [openExperienceMenu, setOpenExperienceMenu] = useState(false);
  const [openAnnouncementMenu, setOpenAnnouncementMenu] = useState(false);
  const [openPermissionsMenu,setOpenPermissionsMenu] = useState(false);
  const [openLeaveManagementMenu, setOpenLeaveManagementMenu] = useState(false);
  const [openLeavesMenu, setOpenLeavesMenu] = useState(false);


  const handleSubMenuOpen = (item) => {
    //
    console.log(openCompanyManagementMenu, drawerOpen)
    setDrawerOpen(true)
    switch (item) {
      case "leaves":
        setOpenLeavesMenu(true)
        break
      case 'company management':
        setOpenCompanyManagementMenu(true)
        break
      case 'company pages management':
        setOpenCompanyPageManagementMenu(true)
        break
      case 'user management':
        setOpenUserManagementMenu(true)
        break
      case 'Experience':
        setOpenExperienceMenu(true)
        break
      case 'announcement':
        setOpenAnnouncementMenu(true)
        break
      case 'Permissions':
        setOpenPermissionsMenu(true)  
        break  
      case 'leave management':
        setOpenLeaveManagementMenu(true)
        break
      
      default:
        setDrawerOpen(false)

    }
  }




  // const handleSubMenuClose = (item) => {
  //   setDrawerOpen(false)
  //   switch(item){
  //     case 'company management':
  //       setOpenCompanyManagementMenu(false)
  //       break
  //     case 'company pages management':
  //       setOpenCompanyPageManagementMenu(false)
  //       break
  //     default:
  //       setDrawerOpen(false)

  //     }

  // }


  const handleNavigation = (index) => {
    const navList = ['/', '/attendance']
    navigate(navList[index])
    setDrawerOpen(false)
  }
  const iconList = [<DashboardCustomizeIcon />, <EventAvailableIcon />]


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get('/api/logout')
      toast.success(res.data)
      navigate('/login', { replace: true })
    }
    catch (err) {
      console.log(err)
      toast.error('error occured!')

    }

  }



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >


      <MenuItem onClick={() => navigate('/myprofile')}>
        <ListItemIcon>
          <AccountBox fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={() => navigate('/changepassword')}>
        <ListItemIcon>
          <LockOpen fontSize="small" />
        </ListItemIcon>
        Change Password
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  const container = window !== undefined ? () => window().document.body : undefined;
  const { userDetails } = useContext(UserContext)


  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            <Link href="/" underline="none">
              <img src='https://res.cloudinary.com/dozj3jkhe/image/upload/v1701168256/intranet/gdyr4cwcrsn9z1ercoku.png' alt='logo' style={{ marginTop: '5px', marginLeft: '10px', width: '50%' }} />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="black">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="black"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="black"
            >
              {userDetails.profile_pic === '' ? <AccountCircle /> : <Avatar sx={{ width: 24, height: 24 }} src={userDetails.profile_pic} />}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent"
        container={container}

        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: drawerWidth - 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth - 200,
            boxSizing: 'border-box',
          },
        }}

        anchor="left"

      >
        <Box sx={{ overflowX: 'hidden' }}>
          <List sx={{ mt: 7 }}>
            {['Dashboard', 'Attendance'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => handleNavigation(index)}>
                <ListItemButton
                  title={text}
                  sx={{
                    minHeight: 45,
                    justifyContent: 'center',
                    px: 1.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',

                      justifyContent: 'center',
                    }}
                  >
                    {iconList[index]}
                  </ListItemIcon>

                </ListItemButton>
              </ListItem>
            ))}
            {/*----------------------------------Leaves---------------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('leaves')}>
              <ListItemButton
                title={'Leaves'}
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',

                    justifyContent: 'center',

                  }}
                >
                  <WorkOff />

                </ListItemIcon>
                {openLeavesMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>
            </ListItem>


            {/*----------------------------------History Log Of All applications---------------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/historylog')}>
              <ListItemButton
                title={'History Log for all Application'}
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}
                >
                  <WorkHistory />

                </ListItemIcon>


              </ListItemButton>
            </ListItem>
            {/* ------------------------------------------reporting structure-------------------------------- */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/reportingstructure')}>
              <ListItemButton
                title={'View Reporting Structure'}
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}
                >
                  <CgListTree fontSize={20} />

                </ListItemIcon>


              </ListItemButton>
            </ListItem>

            <Divider sx={{ fontSize: 12, fontWeight: 'bold' }}>Admin</Divider>
            {/*------------------------company management---------------------- */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('company management')}>
              <ListItemButton
                title='Company Management'
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}

                >
                  <BusinessIcon />
                </ListItemIcon>
                {openCompanyManagementMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

            </ListItem>
            <Divider />
            {/*------------------------company pages management---------------------- */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('company pages management')}>
              <ListItemButton
                title='Company Pages Management'
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}

                >
                  <LocalLibrary />
                </ListItemIcon>
                {openCompanyPageManagementMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

            </ListItem>
            <Divider />
            {/*------------------------user management---------------------- */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('user management')}>
              <ListItemButton
                title='User Management'
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}

                >
                  <SupervisedUserCircle />
                </ListItemIcon>
                {openUserManagementMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

            </ListItem>
            <Divider />
            {/* ---------------------Experience------------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('Experience')}>
              <ListItemButton
                title='Experience'
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}

                >
                  <TrendingUpIcon />
                </ListItemIcon>
                {openExperienceMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

            </ListItem>
            <Divider />


             {/*--------------------------------Permissions-------------------------------*/}
             <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('Permissions')}>
              <ListItemButton
                title='Permissions'
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}

                >
                  <LockOpenIcon />
                </ListItemIcon>
                {openPermissionsMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

            </ListItem>
            <Divider />
            {/*--------------------announcement-------------------------- */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('announcement')}>
              <ListItemButton
                title='Announcement'
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}

                >
                  <Campaign />
                </ListItemIcon>
                {openUserManagementMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

            </ListItem>
            <Divider />

            {/*------------------------leave management---------------------- */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleSubMenuOpen('leave management')}>
              <ListItemButton
                title='Leave Management'
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',

                  }}

                >
                  <ManageHistory />
                </ListItemIcon>
                {openLeaveManagementMenu ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

            </ListItem>
            <Divider />
           
            {/*-------------    -------------*/}
          </List>
        </Box>

      </Drawer>

      <Drawer
        container={container}
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{

          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}

      >
        <Box sx={{ overflow: 'auto', height: 'auto' }}>
          <List sx={{ mt: 8 }}>
            {['Dashboard', 'Attendance'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => handleNavigation(index)}>
                <ListItemButton
                  sx={{
                    minHeight: 45,
                    justifyContent: 'center',
                    px: 1.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: 'center',
                    }}
                  >
                    {iconList[index]}
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={{ fontSize: 15 }}>{text}</Typography>} />
                </ListItemButton>
              </ListItem>
            ))}
            {/*--------------------------------------Leaves----------------------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenLeavesMenu(!openLeavesMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                  <WorkOff />
                </ListItemIcon>
                <ListItemText primary={'Leaves'} />
                {openLeavesMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              {openLeavesMenu ? <>
                <Divider />
                <Fade in={openLeavesMenu} >
                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/applyleave')}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <ForwardToInbox />
                        </ListItemIcon>
                        <ListItemText primary={'Apply Leave'} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'flex' }} onClick={() => navigate('/balanceleaves')}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <AccountBalanceWallet />
                        </ListItemIcon>
                        <ListItemText primary={'Balance Leaves'} />
                      </ListItemButton>
                    </ListItem>

                  </List>
                </Fade>
              </> : null}

            </ListItem>
            {/*----------------------------------History Log Of All application---------------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/historylog')} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',
                  }}
                >
                  <WorkHistory />
                </ListItemIcon>
                <ListItemText primary={'History Log for all Application'} />
              </ListItemButton>
            </ListItem>
            {/* --------------------reporting structure-------------------------------------------- */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/reportingstructure')} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',
                  }}
                >
                  < CgListTree fontSize={20} />
                </ListItemIcon>
                <ListItemText primary={'View Reporting Structure'} />
              </ListItemButton>
            </ListItem>
            <Divider > Admin Features </Divider>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenCompanyManagementMenu(!openCompanyManagementMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary={'Company Managment'} />
                {openCompanyManagementMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              {openCompanyManagementMenu ? <>
                <Fade in={openCompanyManagementMenu} >
                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/addcompany')}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <AddBusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Add Company '} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/viewcompany')}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary={'View Company '} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </List>
                </Fade>
              </> : null}

            </ListItem>

            {/*-----------comapany pages management-------------------*/}

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenCompanyPageManagementMenu(!openCompanyPageManagementMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                  <LocalLibrary />
                </ListItemIcon>
                <ListItemText primary={'Company Page Managment'} />
                {openCompanyPageManagementMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              {openCompanyPageManagementMenu ? <>
                <Fade in={openCompanyPageManagementMenu} >

                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/addcompanypages")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <NoteAdd />
                        </ListItemIcon>
                        <ListItemText primary={'Add Company Page '} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/viewcompanypages")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <Description />
                        </ListItemIcon>
                        <ListItemText primary={'View Company Page '} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </List>

                </Fade>
              </> : null}

            </ListItem>
            {/*---------------user manegement-----------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenUserManagementMenu(!openUserManagementMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                  <SupervisedUserCircle />
                </ListItemIcon>
                <ListItemText primary={'User Managment'} />
                {openUserManagementMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              {openUserManagementMenu ? <>
                <Fade in={openUserManagementMenu} >

                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/adduser")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}
                        >
                          <PersonAdd />
                        </ListItemIcon>
                        <ListItemText primary={'Add User '} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/viewusers")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <BadgeRounded />
                        </ListItemIcon>
                        <ListItemText primary={'View Users '} />
                      </ListItemButton>
                      </ListItem>
                      <Divider />
                  </List>
                </Fade>
              </> : null}
            </ListItem>









            {/*-----------Experience-------------------*/}


            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenExperienceMenu(!openExperienceMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                 <TrendingUp />
                </ListItemIcon>
                <ListItemText primary={'Experience'} />
                {openExperienceMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              {openExperienceMenu ? <>
                <Fade in={openExperienceMenu} >

                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/AddExperience")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <MoreTimeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'AddExperience'} />
                      </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/ViewExperience")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <WysiwygIcon />
                        </ListItemIcon>
                        <ListItemText primary={'ViewExperience'} />
                      </ListItemButton>
                    </ListItem>

                    <Divider />



                  </List>

                </Fade>
              </> : null}

            </ListItem>


            {/*---------------Announcement-----------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenAnnouncementMenu(!openAnnouncementMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                  <Campaign />
                </ListItemIcon>
                <ListItemText primary={'Announcements'} />
                {openAnnouncementMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              {openAnnouncementMenu ? <>
                <Fade in={openAnnouncementMenu} >

                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/addannouncement")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}
                        >
                          <AddAlert />
                        </ListItemIcon>
                        <ListItemText primary={'Add Announcement '} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/viewannouncements")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <Announcement />
                        </ListItemIcon>
                        <ListItemText primary={'View Announcement '} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </List>

                </Fade>
              </> : null}

            </ListItem>

                  {/*-------------Permissions-----------------*/}

                  <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenPermissionsMenu(!openPermissionsMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                 <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary={'Permissions'} />
                {openPermissionsMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              {openPermissionsMenu ? <>
                <Fade in={openPermissionsMenu} >

                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/AddPermissions")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <VpnLockIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'AddPermissions'} />
                      </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/ViewPermissions")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <SyncLockIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'ViewPermissions'} />
                      </ListItemButton>
                    </ListItem>

                    <Divider />



                  </List>

                </Fade>
              </> : null}

            </ListItem>

            {/*---------------leave management-----------------------*/}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setOpenLeaveManagementMenu(!openLeaveManagementMenu)} >
              <ListItemButton
                sx={{
                  minHeight: 45,
                  justifyContent: 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',

                  }}

                >
                  <ManageHistory />
                </ListItemIcon>
                <ListItemText primary={'Leave Managment'} />
                {openLeaveManagementMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />
              {openLeaveManagementMenu ? <>
                <Fade in={openLeaveManagementMenu} >

                  <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/uploadattendance")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}
                        >
                          <UploadFile />
                        </ListItemIcon>
                        <ListItemText primary={'Upload Attendance '} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/viewattendance")}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <EventAvailable />
                        </ListItemIcon>
                        <ListItemText primary={'View Attendance '} />
                      </ListItemButton>
                    </ListItem>



              

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/createreportingstructure')}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >

                          <GroupAdd />
                        </ListItemIcon>
                        <ListItemText primary={'Create Reporting Structure '} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/viewreportingstructure')}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          < CgListTree fontSize={20} />

                        </ListItemIcon>
                        <ListItemText primary={'View Reporting Structure '} />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/historylog-admin')}>
                      <ListItemButton
                        sx={{
                          minHeight: 45,
                          justifyContent: 'center',
                          px: 1.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            ml: 3,
                            justifyContent: 'center',

                          }}

                        >
                          <WorkHistory />

                        </ListItemIcon>
                        <ListItemText primary={'History Log for all applications'} />
                      </ListItemButton>
                    </ListItem>

                    <Divider />
                  </List>

                </Fade>
              </> : null}

            </ListItem>


          </List>

        </Box>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
      <ToastContainer />
    </>
  );
}
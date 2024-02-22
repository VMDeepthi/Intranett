import React, { useState } from 'react';
import AdminNavBar from '../../Comman/NavBar/AdminNavBar';

const ChecklistPaper = () => {
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: 'companymanagement', checked: false },
    { id: 2, text: 'Companypagesmanagement', checked: false },
    { id: 3, text: 'Announcements', checked: false },
    { id: 3, text: 'Experience', checked: false },
    { id: 3, text: 'Leave Management', checked: false },
    { id: 3, text: 'Reporting Structure', checked: false },
    { id: 3, text: 'UserManagement', checked: false },
    
  ]);

  const handleCheckboxChange = (itemId) => {
    setChecklistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      <AdminNavBar /> 
      <div style={{ textAlign: 'center', paddingTop: '200px' }}>
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd' }}>
          <h2>SuperAdmin Access</h2>
          <form>
            {checklistItems.map((item) => (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  {item.text}
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
};

export default ChecklistPaper;

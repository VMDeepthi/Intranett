import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Login from './Components/Comman/Login/Login'
import Dashboard from './Components/Comman/DashBoard/DashBoard'

import AddCompany from './Components/Admin/CompanyManagment/AddCompany'
import ViewCompany from './Components/Admin/CompanyManagment/ViewCompany'
import AddCompanyPages from './Components/Admin/CompanyPagesManagement/AddCompanyPages'
import ViewCompanyPages from './Components/Admin/CompanyPagesManagement/ViewCompanyPages'
import AddUser from './Components/Admin/UserManagement/AddUser'
import ViewUser from './Components/Admin/UserManagement/ViewUser'
import AddExperience from './Components/Admin/Experience/AddExperience'
import ViewExperience from './Components/Admin/Experience/ViewExperience'
import AddPermissions from './Components/Admin/Permissions/AddPermissions'
import ViewPermissions from './Components/Admin/Permissions/ViewPermissions'


import AdminProtectedRoute from './Components/Comman/ProtectedRoute/AdminProtectedRoute'
import CommanProtectedRoute from './Components/Comman/ProtectedRoute/CommanProtectedRoute'

import { UserProvider } from './Components/context/UserProvider'
import Cookies from 'js-cookie'
import ForgotPassword from './Components/Comman/ForgotPassword/ForgotPassword'
import TimeZone from './Components/Comman/TimeZone/TimeZone'
import AddAnnouncement from './Components/Admin/Announcements/AddAnnouncement'
import ViewAnnouncements from './Components/Admin/Announcements/ViewAnnoucement'
import UploadAttendance from './Components/Admin/LeaveManagement/UploadAttendance'
import ViewAttendance from './Components/Admin/LeaveManagement/ViewAttendance'
import Attendance from './Components/Comman/Attendance/Attendance'
import CreateReportingStructure from './Components/Admin/ReportingStructure/CreateReportingStructure'
import ViewReportingStructure from './Components/Admin/ReportingStructure/ViewReportingStructure'
import ChangePassword from './Components/Comman/ChangePassword/ChangePassword'
import ProfileSection from './Components/Comman/ProfileSection/ProfileSection'
import DirectorySearch from './Components/Comman/DirectorySearch/DirectorySearch'
import UserProfileSection from './Components/Comman/UserProfile/UserProfileSection'
import CrossRoadsSection from './Components/Comman/CrossRoads/CrossRoadsSection'
import TeamsSection from './Components/Comman/Teams/TeamsSection'
import ApplyLeave from './Components/Comman/Leave/ApplyLeave'
import ReportingHeadLogin from './Components/Comman/Login/ReportingHeadLogin'
import PaySlips from './Components/Comman/PaySlips/PaySlips'
// import Experience from './Components/Admin/UserManagement/Experience'
import HistoryLog from './Components/Comman/HistoryLog/HistoryLog'
import ReportingStructure from './Components/Comman/ReportingStrucure/ReportingStructure'

export default function App() {
  //console.log(useContext(UserContext))
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/reportingheadlogin/application/:status?' Component={ReportingHeadLogin} />
            <Route path='/forgotpassword' Component={ForgotPassword} />
            {Cookies.get('USERAUTHID') === undefined ? <Route path='*' element={<Navigate to='/login' replace />} /> : <Route path='*' element={<Navigate replace to='/' />} />}
            <Route path='/' element={<CommanProtectedRoute component={<Dashboard />} />} />
            <Route path='/timezones' element={<CommanProtectedRoute component={<TimeZone />} />} />
            <Route path='/attendance' element={<CommanProtectedRoute component={<Attendance />} />} />
            <Route path='/changepassword' element={<CommanProtectedRoute component={<ChangePassword />} />} />
            <Route path='/myprofile' element={<CommanProtectedRoute component={<ProfileSection />} />} />
            <Route path='/directorysearch' element={<CommanProtectedRoute component={<DirectorySearch />} />} />
            <Route path='/viewuserprofile/:emp_id/info' element={<CommanProtectedRoute component={<UserProfileSection />} />} />
            <Route path='/crossroads' element={<CommanProtectedRoute component={<CrossRoadsSection />} />} />
            <Route path='/teams' element={<CommanProtectedRoute component={<TeamsSection />} />} />
            <Route path='/applyleave' element={<CommanProtectedRoute component={<ApplyLeave />} />} />
            <Route path='/reportingstructure' element={<CommanProtectedRoute component={<ReportingStructure />} />} />
            <Route path='/historylog' element={<CommanProtectedRoute component={<HistoryLog />} />} />
            <Route path='/payslips' element={<CommanProtectedRoute component={<PaySlips />} />} />
            
            {/*----------------------------ADMIN------------------------------------------------------------------------------------ */}
            <Route path='/addcompany' element={<AdminProtectedRoute component={<AddCompany />} />} />
            <Route path='/viewcompany' element={<AdminProtectedRoute component={<ViewCompany />} />} />
            <Route path='/addcompanypages' element={<AdminProtectedRoute component={<AddCompanyPages />} />} />
            <Route path='/viewcompanypages' element={<AdminProtectedRoute component={<ViewCompanyPages />} />} />
            <Route path='/adduser' element={<AdminProtectedRoute component={<AddUser />} />} />
            <Route path='/viewusers' element={<AdminProtectedRoute component={<ViewUser />} />} />
            <Route path='/Addexperience' element={<AdminProtectedRoute component={<AddExperience />} />} />
            <Route path='/Viewexperience' element={<AdminProtectedRoute component={<ViewExperience />} />} />
            <Route path='/addannouncement' element={<AdminProtectedRoute component={<AddAnnouncement />} />} />
            <Route path='/viewannouncements' element={<AdminProtectedRoute component={<ViewAnnouncements />} />} />
            <Route path='/uploadattendance' element={<AdminProtectedRoute component={<UploadAttendance />} />} />
            <Route path='/viewattendance' element={<AdminProtectedRoute component={<ViewAttendance />} />} />
            <Route path='/AddPermissions' element={<AdminProtectedRoute component={<AddPermissions />} />} />
            <Route path='/ViewPermissions' element={<AdminProtectedRoute component={<ViewPermissions />} />} />
            
            <Route path='/createreportingstructure' element={<AdminProtectedRoute component={<CreateReportingStructure />} />} />
            <Route path='/viewreportingstructure' element={<AdminProtectedRoute component={<ViewReportingStructure />} />} />
            

            {/*----------------------------USER------------------------------------------------------------------------------------ */}

            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </UserProvider>


      </BrowserRouter>
    </>
  )
}

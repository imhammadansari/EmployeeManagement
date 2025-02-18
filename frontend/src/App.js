import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import DashboardPage from "./Pages/DashboardPage";
import ViewEmployee from "./Pages/ViewEmployee";
import UpdateEmployee from "./Pages/UpdateEmployee";
import DeleteEmployee from "./Pages/DeleteEmployee";
import AddDepartment from "./Pages/AddDepartment";
import ViewDepartment from "./Pages/ViewDepartment";
import DeleteDepartment from "./Pages/DeleteDepartment";
import LeaveRequest from "./Pages/LeaveRequest";
import EmployeeLogin from "./Pages/EmployeeLogin";
import ViewLeave from "./Pages/ViewLeave";
import ApprovedLeaveRequests from "./Pages/ApprovedLeaveRequests";
import RejectedLeaveRequests from "./Pages/RejectedLeaveRequests";
import EmployeeDashboardPage from "./Pages/EmployeeDashboardPage";
import ViewProfile from "./Pages/ViewProfile";
import PendingLeaves from "./Pages/PendingLeaves";
import TotalLeaveRequests from "./Pages/TotalLeaveRequests";
import AdminLogin from "./Pages/AdminLogin";
import MarkAttendance from "./Pages/MarkAttendance";
import AttendanceView from "./Pages/AttendanceView";
import UpdateAttendance from "./Pages/UpdateAttendance";
import EmployeeAdding from "./Pages/EmployeeAdding";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<DashboardPage />} />
        <Route path="/addEmployee" element={<EmployeeAdding />} />
        <Route path="/viewEmployees" element={<ViewEmployee />} />
        <Route path="/deleteEmployees" element={<DeleteEmployee />} />
        <Route path="/updateEmployees" element={<UpdateEmployee />} />
        <Route path="/addDepartment" element={<AddDepartment />} />
        <Route path="/viewDepartment" element={<ViewDepartment />} />
        <Route path="/deleteDepartment" element={<DeleteDepartment />} />
        <Route path="/leaveRequest" element={<LeaveRequest />} />
        <Route path="/employeeLogin" element={<EmployeeLogin />} />
        <Route path="/viewLeaveRequest" element={<ViewLeave />} />
        <Route path="/pendingLeaves" element={<PendingLeaves />} />
        <Route path="/approvedLeaveRequests" element={<ApprovedLeaveRequests />} />
        <Route path="/rejectedLeaveRequests" element={<RejectedLeaveRequests />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboardPage />} />
        <Route path="/viewProfile" element={<ViewProfile />} />
        <Route path="/totalLeaveRequests" element={<TotalLeaveRequests />} />
        <Route path="/markAttendance" element={<MarkAttendance />} />
        <Route path="/viewAttendance" element={<AttendanceView />} />
        <Route path="/updateAttendance/:attendanceId" element={<UpdateAttendance />} />
      </Routes>
    </>
  )
}

export default App
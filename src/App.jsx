import { useState } from 'react'
import './App.css'
import { HomeExtention, BrowseAllRoom, SignIn, SignupHotel, Role, BookRoom, Home } from './Pages/Index' // Change the import statement to match the correct casing
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import AuthSuccess from './Pages/AuthSuccess';
import { UserContext } from './context/UserContext';
// import AddRoom from './Pages/AddRoom';

function App() {

  // const { user } = UserContext(UserContext); // Access user from context

  return (
    <>
      <Toaster />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<Dashboard />} />
        {/* <Route path='/bookroom' element={<BookRoom />} /> */}
        <Route path='/' element={
          <>
            <Home />
            <HomeExtention />
          </>
        } />
        <Route path='/BrowseRooms' element={<BrowseAllRoom />} />

        {/* Protected Routes */}
        <Route path="/addHotel" element={
          // <PrivateRoute requiredRole="ADMIN">
            <SignupHotel />
          // </PrivateRoute>
        } />
        <Route path="/bookroom" element={
          <PrivateRoute requiredRole="USER">
            <BookRoom />
          </PrivateRoute>
        } />

        {/* Unauthorized Access Route */}
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />

        {/* <Route path='/login' element={<SignIn />} /> */}
        <Route path='/role' element={<Role />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        {/* Catch-All Route */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}

      </Routes>

      {/* <Route path='/addPersonal' element={<SignIn />} /> */}
    </>
  );
}

export default App

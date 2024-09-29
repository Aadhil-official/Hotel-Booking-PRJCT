import { useState } from 'react'
import './App.css'
import { HomeExtention, BrowseAllRoom, SignIn, SignupHotel, Role, BookRoom, Home } from './Pages/Index' // Change the import statement to match the correct casing
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
// import AddRoom from './Pages/AddRoom';

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/bookroom' element={<BookRoom />} />
        <Route path='/' element={
          <>
            <Home />
            <HomeExtention />
          </>
        } />
        <Route path='/BrowseRooms' element={<BrowseAllRoom />} />
        <Route path='/addHotel' element={<SignupHotel />} />
        <Route path='/login' element={<SignIn />} />
        {/* <Route path='/addPersonal' element={<SignIn />} /> */}
        <Route path='/role' element={<Role />} />
      </Routes>
    </>
  );
}

export default App

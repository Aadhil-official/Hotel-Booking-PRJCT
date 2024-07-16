import { useState } from 'react'
import './App.css'
import { BookRoom, Home } from './Pages/Index' // Change the import statement to match the correct casing
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import HomeExtention from './Pages/HomeExtention';
import BrowseAllRoom from './Pages/BrowseAllRoom';
import AddRoom from './Pages/AddRoom';
import SignIn from './Pages/SignIn';

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
        <Route path='/addHotel' element={<AddRoom />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App

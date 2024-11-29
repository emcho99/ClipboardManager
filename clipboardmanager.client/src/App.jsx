import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clipboard from './pages/Clipboard';
import Friends from './pages/Friends';
import TopClips from './pages/TopClips';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/Clipboard' element={<Clipboard />} />
                <Route path='/Friends' element={<Friends />} />
                <Route path='/TopClips' element={<TopClips />} />
                <Route path='/Settings' element={<Settings />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
    
}

export default App;
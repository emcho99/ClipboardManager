import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clipboard from './pages/Clipboard';
import Friends from './pages/Friends';
import TopClips from './pages/TopClips';
import Settings from './pages/Settings';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Clipboard' element={<Clipboard />} />
                <Route path='/Friends' element={<Friends />} />
                <Route path='/TopClips' element={<TopClips />} />
                <Route path='/Settings' element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
    
}

export default App;
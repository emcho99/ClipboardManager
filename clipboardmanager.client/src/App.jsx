import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

  const username = location.state?.username || localStorage.getItem('username');

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useEffect(() => {
  //  const handleUserNameChange = (event) => {
  //    if (event.key === "username") {
  //      const username = location.state?.username || localStorage.getItem('username');
  //      setIsLoggedIn(username ? true : false);
  //    }
  //  }
  //  window.addEventListener("login", handleUserNameChange)
  //  return () => {
  //    window.removeEventListener("login", handleUserNameChange);
  //  }
  //}, [isLoggedIn]);


  return (
    <BrowserRouter>
      {/*<Routes>*/}
      {/*  {username ?*/}
      {/*    <>*/}
      {/*      <Route path='/' element={<Home />} />*/}
      {/*      <Route path='/Clipboard' element={<Clipboard />} />*/}
      {/*      <Route path='/Friends' element={<Friends />} />*/}
      {/*      <Route path='/TopClips' element={<TopClips />} />*/}
      {/*      <Route path='/Settings' element={<Settings />} />*/}
      {/*    </> :*/}
      {/*  <>*/}
      {/*      <Route path='/' element={<Home />} />*/}
      {/*      <Route path='/Login' element={<Login />} />*/}
      {/*      <Route path='/Register' element={<Register />} />*/}
      {/*    </>*/}
      {/*   }*/}

      {/*</Routes>*/}
      <Routes>
        {username ?
            <>
              <Route path='/' element={<Home />} />
              <Route path='/Clipboard' element={<Clipboard />} />
              <Route path='/Friends' element={<Friends />} />
              <Route path='/TopClips' element={<TopClips />} />
              <Route path='/Settings' element={<Settings />} />
            </> :
            <>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
            </>

                } 
                
            </Routes>
        </BrowserRouter>
    );
    
}

export default App;

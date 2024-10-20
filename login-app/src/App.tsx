import React, { useState } from 'react';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Solution from './components/Solution';
import styled from 'styled-components';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { logoutUser } from './store/userSlice';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastMsgType, useGlobalContext } from './context/GlobalContext';

function App() {
  console.log('loaded');
  const { showToastMsg, setLoading } = useGlobalContext();

  let isAuthenticated = useSelector((state: any) => {
    return state.user.isAuthenticated}
  );
  //const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  // if(isAuthenticated){
  //   showToastMsg(ToastMsgType.SUCCESS, 'Login Successful');
  // }

  const handleLogout = (e:any) => {
    setLoading(true);
    showToastMsg(ToastMsgType.SUCCESS, 'loginPARENT');
    logoutUser();
    console.log('Clear');
    navigate('/login', { replace: true });
    //setCounter(counter + 1);
    console.log(isAuthenticated);
    setTimeout(()=>{
      setLoading(false);
    },1000);
  }

  const handleLinkClick = (tabName: any) => {
    navigate('/'+tabName, { replace: true });
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      {isAuthenticated && <Header callLogout={handleLogout} handleLinkClick={handleLinkClick} />}
      <MainContainer>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
            <Route path="/solution" element={isAuthenticated ? <Solution /> : <Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        {/* </BrowserRouter> */}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

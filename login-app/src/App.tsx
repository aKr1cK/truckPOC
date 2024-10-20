import React from 'react';
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
import { useGlobalContext } from './context/GlobalContext';

function App() {
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);
  const { showToastMsg,setUserInfo, userInfo } = useGlobalContext();
  if(isAuthenticated){
    setUserInfo({name:'SATYA'})
    //showToastMsg.
  }else{
    // const navigate = useNavigate();
    // navigate('/login');
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <MainContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
            <Route path="/solution" element={isAuthenticated ? <Solution /> : <Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

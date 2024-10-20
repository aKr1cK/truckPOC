import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafc;
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
  }

  return (
    <HomeContainer>
      <WelcomeMessage>Welcome, {user?.email}</WelcomeMessage>
    </HomeContainer>
  );
};

export default Home;

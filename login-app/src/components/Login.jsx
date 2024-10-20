import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginUser, logoutUser } from '../store/userSlice';

// Styled components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafc;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2ea44f;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  label {
    margin-left: 5px;
  }
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;
`;

const AgentLink = styled.p`
  margin-top: 20px;
  text-align: center;
  
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    width: 48%;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:first-child {
      background-color: #4285f4;
      color: white;
    }

    &:last-child {
      background-color: #3b5998;
      color: white;
    }
  }
`;

// Login component
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(loginUser({ email }));
      navigate('/home');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login to the support portal</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Your e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RememberMe>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me on this computer</label>
          </RememberMe>
          <ForgotPassword href="#">Forgot your password?</ForgotPassword>
          <Button type="submit">Login</Button>
        </form>
        <AgentLink>
          Are you an agent? <a href="#">Login here</a>
        </AgentLink>
        <SocialLogin>
          <button>Google</button>
          <button>Facebook</button>
        </SocialLogin>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

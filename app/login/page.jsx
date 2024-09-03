"use client"
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0b1b35; /* Dark blue background */
  color: white;
`;

const Card = styled.div`
  background-color: #1e2a48; /* Slightly lighter dark blue for card */
  padding: 40px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  background-color: #3498db; /* Button blue color */
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Link = styled.a`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #3498db;
  cursor: pointer;
`;

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      // Handle registration logic
      console.log("Registering user...");
    } else {
      // Handle login logic
      console.log("Logging in user...");
    }
  };

  return (
    <Container>
      <Card>
        <Title>{isRegister ? 'Register' : 'Login'}</Title>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <Input type="text" placeholder="Name" required />
              <Input type="email" placeholder="Email ID" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Input type="text" placeholder="LinkedIn ID" required />
              <Input type="password" placeholder="Password" required />
            </>
          )}
          {!isRegister && (
            <>
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
            </>
          )}
          <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button>
          <Link onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
          </Link>
        </form>
      </Card>
    </Container>
  );
};

export default Auth;

// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  text-align: center;
  padding: 100px 20px;
  background-color: #f9f9f9;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 25px;
    margin-right: 10px;
    width: 300px;
  }

  button {
    padding: 10px 20px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
      background-color: #333;
    }
  }
`;

const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Heading>More Powerful Than Platinum</Heading>
      <Subheading>Gain Complete Command Over Your Company's Expenses, Ensuring Absolute Transparency In Real-Time.</Subheading>
      <Form>
        <input type="email" placeholder="Enter your email address" />
        <button>Apply Now</button>
      </Form>
      <Disclaimer>We Never Use Any Email For Sales, It's Private</Disclaimer>
    </HeroContainer>
  );
};

export default Hero;

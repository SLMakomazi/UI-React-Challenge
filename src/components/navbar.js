// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { FiMail } from 'react-icons/fi';
import logo from '../images/logo1.jpg'; 

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #fff;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px; 
  margin-right: 20px;
`;

const EmailLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo src={logo} alt="Company Logo" />
        <EmailLink href="mailto:Sales@lancerjob.au">
          <FiMail /> Sales@lancerjob.au
        </EmailLink>
      </LeftSection>
      <NavLinks>
        <li>Product</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Developers</li>
      </NavLinks>
      <RightSection>
        <Button>Log In</Button>
        <Button>Apply Now</Button>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;

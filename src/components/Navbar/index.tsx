import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a237e;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #1a237e;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: 1px solid #1a237e;
  border-radius: 4px;
  color: #1a237e;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #1a237e;
    color: white;
  }
`;

const RegisterButton = styled(Link)`
  padding: 0.5rem 1rem;
  background: #1a237e;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #0d47a1;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">WHYT Education</Logo>
        <NavLinks>
          <NavLink to="/courses">课程</NavLink>
          <NavLink to="/about">关于我们</NavLink>
          <NavLink to="/contact">联系我们</NavLink>
          <AuthButtons>
            <LoginButton to="/login">登录</LoginButton>
            <RegisterButton to="/register">注册</RegisterButton>
          </AuthButtons>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 
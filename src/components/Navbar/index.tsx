import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #1a237e;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #b3e5fc;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavContent>
        <Logo>武汉翼通教育</Logo>
        <NavLinks>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/courses">课程</NavLink>
          <NavLink to="/career-planning">高考考研志愿咨询</NavLink>
          <NavLink to="/login">登录</NavLink>
          <NavLink to="/register">注册</NavLink>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar; 
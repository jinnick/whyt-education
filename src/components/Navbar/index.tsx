import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
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
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo to="/">武汉翼通教育</Logo>
      <NavLinks>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/courses">课程服务</NavLink>
        <NavLink to="/about">关于我们</NavLink>
        <NavLink to="/contact">联系我们</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar; 
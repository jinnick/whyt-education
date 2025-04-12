import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import SubCourseDetail from './pages/SubCourseDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserProvider, useUser } from './contexts/UserContext';
import { logout } from './api/auth';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: #1a237e;
  padding: 1rem 2rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
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
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const LogoutButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Footer = styled.footer`
  background: #1a237e;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
`;

const Navigation = () => {
  const { user } = useUser();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <Nav>
      <Logo to="/">武汉翼通教育咨询公司</Logo>
      <NavLinks>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/courses">课程</NavLink>
        <NavLink to="/about">关于我们</NavLink>
        <NavLink to="/contact">联系我们</NavLink>
        {user ? (
          <UserInfo>
            <span>欢迎，{user.email}</span>
            <LogoutButton onClick={handleLogout}>退出</LogoutButton>
          </UserInfo>
        ) : (
          <>
            <NavLink to="/login">登录</NavLink>
            <NavLink to="/register">注册</NavLink>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

function App() {
  return (
    <Router>
      <UserProvider>
        <AppContainer>
          <Header>
            <Navigation />
          </Header>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/subcourse/:id" element={<SubCourseDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Main>
          <Footer>
            <p>© 2024 武汉翼通教育咨询公司. All rights reserved.</p>
          </Footer>
        </AppContainer>
      </UserProvider>
    </Router>
  );
}

export default App;

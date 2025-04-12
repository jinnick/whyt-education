import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Hero = styled.div`
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #1a237e;
  margin-bottom: 1rem;
  text-align: center;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`;

const Button = styled(Link)`
  background-color: #1a237e;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Hero>
        <HeroTitle>武汉翼通教育咨询公司</HeroTitle>
        <HeroSubtitle>专业的教育咨询服务，助力您的学术与职业发展</HeroSubtitle>
        <Button to="/courses">查看课程</Button>
      </Hero>
    </Container>
  );
};

export default Home; 
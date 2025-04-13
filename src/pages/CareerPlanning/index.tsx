import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a237e;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #1a237e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0d47a1;
  }
`;

const CareerPlanning: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>高考考研辅导服务</Title>
      <ButtonContainer>
        <Button onClick={() => navigate('/sub-course/7')}>高考辅导</Button>
        <Button onClick={() => navigate('/sub-course/8')}>考研辅导</Button>
      </ButtonContainer>
    </Container>
  );
};

export default CareerPlanning; 
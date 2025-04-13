import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a237e;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2024 武汉翼通教育咨询公司. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer; 
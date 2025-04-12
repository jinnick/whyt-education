import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  margin: 10px 0;
  color: #666;
`;

const ContactIcon = styled.span`
  margin-right: 10px;
`;

const ContactText = styled.span`
  margin-right: 10px;
`;

const QRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  background: #fff;
  margin: 20px auto;
  display: block;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Title>联系我们</Title>
      
      <ContactInfo>
        <ContactItem>
          <ContactIcon>📱</ContactIcon>
          <ContactText>扫下方的二维码联系我们：</ContactText>
        </ContactItem>
        <QRCodeImage src="qrcode.png" alt="联系我们二维码" />
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact; 
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

const QRCodeContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  display: inline-block;
`;

const QRCodeTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

const QRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  background: #fff;
  margin: 0 auto;
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
        <QRCodeImage src={`${import.meta.env.BASE_URL}qrcode.png`} alt="联系我们二维码" />
      </ContactInfo>

      <QRCodeContainer>
        <QRCodeTitle>扫描二维码关注我们</QRCodeTitle>
        <div style={{ width: '200px', height: '200px', background: '#fff', margin: '0 auto' }}>
          {/* 这里需要替换为实际的二维码图片 */}
          <p style={{ lineHeight: '200px' }}>二维码图片</p>
        </div>
      </QRCodeContainer>
    </ContactContainer>
  );
};

export default Contact; 
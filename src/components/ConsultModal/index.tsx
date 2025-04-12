import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  color: #1a237e;
  margin-bottom: 1.5rem;
`;

const QRCodeContainer = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const QRCodeText = styled.div`
  color: #666;
  font-size: 0.9rem;
  text-align: center;
`;

const QRCode = styled.img`
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  display: block;
`;

const ContactInfo = styled.div`
  margin: 1.5rem 0;
  color: #666;
`;

const ContactItem = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  background: #1a237e;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  &:hover {
    background: #0d47a1;
  }
`;

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>联系我们</Title>
        <QRCodeContainer>
          <QRCode 
            src="/qrcode.png"
            alt="微信二维码"
          />
          <QRCodeText>扫描二维码添加微信</QRCodeText>
        </QRCodeContainer>
        <ContactInfo>
          <ContactItem>
            <span>微信：</span>
            <span>whyt_education</span>
          </ContactItem>
          <ContactItem>
            <span>邮箱：</span>
            <span>contact@whyt.education</span>
          </ContactItem>
          <ContactItem>
            <span>电话：</span>
            <span>+86 123 4567 8900</span>
          </ContactItem>
        </ContactInfo>
        <CloseButton onClick={onClose}>关闭</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConsultModal; 
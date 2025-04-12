import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../../api/auth';

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #1a237e;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #1a237e;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  background: #1a237e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #0d47a1;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  text-align: center;
  margin-top: 1rem;
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 1rem;
  a {
    color: #1a237e;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SuccessMessage = styled.div`
  color: #4caf50;
  text-align: center;
  margin-top: 1rem;
`;

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }
    try {
      await register(email, password);
      setSuccess(true);
      setError('');
      // 3秒后跳转到登录页面
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError('注册失败，该邮箱已被注册');
      setSuccess(false);
    }
  };

  return (
    <RegisterContainer>
      <Title>注册</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="确认密码"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">注册</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>注册成功！3秒后将跳转到登录页面...</SuccessMessage>}
      </Form>
      <LoginLink>
        已有账号？<Link to="/login">立即登录</Link>
      </LoginLink>
    </RegisterContainer>
  );
};

export default Register; 
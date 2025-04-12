import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../../api/auth';
import { useUser } from '../../contexts/UserContext';

const LoginContainer = styled.div`
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

const RegisterLink = styled.div`
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

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      setUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate('/');
    } catch (err) {
      setError('登录失败，请检查邮箱和密码');
    }
  };

  return (
    <LoginContainer>
      <Title>登录</Title>
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
        <Button type="submit">登录</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
      <RegisterLink>
        还没有账号？<Link to="/register">立即注册</Link>
      </RegisterLink>
    </LoginContainer>
  );
};

export default Login; 
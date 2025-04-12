interface User {
  id: string;
  email: string;
  password: string;
}

// 模拟用户数据库
const users: User[] = [];

export const mockLogin = async (email: string, password: string) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('邮箱或密码错误');
  }
  
  return {
    token: 'mock-token-' + user.id,
    user: {
      id: user.id,
      email: user.email
    }
  };
};

export const mockRegister = async (email: string, password: string) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 检查邮箱是否已存在
  if (users.some(u => u.email === email)) {
    throw new Error('该邮箱已被注册');
  }
  
  // 创建新用户
  const newUser: User = {
    id: Date.now().toString(),
    email,
    password
  };
  
  users.push(newUser);
  
  return {
    message: '注册成功'
  };
}; 
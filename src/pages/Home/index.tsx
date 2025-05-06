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

const TeamSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  margin-top: 2rem;
`;

const TeamTitle = styled.h2`
  text-align: center;
  color: #1a237e;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const TeamMember = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberName = styled.h3`
  color: #1a237e;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const MemberTitle = styled.p`
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const MemberDescription = styled.div`
  color: #333;
  line-height: 1.6;
  text-align: left;
  font-size: 1rem;
`;

const Home: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: '美国留学',
      description: '专业的美国留学咨询服务，包括学校选择、申请材料准备、签证指导等',
      link: '/course/1',
      tags: ['留学', '美国', '申请']
    },
    {
      id: 2,
      title: '港、澳、新加坡及欧洲以及中东国家等国家留学',
      description: '专业的留学咨询服务，包括学校选择、申请材料准备等',
      link: '/course/2',
      tags: ['留学', '港澳', '欧洲']
    },
    {
      id: 3,
      title: '人工智能AI交叉生物学医学等science学科论文培训导师一对一服务',
      description: '专业的AI科研论文培训服务，包括课题选择、论文指导等',
      link: '/course/ai-research',
      tags: ['AI', '科研', '论文']
    },
    {
      id: 4,
      title: '大语言模型LLM推理加速应用医学数据课程',
      description: '探索大型语言模型 (LLM) 推理加速的核心技术结合医学数据应用提高医学LLM推理速度降低推理资源',
      link: '/course/ai-llm-accel',
      tags: ['AI', 'LLM', '医学']
    },
    {
      id: 5,
      title: '面向医学与健康的AI Agent思路 大数据分析_EHR_RPA_预处理',
      description: 'AI Agent在医疗健康领域的应用，包括大数据分析、EHR处理等',
      link: '/course/ai-agent',
      tags: ['AI', 'Agent', '医学']
    },
    {
      id: 6,
      title: '大语言模型DeepSeek Finetune推理应用医学文本数据实操代码课程',
      description: '开源大型语言模型在医学领域的应用，包括模型训练、推理等',
      link: '/course/ai-llm',
      tags: ['AI', 'LLM', '医学']
    },
    {
      id: 7,
      title: '医学人工智能前沿模型发论文基础课程',
      description: '医学人工智能前沿模型的基础课程，包括模型介绍、应用等',
      link: '/course/ai',
      tags: ['AI', '医学', '论文']
    },
    {
      id: 8,
      title: '高考志愿咨询',
      description: '专业的高考志愿填报咨询服务，为您的大学选择提供专业指导',
      link: '/course/gaokao',
      tags: ['高考', '志愿', '咨询']
    },
    {
      id: 9,
      title: '考研志愿咨询',
      description: '专业的考研志愿填报咨询服务，为您的考研之路提供专业指导',
      link: '/course/kaoyan',
      tags: ['考研', '志愿', '咨询']
    }
  ];

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
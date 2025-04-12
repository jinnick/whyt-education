import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #333;
  }
`;

const AITraining: React.FC = () => {
  return (
    <Container>
      <Title>AI课程培训</Title>
      <Description>前沿AI技术培训，培养未来科技人才</Description>
      
      <Section>
        <SectionTitle>课程内容</SectionTitle>
        <List>
          <ListItem>AI基础理论与算法</ListItem>
          <ListItem>机器学习与深度学习</ListItem>
          <ListItem>计算机视觉与自然语言处理</ListItem>
          <ListItem>AI项目实战训练</ListItem>
          <ListItem>AI竞赛指导</ListItem>
          <ListItem>AI论文写作与发表</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>课程特色</SectionTitle>
        <List>
          <ListItem>实战导向的课程设计</ListItem>
          <ListItem>项目驱动的学习方式</ListItem>
          <ListItem>行业专家一对一指导</ListItem>
          <ListItem>企业级项目实战</ListItem>
          <ListItem>竞赛获奖经验分享</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>适合人群</SectionTitle>
        <List>
          <ListItem>计算机相关专业学生</ListItem>
          <ListItem>AI领域从业者</ListItem>
          <ListItem>对AI感兴趣的研究人员</ListItem>
          <ListItem>企业技术团队</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>课程信息</SectionTitle>
        <List>
          <ListItem>课程时长：根据课程内容定制</ListItem>
          <ListItem>课程费用：根据课程类型定制</ListItem>
          <ListItem>授课形式：线上/线下授课</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default AITraining; 
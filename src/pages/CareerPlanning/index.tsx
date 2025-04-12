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

const CareerPlanning: React.FC = () => {
  return (
    <Container>
      <Title>职业规划</Title>
      <Description>专业职业发展指导，助力职场成功</Description>
      
      <Section>
        <SectionTitle>服务内容</SectionTitle>
        <List>
          <ListItem>职业兴趣与能力评估</ListItem>
          <ListItem>行业分析与职业选择</ListItem>
          <ListItem>简历优化与面试技巧</ListItem>
          <ListItem>职业发展路径规划</ListItem>
          <ListItem>职场技能提升</ListItem>
          <ListItem>职业转型指导</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>服务特色</SectionTitle>
        <List>
          <ListItem>个性化职业测评</ListItem>
          <ListItem>行业专家一对一咨询</ListItem>
          <ListItem>职业发展资源对接</ListItem>
          <ListItem>职场技能培训</ListItem>
          <ListItem>职业转型支持</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>适合人群</SectionTitle>
        <List>
          <ListItem>在校大学生</ListItem>
          <ListItem>职场新人</ListItem>
          <ListItem>计划转行的职场人士</ListItem>
          <ListItem>寻求职业发展的专业人士</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>服务信息</SectionTitle>
        <List>
          <ListItem>服务时长：根据服务内容定制</ListItem>
          <ListItem>服务费用：根据服务类型定制</ListItem>
          <ListItem>服务形式：线上/线下咨询</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default CareerPlanning; 
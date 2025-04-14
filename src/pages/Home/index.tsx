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
`;

const TeamTitle = styled.h2`
  text-align: center;
  color: #1a237e;
  margin-bottom: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamMember = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  color: #1a237e;
  margin-bottom: 1rem;
`;

const MemberTitle = styled.p`
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
`;

const MemberDescription = styled.p`
  color: #333;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Hero>
        <HeroTitle>武汉翼通教育咨询公司</HeroTitle>
        <HeroSubtitle>专业的教育咨询服务，助力您的学术与职业发展</HeroSubtitle>
        <Button to="/courses">查看课程</Button>
      </Hero>
      <TeamSection>
        <TeamTitle>我们的团队</TeamTitle>
        <TeamGrid>
          <TeamMember>
            <MemberName>猴老师</MemberName>
            <MemberTitle>英国大学副教授</MemberTitle>
            <MemberDescription>
              • 英国大学副教授（Associate Professor/Reader）<br />
              • 旅欧10+年，居英8+年，大学任教~10年<br />
              • 曾在国内综合性985大学任教职，主持国家级、省级项目<br />
              • 至今英国大学任教7年，项目经费 &gt; £ 1M<br />
              • 曾全过程管理学院所有博士研究生，包括入学(Admission)，考核(Review)，毕业(Viva/Defence)<br />
              • 学校学位评定委员会委员<br />
              • 现管理人工智能硕士专业(MSc AI)
            </MemberDescription>
          </TeamMember>
          <TeamMember>
            <MemberName>米老师</MemberName>
            <MemberTitle>美国州立大学终身教授</MemberTitle>
            <MemberDescription>
              • 留美10余年<br />
              • 美国计算机博士<br />
              • 州立大学终身教授
            </MemberDescription>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </Container>
  );
};

export default Home; 
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #1a237e;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #1a237e;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a237e;
`;

const Content = styled.div`
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
`;

const SubSection = styled.div`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h3`
  color: #1a237e;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: #1a237e;
    position: absolute;
    left: 0;
  }
`;

const Highlight = styled.span`
  color: #1a237e;
  font-weight: bold;
`;

const TeamSection = styled.section`
  margin-top: 3rem;
`;

const TeamTitle = styled.h2`
  color: #1a237e;
  text-align: center;
  margin-bottom: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #1a237e;
`;

const MemberName = styled.h3`
  color: #1a237e;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #333;
  font-size: 0.9rem;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Title>关于我们</Title>
      
      <Section>
        <Content>
          武汉翼通教育咨询公司立足教育创新前沿，致力于为全球学子及科研爱好者提供AI教育科研培训与一站式留学咨询服务，以"科技赋能教育，智慧链接未来"为核心使命，助力个体在人工智能时代实现学术与职业发展的双重突破。
        </Content>
      </Section>

      <Section>
        <SectionTitle>AI教育科研培训——打造未来竞争力</SectionTitle>
        <Content>
          公司聚焦人工智能领域，面向青少年、高校学生及职场人士，设计多层次科研实践课程：
        </Content>
        
        <SubSection>
          <SubTitle>前沿课程体系</SubTitle>
          <Content>
            涵盖机器学习、深度学习、计算机视觉等热门方向，融合理论讲授与项目实战，联合国内外顶尖高校教授及企业专家研发课程，确保内容与国际技术趋势同步。
          </Content>
        </SubSection>

        <SubSection>
          <SubTitle>科研赋能计划</SubTitle>
          <Content>
            为学生提供参与国家级实验室课题、发表SCI论文、开发AI应用产品的机会，显著提升学术背景与创新能力。
          </Content>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>留学咨询服务——定制化全球升学方案</SectionTitle>
        <Content>
          依托资深海归导师团队与全球院校资源，公司提供精准高效的留学规划：
        </Content>

        <SubSection>
          <SubTitle>精准定位</SubTitle>
          <Content>
            基于学生兴趣、学术背景及职业目标，量身定制选校策略，涵盖美国、英国、澳洲、新加坡等主流留学目的地。
          </Content>
        </SubSection>

        <SubSection>
          <SubTitle>全流程护航</SubTitle>
          <Content>
            从文书润色、面试辅导到签证办理，专业团队全程跟踪，历年成功帮助数百名学生进入QS百强名校。
          </Content>
        </SubSection>

        <SubSection>
          <SubTitle>背景提升</SubTitle>
          <Content>
            结合AI科研项目、国际竞赛等资源，打造独特申请画像，突破同质化竞争。
          </Content>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>核心优势</SectionTitle>
        <List>
          <ListItem>
            <Highlight>产学研融合：</Highlight>
            与多所世界500强科技企业及高校实验室建立合作，确保教育资源的前沿性与实践性。
          </ListItem>
          <ListItem>
            <Highlight>双导师制：</Highlight>
            学术导师（博士/教授）与行业专家联合指导，兼顾理论深度与产业应用视角。
          </ListItem>
          <ListItem>
            <Highlight>数据驱动服务：</Highlight>
            通过AI算法分析历年录取案例，动态优化申请策略，提升成功率。
          </ListItem>
        </List>
      </Section>

      <Section>
        <Content>
          翼通教育始终践行"以学生为中心"的理念，通过科技与教育的深度结合，助力每一位学习者成为AI时代的领航者。未来，公司将持续拓展国际合作网络，推动优质教育资源普惠化，为全球人才发展注入新动能。
        </Content>
      </Section>

      <TeamSection>
        <TeamTitle>我们的团队</TeamTitle>
        <TeamGrid>
          <TeamMember>
            <MemberPhoto src="/wuyunzhai.jpg" alt="五云寨主老师" />
            <MemberName>五云寨主老师</MemberName>
            <MemberRole>教育咨询总监</MemberRole>
            <MemberBio>
              985本科和硕士，澳大利亚昆士兰大学计算机博士。曾任美国国立卫生院科学家和美国名校助理教授。
              现任国内某头部研究所独立PI，研究成果曾发表于人工智能，计算机视觉，医学图像等领域的国际顶级会议和期刊上。
              在人工智能以及于医学，生物等交叉领域具有丰富的实战经验和个人实力。
            </MemberBio>
          </TeamMember>
          <TeamMember>
            <MemberPhoto src="/Kyrie.jpg" alt="Kyrie老师" />
            <MemberName>Kyrie老师</MemberName>
            <MemberRole>学术顾问</MemberRole>
            <MemberBio>
              基础医学美国PhD（神经退化性疾病研究），美国哥伦比亚大学计算机（机器学习方向）硕士，互联网公司机器学习算法工程师。
              授课老师的基础医学研究背景和计算机工程背景可以深入理解临床医学生物学研究的问题并针对性的讲解机器学习模型用于解决相关问题。
            </MemberBio>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </Container>
  );
};

export default About; 
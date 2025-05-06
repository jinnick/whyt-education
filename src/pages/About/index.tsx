import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  overflow: visible;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  height: auto;
  overflow: visible;
`;

const MemberPhoto = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const MemberName = styled.h3`
  color: #1a237e;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.5em;
  width: 100%;
`;

const MemberRole = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2em;
  width: 100%;
`;

const MemberBio = styled.ul`
  color: #333;
  line-height: 1.8;
  padding-left: 20px;
  list-style-type: disc;
  margin: 0;
  width: 100%;
  height: auto;
  overflow: visible;
`;

const teachers = [
  {
    name: '猴老师',
    title: '授课老师',
    photo: null,
    info: [
      '英国大学副教授（Associate Professor/Reader）',
      '旅欧10+年，居英8+年，大学任教~10年',
      '曾在国内综合性985大学任教职，主持国家级、省级项目',
      '至今英国大学任教7年，项目经费 > £ 1M',
      '曾全过程管理学院所有博士研究生，包括入学(Admission)，考核(Review)，毕业(Viva/Defence)',
      '学校学位评定委员会委员',
      '现管理人工智能硕士专业(MSc AI)'
    ]
  },
  {
    name: '米老师',
    title: '授课老师',
    photo: null,
    info: [
      '留美10余年',
      '美国计算机博士',
      '州立大学终身教授'
    ]
  },
  {
    name: '五云寨主',
    title: '技术顾问',
    photo: '/images/wuyunzhai.jpg',
    info: [
      '985本科和硕士，澳大利亚昆士兰大学计算机博士',
      '曾任美国国立卫生院科学家和美国名校助理教授',
      '现任国内某头部研究所独立PI',
      '研究成果曾发表于人工智能，计算机视觉，医学图像等领域的国际顶级会议和期刊上',
      '在人工智能以及于医学，生物等交叉领域具有丰富的实战经验和个人实力'
    ]
  },
  {
    name: 'Kyrie老师',
    title: '学术顾问',
    photo: '/images/Kyrie.jpg',
    info: [
      '基础医学美国PhD（神经退化性疾病研究），美国哥伦比亚大学计算机（机器学习方向）硕士',
      '互联网公司机器学习算法工程师',
      '授课老师的基础医学研究背景和计算机工程背景可以深入理解临床医学生物学研究的问题并针对性的讲解机器学习模型用于解决相关问题'

      
    ]
  }
];

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
          {teachers.map((teacher, index) => (
            <TeamMember key={index}>
              <MemberPhoto>
                {teacher.photo ? (
                  <img src={teacher.photo} alt={teacher.name} />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                    <rect width="200" height="200" fill="#ddd" />
                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#666" fontSize="24">
                      {teacher.name}
                    </text>
                  </svg>
                )}
              </MemberPhoto>
              <MemberName>{teacher.name}</MemberName>
              <MemberRole>{teacher.title}</MemberRole>
              <MemberBio>
                {teacher.info.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </MemberBio>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>
    </Container>
  );
};

export default About; 
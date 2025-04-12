import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ConsultModal from '../../components/ConsultModal';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #1a237e, #0d47a1);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: white;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Section = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #1a237e;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e8eaf6;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 12px 15px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #333;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e8eaf6;
  }
  &:before {
    content: "•";
    color: #1a237e;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const PackageCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e8eaf6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PackageTitle = styled.h3`
  font-size: 1.4rem;
  color: #1a237e;
  margin-bottom: 15px;
  font-weight: 600;
`;

const PackagePrice = styled.span`
  display: inline-block;
  background-color: #1a237e;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  padding: 10px 15px;
  margin-bottom: 8px;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  &:before {
    content: "✓";
    color: #1a237e;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const TeacherInfo = styled.div`
  background: linear-gradient(135deg, #e8eaf6, #c5cae9);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const TeacherName = styled.h3`
  font-size: 1.4rem;
  color: #1a237e;
  margin-bottom: 10px;
  font-weight: 600;
`;

const TeacherDescription = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
`;

const ConsultButton = styled.button`
  background: #1a237e;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background: #0d47a1;
  }
`;

const CoursePrice = styled.div`
  font-size: 24px;
  color: #e74c3c;
  margin: 20px 0;
`;

const CourseFeature = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
`;

// 定义课程数据类型
interface Package {
  name: string;
  price: string;
  services: string[];
}

interface SingleConsultation {
  description: string;
  price: string;
  process: string[];
}

interface Course {
  title: string;
  description: string;
  teacher: string;
  outline: string[];
  features: string[];
  targetAudience: string[];
  duration: string;
  price: string;
  format: string;
  packages?: Package[];
  singleConsultation?: SingleConsultation;
  researchDirections?: string[];
  serviceDetails?: string[];
}

// 课程数据
const courses: Record<number, Course> = {
  1: {
    title: '美国留学',
    description: '专业的美国留学咨询服务，为您的留学之路提供全方位支持。',
    teacher: '留学顾问团队',
    outline: [
      '学校及专业选择咨询',
      '申请材料准备指导',
      '文书修改服务',
      '签证申请指导',
      '面试准备辅导',
      '美国生活指南'
    ],
    features: [
      '专业团队一对一服务',
      '全程跟踪指导',
      '个性化定制方案',
      '丰富的成功案例',
      '完善的后续服务'
    ],
    targetAudience: [
      '计划赴美留学的学生',
      '需要专业留学指导的申请者',
      '希望获得个性化留学方案的人群'
    ],
    duration: '根据申请进度',
    price: '15000-30000元',
    format: '一对一咨询',
    packages: [
      {
        name: 'A套餐',
        price: '15000元人民币',
        services: [
          '针对本人专业背景、职业发展规划等特点，提供学校及专业选择咨询指导',
          '指导申请材料的组织准备（不包括文书修改）',
          '美国签证申请和面试指导',
          '赠送美国生存指南，包括租房，医疗保险，机票，酒店，旅游等'
        ]
      },
      {
        name: 'B套餐',
        price: '20000元人民币',
        services: [
          '针对本人专业背景、职业发展规划等特点，提供学校专业选择咨询指导',
          '指导申请材料的组织准备',
          '申请文书修改',
          '美国签证申请和面试指导',
          '赠送美国生存指南，包括租房，医疗保险，机票，酒店，旅游等'
        ]
      },
      {
        name: 'C套餐',
        price: '30000元人民币',
        services: [
          '针对本人专业背景、职业发展规划等特点，提供学校专业选择咨询指导',
          '指导申请材料的组织准备',
          '申请文书修改',
          '相关专业老师指导PhD面试准备和模拟面试',
          'PhD科研型岗位相关留学建议咨询',
          '美国签证申请和面试指导',
          '赠送美国生存指南，包括租房，医疗保险，机票，酒店，旅游等'
        ]
      },
      {
        name: 'D套餐',
        price: '25000元人民币',
        services: [
          '根据本人特色定制的学校专业选择咨询（LGBTQ专业选择）',
          '指导申请材料的组织准备',
          '申请文书修改（指导写出LGBTQ优势的文书）',
          'LGBTQ相关留学建议咨询',
          '美国签证申请和面试指导',
          '赠送美国生存指南，包括租房，医疗保险，机票，酒店，旅游等'
        ]
      },
      {
        name: 'E套餐',
        price: '30000元人民币',
        services: [
          '根据本人特色定制的学校专业选择咨询（LGBTQ专业选择）',
          '申请材料的组织准备',
          '申请文书修改',
          '相关专业老师辅导PhD面试指导和模拟面试',
          'LGBTQ相关留学建议咨询',
          '美国签证申请和面试指导',
          '赠送美国生存指南，包括租房，医疗保险，机票，酒店，旅游等'
        ]
      }
    ],
    singleConsultation: {
      description: '单项咨询',
      price: '2000元/小时',
      process: [
        '由客户提交需要咨询的问题和专业背景等资料',
        '根据客户的专业背景和诉求，分配专业对口的教师为其提供咨询服务',
        '教师与客户约时间在腾讯会议上1对1有针对性的面谈咨询（教师咨询谈话前需做充分的准备）'
      ]
    }
  },
  2: {
    title: '留学港澳欧洲',
    description: '专业的港澳、新加坡及欧洲、中东国家留学咨询服务，为您的留学之路提供全方位支持。',
    teacher: '留学顾问团队',
    outline: [
      '学校及专业选择咨询',
      '申请材料准备指导',
      '文书修改服务',
      '面试准备辅导',
      '签证申请指导'
    ],
    features: [
      '专业团队一对一服务',
      '全程跟踪指导',
      '个性化定制方案',
      '丰富的成功案例',
      '完善的后续服务'
    ],
    targetAudience: [
      '计划赴港澳、新加坡、欧洲及中东国家留学的学生',
      '需要专业留学指导的申请者',
      '希望获得个性化留学方案的人群'
    ],
    duration: '根据申请进度',
    price: '10000-20000元',
    format: '一对一咨询',
    packages: [
      {
        name: 'A套餐',
        price: '10000元人民币',
        services: [
          '针对本人专业背景、职业发展规划等特点，提供学校及专业选择咨询指导',
          '指导申请材料的组织准备（不包括文书修改）'
        ]
      },
      {
        name: 'B套餐',
        price: '15000元人民币',
        services: [
          '针对本人专业背景、职业发展规划等特点，提供学校专业选择咨询指导',
          '指导申请材料的组织准备',
          '申请文书修改'
        ]
      },
      {
        name: 'C套餐',
        price: '20000元人民币',
        services: [
          '针对本人专业背景、职业发展规划等特点，提供学校专业选择咨询指导',
          '指导申请材料的组织准备',
          '申请文书修改',
          '相关专业老师指导PhD面试准备和模拟面试',
          'PhD科研型岗位相关留学建议咨询'
        ]
      },
      {
        name: 'D套餐',
        price: '15000元人民币',
        services: [
          '根据本人特色定制的学校专业选择咨询（LGBTQ专业选择）',
          '指导申请材料的组织准备',
          '申请文书修改（指导写出LGBTQ优势的文书）',
          'LGBTQ相关留学建议咨询'
        ]
      },
      {
        name: 'E套餐',
        price: '20000元人民币',
        services: [
          '根据本人特色定制的学校专业选择咨询（LGBTQ专业选择）',
          '申请材料的组织准备',
          '申请文书修改',
          '相关专业老师辅导PhD面试指导和模拟面试',
          'LGBTQ相关留学建议咨询'
        ]
      }
    ],
    singleConsultation: {
      description: '单项咨询',
      price: '2000元/小时',
      process: [
        '由客户提交需要咨询的问题和专业背景等资料',
        '根据客户的专业背景和诉求，分配专业对口的教师为其提供咨询服务',
        '教师与客户约时间在腾讯会议上1对1有针对性的面谈咨询（教师咨询谈话前需做充分的准备）'
      ]
    }
  },
  3: {
    title: '医学人工智能前沿模型发论文基础课程',
    description: '深入讲解医学AI领域的前沿模型，帮助学员掌握论文写作技巧',
    teacher: '基础医学美国PhD（神经退化性疾病研究），美国哥伦比亚大学计算机（机器学习方向）硕士，互联网公司机器学习算法工程师。授课老师的基础医学研究背景和计算机工程背景可以深入理解临床医学生物学研究的问题并针对性的讲解机器学习模型用于解决相关问题。',
    outline: [
      '1. python 基础 pytorch 基础 2课时 课后答疑',
      '2. Unet 图像分割基础模型 和医学数据应用 代码实操 2课时 课后答疑',
      '3. NLP Transformer biobert 模型基础 代码实操 2课时 课后答疑',
      '4. LLM fine tune prompt 训练 和医学数据应用 代码实操 2课时课后答疑',
      '5. Vision transformer 模型介绍和医药赛道应用 代码实操 2课时 课后答疑',
      '6. Graph convolutional network 模型介绍以及在医药赛道的应用 代码实操 2课时 课后答疑'
    ],
    features: [
      '前沿模型讲解',
      '论文写作指导',
      '实验设计方法',
      '数据分析技巧'
    ],
    targetAudience: [
      '医学研究人员',
      'AI领域研究者',
      '希望发表高水平论文的学者'
    ],
    duration: '12课时',
    price: '999元',
    format: '课程在线直播 录播模式 直播答疑'
  },
  4: {
    title: '开源大语言模型LLM deepseek 医学文本数据实操课程',
    description: '大语言模型deepseek fintune 推理 应用医学文本数据实操代码课程 (临床医学报告,电子病历表格数据和开源医学文献等)。开源大型语言模型 (LLM) 包括 阿里千问, meta lamer 和最近的国产大模型deepseek 在通用文本领域取得了巨大的成功, 但是在医学领域还需要进一步特异性训练改进自适应与医学问题. 目前开源LLM主要使用医学文献数据库训练,比如pubmed开源论文等, 但是在医学报告理解任务上并不理想, 这个课程主要讲怎样用开源临床医学报告数据做LLM训练推理代码实操,数据讲解, 学会马上可以用起来训练自己的模型.',
    teacher: '美国大厂机器学习高级程序员 (美国藤校毕业计算机硕士+美国top医学院毕业neuroscience PhD)',
    outline: [
      '临床文本数据介绍 包括 radiology report, discharging report 还有电子病历 EHR, 用药数据等',
      'LLM大语言模型基础框架讲解',
      'Deepseek 论文模型框架讲解',
      'Deepseek 论文代码训练讲解, 数据训练讲解实操',
      '提供代码脚本让你回家就可以马上run起来 打造自己的LLM模型',
      '如果要自己发论文选择什么思路构建故事, 适合投稿什么赛道的论文? 帮你准确定位投稿方向',
      '在线答疑'
    ],
    features: [
      '代码讲解',
      '代码实操展示',
      '提供代码脚本',
      '医学数据结合部分讲解'
    ],
    targetAudience: [
      '医学信息学专业学生',
      '临床研究人员',
      '医疗AI开发者',
      '对医学NLP感兴趣的人士'
    ],
    duration: '根据课程安排',
    price: '699元',
    format: '在线直播,录播, 课后组织在线答疑,解答相关问题'
  },
  5: {
    title: '人工智能AI交叉生物学医学等science学科论文培训导师一对一服务',
    description: '五云寨主本人亲自根据学生的学科背景,数据资源,计算资源,学生个人兴趣,学生背景提供科研课题方向选择,为你私人订制课题方向. 目标就是整合最合适的资源做到最优论文结果,避开科研内卷赛道让普娃也可以发好文章。',
    teacher: '五云寨主',
    outline: [
      '第一阶段：课题可行性研究',
      '第二阶段：选定方向与实验准备',
      '第三阶段：系统性实验设计',
      '第四阶段：论文架构规划与初稿完成',
      '第五阶段：论文润色与投稿'
    ],
    features: [
      '一对一导师指导',
      '个性化课题定制',
      '全程论文指导',
      '投稿与修改支持',
      '免费参加AI医学基础培训班'
    ],
    targetAudience: [
      '医学相关专业学生',
      '生物学研究人员',
      'AI领域学者',
      '有志于发表高质量论文的研究人员'
    ],
    duration: '1-1.5年',
    price: '5万人民币',
    format: '一对一服务',
    researchDirections: [
      'zero shot 针对罕见小众病疾研究',
      'few shot 针对医学罕见病研究',
      'AI + 蛋白质结构设计',
      'vision language 多模态语言图像模型在医学多模态数据',
      '医学图像多模态领域研究',
      'Domain adaptation 在医学领域应用',
      'Meta Learning 医学领域应用',
      'Machine unlearning 医学领域隐私保护',
      '基因组组合医学图像研究',
      'EHR组合基因组组合影像学研究',
      '隐私计算结合医学多模态数据研究',
      '医学AI可解释研究',
      '大语言模型医学应用',
      '医学图像文本多模态模型压缩加速',
      'RL LLM医学图像研究',
      '医学AI数据集构建',
      '3D 重建医学图像',
      'ECG/EEG/FMRI脑启发AI研究',
      '病理图像文本结合研究',
      '医学影像肿瘤研究',
      '强化学习口腔医学图像研究',
      '强化学习眼科多模态数据研究',
      '医学图像文本诊断分析',
      '生成式模型构建医学相关数据',
      '联邦学习在EHR应用',
      '推荐系统+隐私攻击防御',
      '视觉大模型在medical video应用',
      'AI分析作物葉病害',
      '组学与细胞影像学多模态数据整合',
      'AI分析兽医病理切片',
      'AI动物行为学分析',
      'AI地理图像数据分析',
      'AI天气预报数据分析'
    ],
    serviceDetails: [
      '根据学生背景、资源、兴趣定制科研课题方向',
      '每周/两周一次一对一会议讨论进度',
      '指导论文阅读、代码选择、实验设计等',
      '不进行论文买卖，注重科研思维培养',
      '根据学生能力选择合适的赛道',
      '以完成项目并投稿成功为服务标准',
      '论文接收后继续提供修改支持',
      '可免费参加AI医学基础培训班',
      '提供代码选择指导，但不代写代码',
      '协助寻找合适的投稿期刊'
    ]
  },
  6: {
    title: '人工智能医学交叉方向论文科研培训通知',
    description: '提供AI与医学交叉领域的科研培训与指导',
    teacher: '五云寨主',
    outline: [
      'zero shot 针对罕见小众病疾研究论文思路',
      'few shot 针对医学罕见病论文和思路',
      'vision language 多模态语言图像模型在医学多模态数据的论文思路',
      '医学图像多模态领域论文思路 CT MRI PET CXR',
      'Domain adaptation 在医学领域思路',
      'Meta Learning 医学领域思路',
      'Machine unlearning 医学领域隐私保护思路'
    ],
    features: [
      '科研方法培训',
      '实验设计指导',
      '数据分析方法',
      '论文写作技巧'
    ],
    targetAudience: [
      '医学研究人员',
      'AI领域研究者',
      '研究生'
    ],
    duration: '14课时',
    price: '1799元',
    format: '直播录播模式上课，直播模式解答问题'
  }
};

const SubCourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const courseId = id ? parseInt(id) : 0;
  
  // 确保courseId是有效的数字
  if (isNaN(courseId) || courseId < 1 || courseId > 6) {
    return <div>课程未找到</div>;
  }

  const course = courses[courseId as keyof typeof courses];

  if (!course) {
    return <div>课程未找到</div>;
  }

  return (
    <Container>
      <Header>
        <Title>{course.title}</Title>
        <Description>{course.description}</Description>
      </Header>
      
      <Content>
        <div>
          <Section>
            <TeacherInfo>
              <TeacherName>授课教师：{course.teacher}</TeacherName>
              <TeacherDescription>专业背景丰富，教学经验丰富</TeacherDescription>
            </TeacherInfo>
          </Section>

          <Section>
            <SectionTitle>课程大纲</SectionTitle>
            <List>
              {course.outline.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </Section>

          <Section>
            <SectionTitle>课程特色</SectionTitle>
            <List>
              {course.features.map((feature, index) => (
                <ListItem key={index}>{feature}</ListItem>
              ))}
            </List>
          </Section>

          <Section>
            <SectionTitle>适合人群</SectionTitle>
            <List>
              {course.targetAudience.map((audience, index) => (
                <ListItem key={index}>{audience}</ListItem>
              ))}
            </List>
          </Section>
        </div>

        <div>
          <Section>
            <SectionTitle>课程信息</SectionTitle>
            <List>
              <ListItem>课程时长：{course.duration}</ListItem>
              <ListItem>课程价格：{course.price}</ListItem>
              <ListItem>授课形式：{course.format}</ListItem>
            </List>
          </Section>

          {course.packages && (
            <Section>
              <SectionTitle>服务套餐</SectionTitle>
              {course.packages.map((pkg, index) => (
                <PackageCard key={index}>
                  <PackageTitle>{pkg.name}</PackageTitle>
                  <PackagePrice>{pkg.price}</PackagePrice>
                  <ServiceList>
                    {pkg.services.map((service, idx) => (
                      <ServiceItem key={idx}>{service}</ServiceItem>
                    ))}
                  </ServiceList>
                </PackageCard>
              ))}
            </Section>
          )}

          {course.singleConsultation && (
            <Section>
              <SectionTitle>单项咨询</SectionTitle>
              <PackageCard>
                <PackageTitle>{course.singleConsultation.description}</PackageTitle>
                <PackagePrice>{course.singleConsultation.price}</PackagePrice>
                <ServiceList>
                  {course.singleConsultation.process.map((step, idx) => (
                    <ServiceItem key={idx}>{step}</ServiceItem>
                  ))}
                </ServiceList>
              </PackageCard>
            </Section>
          )}

          <ConsultButton onClick={() => setIsModalOpen(true)}>
            立即咨询
          </ConsultButton>
        </div>
      </Content>

      <ConsultModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </Container>
  );
};

export default SubCourseDetail; 
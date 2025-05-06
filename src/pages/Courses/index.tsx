import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const CourseTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.5em;
`;

const CourseDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const CourseTag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: #e3f2fd;
  color: #1a237e;
  border-radius: 4px;
  font-size: 0.8em;
  margin-right: 8px;
`;

const CourseCard = styled(Link)`
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &.ai-course {
    background: linear-gradient(135deg, #1a237e, #283593);
    color: white;
    text-align: center;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px;

    ${CourseTitle} {
      color: white;
      font-size: 1.8em;
      margin: 0;
    }

    &::after {
      content: 'AI';
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(255, 255, 255, 0.2);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8em;
      font-weight: bold;
    }
  }
`;

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: '医学人工智能前沿模型发论文基础课程',
      description: '',
      link: '/course/ai',
      tags: ['AI', '科研', '实战'],
      isAICourse: true
    },
    {
      id: 2,
      title: '大语言模型DeepSeek Finetune推理应用医学文本数据实操代码课程',
      description: '',
      link: '/course/ai-llm',
      tags: ['AI', 'LLM', '医学'],
      isAICourse: true
    },
    {
      id: 3,
      title: '人工智能AI交叉生物学医学等science学科论文培训导师一对一服务',
      description: '',
      link: '/course/ai-research',
      tags: ['AI', '科研', '论文'],
      isAICourse: true
    },
    {
      id: 4,
      title: '大语言模型LLM推理加速应用医学数据课程',
      description: '',
      link: '/course/ai-llm-accel',
      tags: ['AI', 'LLM', '加速'],
      isAICourse: true
    },
    {
      id: 5,
      title: '面向医学与健康的AI Agent思路 大数据分析_EHR_RPA_预处理',
      description: '',
      link: '/course/ai-agent',
      tags: ['AI', 'Agent', '医学'],
      isAICourse: true
    },
    {
      id: 6,
      title: '美国留学',
      description: '专业的美国留学咨询服务，为您的留学之路提供全方位支持。',
      link: '/course/1',
      tags: ['留学', '美国']
    },
    {
      id: 7,
      title: '留学港澳欧洲',
      description: '专业的港澳、新加坡及欧洲、中东国家留学咨询服务。',
      link: '/course/2',
      tags: ['留学', '港澳', '欧洲']
    },
    {
      id: 8,
      title: '高考志愿咨询',
      description: '专业的高考志愿填报咨询服务，为您的大学选择提供专业指导。',
      link: '/course/gaokao',
      tags: ['高考', '志愿']
    },
    {
      id: 9,
      title: '考研志愿咨询',
      description: '专业的考研志愿填报咨询服务，为您的考研之路提供专业指导。',
      link: '/course/kaoyan',
      tags: ['考研', '志愿']
    }
  ];

  return (
    <Container>
      <Title>我们的课程与服务</Title>
      <CourseList>
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            to={course.link}
            className={course.isAICourse ? 'ai-course' : ''}
            onClick={() => console.log('Navigating to:', course.link)}
          >
            <CourseTitle>{course.title}</CourseTitle>
            {!course.isAICourse && (
              <>
                <CourseDescription>{course.description}</CourseDescription>
                <div>
                  {course.tags.map((tag, index) => (
                    <CourseTag key={index}>{tag}</CourseTag>
                  ))}
                </div>
              </>
            )}
          </CourseCard>
        ))}
      </CourseList>
    </Container>
  );
};

export default Courses; 
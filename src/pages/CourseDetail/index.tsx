import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { Course } from '../../types/course';

const DetailContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CourseButton = styled.button`
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
  font-size: 16px;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
  }
`;

const courses: Course[] = [
  {
    id: 1,
    title: '留学咨询服务',
    description: '专业的留学规划与申请指导',
    details: {
      content: [],
      features: [],
      targetAudience: [],
      duration: '',
      price: ''
    },
    subCourses: [
      {
        id: 1,
        title: '美国留学',
        description: '美国名校申请指导',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      },
      {
        id: 2,
        title: '留学港澳欧洲',
        description: '港澳及欧洲名校申请指导',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      }
    ]
  },
  {
    id: 2,
    title: 'AI课程培训',
    description: '人工智能、机器学习、深度学习等前沿技术培训',
    details: {
      content: [],
      features: [],
      targetAudience: [],
      duration: '',
      price: ''
    },
    subCourses: [
      {
        id: 3,
        title: '医学人工智能前沿模型发论文基础课程',
        description: '',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      },
      {
        id: 4,
        title: '开源大语言模型LLM deepseek 医学文本数据实操课程',
        description: '',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      },
      {
        id: 5,
        title: '人工智能AI交叉生物学医学等science学科论文培训导师一对一服务',
        description: '',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      },
      {
        id: 6,
        title: '人工智能医学交叉方向论文科研培训通知',
        description: '',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      }
    ]
  },
  {
    id: 3,
    title: '职业规划',
    description: '专业的职业发展指导',
    details: {
      content: [],
      features: [],
      targetAudience: [],
      duration: '',
      price: ''
    },
    subCourses: [
      {
        id: 7,
        title: '职业规划咨询',
        description: '根据个人兴趣和能力制定职业发展路径',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      },
      {
        id: 8,
        title: '简历优化',
        description: '专业简历修改和优化服务',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      },
      {
        id: 9,
        title: '面试技巧培训',
        description: '专业面试技巧和模拟面试培训',
        features: [],
        targetAudience: [],
        duration: '',
        price: ''
      }
    ]
  }
];

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return <div>课程不存在</div>;
  }

  const handleCourseClick = (courseId: number) => {
    navigate(`/subcourse/${courseId}`);
  };

  return (
    <DetailContainer>
      <Title>{course.title}</Title>
      <Description>{course.description}</Description>
      
      {course.subCourses && course.subCourses.length > 0 && (
        <CourseList>
          {course.subCourses.map(subCourse => (
            <CourseButton
              key={subCourse.id}
              onClick={() => handleCourseClick(subCourse.id)}
            >
              {subCourse.title}
            </CourseButton>
          ))}
        </CourseList>
      )}
    </DetailContainer>
  );
};

export default CourseDetail; 
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CoursesContainer = styled.div`
  padding: 20px;
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CourseCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  color: #666;
`;

const Courses: React.FC = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      title: '留学咨询服务',
      description: '专业的留学规划与申请指导'
    },
    {
      id: 2,
      title: 'AI课程培训',
      description: '人工智能、机器学习、深度学习等前沿技术培训'
    },
    {
      id: 3,
      title: '职业规划',
      description: '专业的职业发展指导'
    }
  ];

  const handleCourseClick = (courseId: number) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <CoursesContainer>
      <h1>我们的课程与服务</h1>
      <CourseList>
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            onClick={() => handleCourseClick(course.id)}
          >
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
          </CourseCard>
        ))}
      </CourseList>
    </CoursesContainer>
  );
};

export default Courses; 
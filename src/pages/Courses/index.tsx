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

const CourseCard = styled(Link)`
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: '美国留学',
      description: '专业的美国留学咨询服务，为您的留学之路提供全方位支持。',
      link: '/course/1'
    },
    {
      id: 2,
      title: '留学港澳欧洲',
      description: '专业的港澳、新加坡及欧洲、中东国家留学咨询服务。',
      link: '/course/2'
    }
  ];

  return (
    <Container>
      <Title>我们的课程与服务</Title>
      <CourseList>
        {courses.map(course => (
          <CourseCard key={course.id} to={course.link}>
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
          </CourseCard>
        ))}
      </CourseList>
    </Container>
  );
};

export default Courses; 
import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

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

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const SubCourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const SubCourseCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SubCourseTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
`;

const SubCourseDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: '美国留学',
      description: '专业的美国留学咨询服务，为您的留学之路提供全方位支持。',
      subCourses: [
        {
          id: 4,
          title: '本科申请',
          description: '专业的本科申请指导服务，包括选校、文书、面试等全方位支持。'
        },
        {
          id: 5,
          title: '研究生申请',
          description: '专业的研究生申请指导服务，包括选校、文书、面试等全方位支持。'
        },
        {
          id: 6,
          title: '博士申请',
          description: '专业的博士申请指导服务，包括选校、文书、面试等全方位支持。'
        }
      ]
    },
    {
      id: 2,
      title: '留学港澳欧洲',
      description: '专业的港澳、新加坡及欧洲、中东国家留学咨询服务。',
      subCourses: [
        {
          id: 10,
          title: '港澳留学',
          description: '专业的港澳地区留学申请指导服务。'
        },
        {
          id: 11,
          title: '新加坡留学',
          description: '专业的新加坡留学申请指导服务。'
        },
        {
          id: 12,
          title: '欧洲留学',
          description: '专业的欧洲国家留学申请指导服务。'
        }
      ]
    }
  ];

  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return <div>课程不存在</div>;
  }

  const handleSubCourseClick = (subCourseId: number) => {
    navigate(`/subcourse/${subCourseId}`);
  };

  return (
    <Container>
      <Title>{course.title}</Title>
      <Description>{course.description}</Description>
      <SubCourseList>
        {course.subCourses.map(subCourse => (
          <SubCourseCard 
            key={subCourse.id} 
            onClick={() => handleSubCourseClick(subCourse.id)}
          >
            <SubCourseTitle>{subCourse.title}</SubCourseTitle>
            <SubCourseDescription>{subCourse.description}</SubCourseDescription>
          </SubCourseCard>
        ))}
      </SubCourseList>
    </Container>
  );
};

export default CourseDetail; 
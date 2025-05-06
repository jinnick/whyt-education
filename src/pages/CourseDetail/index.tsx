import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a237e;
  text-align: center;
  margin-bottom: 40px;
`;

const CourseInfo = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #1a237e;
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e3f2fd;
`;

const TeacherInfo = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CourseItem = styled.li`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #e3f2fd;
  }
`;

const CourseName = styled.div`
  flex: 1;
`;

const CourseDuration = styled.div`
  color: #666;
  margin-left: 20px;
  white-space: nowrap;
`;

const CourseLink = styled.a`
  color: #1a237e;
  text-decoration: none;
  margin-left: 20px;
  font-size: 0.9em;

  &:hover {
    text-decoration: underline;
  }
`;

const Price = styled.div`
  text-align: center;
  font-size: 2rem;
  color: #1a237e;
  font-weight: bold;
  margin: 40px 0;
  padding: 20px;
  background: #e3f2fd;
  border-radius: 8px;
`;

const ContactInfo = styled.div`
  text-align: center;
  color: #666;
  margin-top: 30px;
`;

interface CourseContent {
  name: string;
  description?: string;
  duration: string;
  link: string | null;
}

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log('Current course ID:', id);

  const courseType = window.location.pathname.split('/').pop();
  console.log('Course type from URL:', courseType);

  const courseContent: CourseContent[] = courseType === 'kaoyan' ? [
    {
      name: '考研志愿填报咨询',
      description: '专业的考研志愿填报咨询服务',
      duration: '1.5小时',
      link: null
    },
    {
      name: '研究生学业规划',
      description: '如何顺利完成从本科生到研究生的身份转变',
      duration: '持续服务',
      link: null
    },
    {
      name: '职业发展规划',
      description: '深入讨论未来毕业的职业规划、升学规划、出国规划以及就业规划',
      duration: '持续服务',
      link: null
    },
    {
      name: '行业现状分析',
      description: '各行业博士和教授剖析行业现状',
      duration: '持续服务',
      link: null
    },
    {
      name: '学业规划指导',
      description: '如何有效高质量地完成研究生学业，为就业和深造做好准备',
      duration: '持续服务',
      link: null
    },
    {
      name: '后续咨询服务',
      description: '提供五个问题的后续咨询服务',
      duration: '持续服务',
      link: null
    }
  ] : courseType === 'gaokao' ? [
    {
      name: '高考志愿填报咨询',
      description: '专业的高考志愿填报咨询服务',
      duration: '1.5小时',
      link: null
    },
    {
      name: '大学学业规划',
      description: '如何顺利完成从高中生到大学生的身份转变',
      duration: '持续服务',
      link: null
    },
    {
      name: '职业发展规划',
      description: '深入讨论未来毕业的职业规划、升学规划、出国规划以及就业规划',
      duration: '持续服务',
      link: null
    },
    {
      name: '行业现状分析',
      description: '各行业博士和教授剖析行业现状',
      duration: '持续服务',
      link: null
    },
    {
      name: '学业规划指导',
      description: '如何有效高质量地完成大学学业，为就业和深造做好准备',
      duration: '持续服务',
      link: null
    },
    {
      name: '后续咨询服务',
      description: '提供五个问题的后续咨询服务',
      duration: '持续服务',
      link: null
    }
  ] : courseType === '2' ? [
    {
      name: 'A套餐',
      description: '基础留学咨询服务',
      duration: '全程服务',
      link: null
    },
    {
      name: 'B套餐',
      description: '留学申请全套服务',
      duration: '全程服务',
      link: null
    },
    {
      name: 'C套餐',
      description: 'PhD科研型岗位留学申请全套',
      duration: '全程服务',
      link: null
    },
    {
      name: 'D套餐',
      description: 'LGBTQ背景留学申请全套',
      duration: '全程服务',
      link: null
    },
    {
      name: 'E套餐',
      description: 'LGBTQ背景科研类型岗位留学申请全套',
      duration: '全程服务',
      link: null
    },
    {
      name: '单项咨询',
      description: '1对1针对性面谈咨询',
      duration: '按小时计费',
      link: null
    }
  ] : courseType === '1' ? [
    {
      name: 'A套餐',
      description: '基础留学咨询服务',
      duration: '全程服务',
      link: null
    },
    {
      name: 'B套餐',
      description: '留学申请全套服务',
      duration: '全程服务',
      link: null
    },
    {
      name: 'C套餐',
      description: 'PhD科研型岗位留学申请全套',
      duration: '全程服务',
      link: null
    },
    {
      name: 'D套餐',
      description: 'LGBTQ背景留学申请全套',
      duration: '全程服务',
      link: null
    },
    {
      name: 'E套餐',
      description: 'LGBTQ背景科研类型岗位留学申请全套',
      duration: '全程服务',
      link: null
    },
    {
      name: '单项咨询',
      description: '1对1针对性面谈咨询',
      duration: '按小时计费',
      link: null
    }
  ] : courseType === 'ai-agent' ? [
    {
      name: 'AI Agent 概念',
      description: '与AI/ML的区别？10+年积累，5min给你讲明白',
      duration: '1课时',
      link: null
    },
    {
      name: 'LLM在AI Agent浪潮中的作用',
      description: '深入讲解LLM如何赋能AI Agent',
      duration: '1课时',
      link: null
    },
    {
      name: 'AI Agent的应用场景',
      description: '详解AI Agent在各领域的应用',
      duration: '1课时',
      link: null
    },
    {
      name: 'AI Agent的"Hello World"',
      description: '撸出来你的第一个AI Agent',
      duration: '1课时',
      link: null
    },
    {
      name: '数字医学和数字健康应用场景',
      description: 'AI Agent在医疗健康领域的应用',
      duration: '1课时',
      link: null
    },
    {
      name: '论文发表指导',
      description: '灌啊灌，水啊水！',
      duration: '1课时',
      link: null
    }
  ] : courseType === 'ai-llm-accel' ? [
    {
      name: '多头注意力技术 (MHA)',
      description: '深入讲解多头注意力机制在LLM中的应用和优化',
      duration: '1课时',
      link: null
    },
    {
      name: '多查询注意力技术 (MQA)',
      description: '讲解MQA技术如何提升LLM推理效率',
      duration: '1课时',
      link: null
    },
    {
      name: '分页 K-V 缓存 (Paged K-V Cache)',
      description: '详解K-V缓存机制及其在推理加速中的应用',
      duration: '1课时',
      link: null
    },
    {
      name: 'Deepseek KV 缓存压缩技术',
      description: '深入讲解Deepseek的KV缓存压缩技术',
      duration: '1课时',
      link: null
    },
    {
      name: '平滑量化技术 (Smooth Quant)',
      description: '讲解模型量化技术及其在推理加速中的应用',
      duration: '1课时',
      link: null
    },
    {
      name: 'LLM医学文本分析应用',
      description: '包括医学知识问题、诊断、推理以及EHR处理等应用',
      duration: '1课时',
      link: null
    }
  ] : courseType === 'ai-research' ? [
    {
      name: '科研课题方向选择',
      description: '五云寨主本人亲自根据学生的学科背景,数据资源,计算资源,学生个人兴趣,学生背景提供科研课题方向选择,为你私人订制课题方向',
      duration: '持续服务',
      link: null
    },
    {
      name: '一对一会议指导',
      description: '根据课题进展情况进行每周/两周一次一对一会议，讨论课题进度，读论文，选择靠谱的baseline代码，数据集筛选，实验设计，论文结构规划，论文修改，投稿后帮助指导进行审稿人rebutal和论文修改',
      duration: '持续服务',
      link: null
    },
    {
      name: '科研思维培训',
      description: '不进行论文买卖活动，只做科研思维，科研论文研读，科研课题方向性指导和培训',
      duration: '持续服务',
      link: null
    },
    {
      name: '项目执行指导',
      description: '学生必须认真按照导师给出的建议和方向执行。包括课题可行性研究、选定方向、实验设计、论文架构规划、论文润色等阶段',
      duration: '持续服务',
      link: null
    },
    {
      name: '论文投稿指导',
      description: '带领学生完成一个项目，并完成投稿一篇期刊论文。如果需要投稿会议，可以一个项目投会议在扩展期刊',
      duration: '持续服务',
      link: null
    },
    {
      name: '研究方向',
      description: '包括但不限于：zero shot/few shot医学研究、AI+蛋白质结构设计、vision language多模态模型、医学图像多模态、Domain adaptation、Meta Learning、Machine unlearning等',
      duration: '持续服务',
      link: null
    }
  ] : courseType === 'ai-llm' ? [
    {
      name: '临床文本数据介绍',
      description: '包括 radiology report, discharging report 还有电子病历 EHR, 用药数据等',
      duration: '1课时',
      link: null
    },
    {
      name: 'LLM大语言模型基础框架讲解',
      description: '',
      duration: '1课时',
      link: null
    },
    {
      name: 'Deepseek 论文模型框架讲解',
      description: '',
      duration: '1课时',
      link: null
    },
    {
      name: 'Deepseek 论文代码训练讲解',
      description: '数据训练讲解实操',
      duration: '1课时',
      link: null
    },
    {
      name: '代码脚本实践',
      description: '提供代码脚本让你回家就可以马上run起来 打造自己的LLM模型',
      duration: '1课时',
      link: null
    },
    {
      name: '论文发表指导',
      description: '如果要自己发论文选择什么思路构建故事, 适合投稿什么赛道的论文? 帮你准确定位投稿方向',
      duration: '1课时',
      link: null
    }
  ] : courseType === 'ai' ? [
    {
      name: 'Python基础 PyTorch基础',
      duration: '2课时',
      link: null
    },
    {
      name: 'Unet图像分割基础模型和医学数据应用',
      duration: '2课时',
      link: 'https://pyimagesearch.com/2022/02/21/u-net-image-segmentation-in-keras/'
    },
    {
      name: 'NLP Transformer BioBERT模型基础',
      duration: '2课时',
      link: 'https://huggingface.co/dmis-lab/biobert-v1.1'
    },
    {
      name: 'LLM Fine Tune Prompt训练和医学数据应用',
      duration: '2课时',
      link: 'https://github.com/peremartra/Large-Language-Model-Notebooks-Course/blob/main/5-Fine%20Tuning/Prompt_Tuning_PEFT.ipynb'
    },
    {
      name: 'Vision Transformer模型介绍和医药赛道应用',
      duration: '2课时',
      link: 'https://github.com/google-research/vision_transformer'
    },
    {
      name: 'Graph Convolutional Network模型介绍以及在医药赛道的应用',
      duration: '2课时',
      link: 'https://github.com/tkipf/pygcn'
    }
  ] : [];

  const courseInfo = courseType === 'kaoyan' ? {
    title: '考研志愿如何填报、研究生如何读好咨询服务',
    teacher: {
      title: '专业博士导师团队',
      description: '资深教育咨询专家',
      details: '根据感兴趣的专业匹配相关专业的博士导师提供考研志愿填报、研究生学业规划等方面的咨询服务'
    },
    description: '我们团队会根据感兴趣的专业匹配相关专业的博士导师提供考研志愿填报、研究生学业规划等方面的咨询服务。无论考生的考分如何，选好专业并规划好研究生学业，都能够为未来的就业打下良好基础。',
    price: 3000
  } : courseType === 'gaokao' ? {
    title: '高考志愿如何填报、大学如何读好咨询服务',
    teacher: {
      title: '专业博士导师团队',
      description: '资深教育咨询专家',
      details: '根据感兴趣的专业匹配相关专业的博士导师提供高考志愿填报、大学学业规划等方面的咨询服务'
    },
    description: '我们团队会根据感兴趣的专业匹配相关专业的博士导师提供高考志愿填报、大学学业规划等方面的咨询服务。无论考生的考分如何，选好专业并规划好大学学业，都能够为未来的就业打下良好基础。',
    price: 3000
  } : courseType === '2' ? {
    title: '港、澳、新加坡及欧洲以及中东国家等国家留学咨询服务项目及收费标准',
    teacher: {
      title: '专业留学顾问',
      description: '资深留学咨询专家',
      details: '提供全方位的留学咨询服务，包括学校选择、申请材料准备等'
    },
    description: '我们提供多种留学服务套餐，从基础咨询到全套申请服务，满足不同学生的需求。每个套餐都包含专业的留学指导、申请材料准备等服务。',
    price: 10000
  } : courseType === '1' ? {
    title: '美国留学咨询服务项目及收费标准',
    teacher: {
      title: '专业留学顾问',
      description: '资深留学咨询专家',
      details: '提供全方位的留学咨询服务，包括学校选择、申请材料准备、签证指导等'
    },
    description: '我们提供多种留学服务套餐，从基础咨询到全套申请服务，满足不同学生的需求。每个套餐都包含专业的留学指导、申请材料准备、签证申请指导等服务，并赠送美国生存指南。',
    price: 15000
  } : courseType === 'ai-agent' ? {
    title: '面向医学与健康的AI Agent思路 大数据分析_EHR_RPA_预处理',
    teacher: {
      title: '猪叫兽寨主（医学）猴叫兽（Agent）',
      description: '资深AI专家',
      details: '猪叫兽寨主负责医学部分，猴叫兽负责Agent部分'
    },
    description: '小扎说：想象一下，我们将会生活在一个拥有比人类数量更多的AI agent的世界。。老黄说： 将来Agent会代替所有的工具。那问题来了，什么是AI Agent？AI Agent和AI到底有什么区别？AI Agent和以前的Agent有什么区别？ LLM又在其中发挥着什么样的作用 – 从与ChatGPT聊天到个人助理Agent？AI Agent能对当下的数字医学和数字健康产生什么样的影响 – 现在？有什么工作可以抢占先机，喝到第一口汤？',
    price: 499
  } : courseType === 'ai-llm-accel' ? {
    title: '大语言模型LLM推理加速应用医学数据课程',
    teacher: {
      title: '操作系统加速方向美国大学副教授',
      description: '资深LLM加速专家',
      details: '负责加速算法部分，寨主本人负责医学数据结合部分'
    },
    description: '探索大型语言模型 (LLM) 推理加速的核心技术结合医学数据应用提高医学LLM推理速度降低推理资源 (医学问答,医学推理,EHR处理等应用), 帮助完成LLM落地医学应用赛道. 由于LLM加速模型目前在医学数据上几乎没有论文,因此这个方向一旦组合起来,写论文会比较容易, 可以成为这个领域最早的文章之一.',
    price: 499
  } : courseType === 'ai-research' ? {
    title: '人工智能AI交叉生物学医学等science学科论文培训导师一对一服务',
    teacher: {
      title: '五云寨主',
      description: '资深AI科研导师',
      details: '根据学生背景提供科研课题方向选择，一对一会议指导，科研思维培训，项目执行指导，论文投稿指导'
    },
    description: '五云寨主本人亲自根据学生的学科背景,数据资源,计算资源,学生个人兴趣,学生背景提供科研课题方向选择,为你私人订制课题方向. 目标就是整合最合适的资源做到最优论文结果,避开科研内卷赛道让普娃也可以发好文章。我目前给我自己学生选去的研究方向都是领域内有前景并且做的人很少的，都可以不需要卷技术发表top conference和top期刊。',
    price: 50000
  } : courseType === 'ai-llm' ? {
    title: '大语言模型DeepSeek Finetune推理应用医学文本数据实操代码课程',
    teacher: {
      title: '美国大厂机器学习高级程序员',
      description: '美国藤校毕业计算机硕士+美国top医学院毕业neuroscience PhD',
      details: '代码讲解, 代码实操展示, 提供代码脚本, 寨主本人 (医学数据结合部分)'
    },
    description: '开源大型语言模型 (LLM) 包括 阿里千问, meta lamer 和最近的国产大模型deepseek 在通用文本领域取得了巨大的成功, 但是在医学领域还需要进一步特异性训练改进自适应与医学问题. 目前开源LLM主要使用医学文献数据库训练,比如pubmed开源论文等, 但是在医学报告理解任务上并不理想, 这个课程主要讲怎样用开源临床医学报告数据做LLM训练推理代码实操,数据讲解, 学会马上可以用起来训练自己的模型.',
    price: 699
  } : courseType === 'ai' ? {
    title: '医学人工智能前沿模型发论文基础课程',
    teacher: {
      title: '授课老师',
      description: '基础医学美国PhD（神经退化性疾病研究），美国哥伦比亚大学计算机（机器学习方向）硕士',
      details: '互联网公司机器学习算法工程师，授课老师的基础医学研究背景和计算机工程背景可以深入理解临床医学生物学研究的问题并针对性的讲解机器学习模型用于解决相关问题。'
    },
    description: '',
    price: 999
  } : {
    title: '课程详情',
    teacher: {
      title: '',
      description: '',
      details: ''
    },
    description: '',
    price: 0
  };

  if (!courseType) {
    return (
      <Container>
        <Title>课程未找到</Title>
        <CourseInfo>
          <p>抱歉，您访问的课程不存在。</p>
        </CourseInfo>
      </Container>
    );
  }

  if (!courseContent.length) {
    return (
      <Container>
        <Title>{courseInfo.title}</Title>
        <CourseInfo>
          <p>课程内容正在更新中...</p>
        </CourseInfo>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{courseInfo.title}</Title>
      
      <CourseInfo>
        <Section>
          <SectionTitle>服务介绍</SectionTitle>
          <TeacherInfo>
            <p>{courseInfo.description}</p>
          </TeacherInfo>
        </Section>

        <Section>
          <SectionTitle>服务内容</SectionTitle>
          <CourseList>
            {courseContent.map((course, index) => (
              <CourseItem key={index}>
                <CourseName>
                  <div>{course.name}</div>
                  {course.description && <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>{course.description}</div>}
                  {courseType === 'kaoyan' && course.name === '考研志愿填报咨询' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>指导考生选校、选专业、选地域等（不包括志愿填表服务）</li>
                        <li>根据考生的兴趣爱好和具体情况，指导考研志愿学校和专业的选择</li>
                        <li>深入讨论未来毕业的职业规划、升学规划、出国规划以及就业规划</li>
                      </ul>
                    </div>
                  )}
                  {courseType === 'kaoyan' && course.name === '研究生学业规划' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>指导考生如何顺利完成从本科生到研究生的身份转变</li>
                        <li>如何有效高质量地完成研究生学业，为就业和深造做好准备</li>
                      </ul>
                    </div>
                  )}
                  {courseType === 'kaoyan' && course.name === '行业现状分析' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>我们团队将提供各个行业的博士和教授，剖析行业现状</li>
                        <li>规划如何高质量地完成研究生学业，为未来升学和职业做最好的准备</li>
                        <li>传授研究生志愿填报策略</li>
                      </ul>
                    </div>
                  )}
                  {courseType === 'kaoyan' && course.name === '后续咨询服务' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>提供五个问题的后续咨询服务</li>
                        <li>如果需要延长视频咨询服务时间，需根据具体情况增加付费</li>
                      </ul>
                    </div>
                  )}
                  {courseType === 'gaokao' && course.name === '高考志愿填报咨询' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>指导考生选校、选专业、选地域等（不包括志愿填表服务）</li>
                        <li>根据考生的兴趣爱好和具体情况，指导高考志愿学校和专业的选择</li>
                        <li>深入讨论未来毕业的职业规划、升学规划、出国规划以及就业规划</li>
                      </ul>
                    </div>
                  )}
                  {courseType === 'gaokao' && course.name === '大学学业规划' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>指导考生如何顺利完成从高中生到大学生的身份转变</li>
                        <li>如何有效高质量地完成大学学业，为就业和深造做好准备</li>
                      </ul>
                    </div>
                  )}
                  {courseType === 'gaokao' && course.name === '行业现状分析' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>我们团队将提供各个行业的博士和教授，剖析行业现状</li>
                        <li>规划如何高质量地完成大学学业，为未来升学和职业做最好的准备</li>
                        <li>传授志愿填报策略</li>
                      </ul>
                    </div>
                  )}
                  {courseType === 'gaokao' && course.name === '后续咨询服务' && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                      <p>服务内容：</p>
                      <ul>
                        <li>提供五个问题的后续咨询服务</li>
                        <li>如果需要延长视频咨询服务时间，需根据具体情况增加付费</li>
                      </ul>
                    </div>
                  )}
                </CourseName>
                <CourseDuration>{course.duration}</CourseDuration>
                {course.link && (
                  <CourseLink href={course.link} target="_blank" rel="noopener noreferrer">
                    查看详情
                  </CourseLink>
                )}
              </CourseItem>
            ))}
          </CourseList>
        </Section>

        <Section>
          <SectionTitle>服务说明</SectionTitle>
          <p>咨询方式：提供1个半小时的视频咨询（可分为两次或三次进行）</p>
          <p>考生客户需要提前准备好{courseType === 'kaoyan' ? '考研' : '高考'}报志愿的问题，并提供{courseType === 'kaoyan' ? '考研' : '考试'}分数范围、学生省份、性格、性别、感兴趣的专业等资料，资料越详细越好</p>
          <p>报名添加企业微信咨询客服老师</p>
        </Section>

        <Price>¥{courseInfo.price}</Price>

        <ContactInfo>
          如需了解更多信息，请添加企业微信咨询客服老师
        </ContactInfo>
      </CourseInfo>
    </Container>
  );
};

export default CourseDetail; 
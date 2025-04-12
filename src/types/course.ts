export interface SubCourse {
  id: number;
  title: string;
  description: string;
  features: string[];
  targetAudience: string[];
  duration: string;
  price: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  subCourses: SubCourse[];
  details: {
    content: string[];
    features: string[];
    targetAudience: string[];
    duration: string;
    price?: string;
  };
} 
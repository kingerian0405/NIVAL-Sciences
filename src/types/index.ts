export interface LabTest {
  id: string;
  name: string;
  category: 'rutina' | 'metabolico' | 'hormonal' | 'cardiovascular' | 'preventivo' | 'ocupacional' | 'inmunologia';
  categoryLabel: string;
  description: string;
  sampleType: string;
  fastingHours: number;
  turnaroundTime: string;
  preparationInstructions: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface Pillar {
  id: string;
  title: string;
  iconName: string;
  purpose: string;
  scope: string;
  details: string[];
  color: string;
}

export interface CorporatePlan {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  targetAudience: 'Profesionales' | 'Empresas' | 'Comunidad';
  modality: 'Online' | 'Presencial' | 'Híbrido' | 'Presencial / In-Company' | 'Online en Vivo';
  duration: string;
  description: string;
  topics: string[];
}

export interface PreventionQuizAnswer {
  ageGroup: string;
  gender: string;
  objective: string;
  lifestyle: string;
  familyHistory: string[];
}

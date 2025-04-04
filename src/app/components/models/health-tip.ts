export interface HealthTip {
  id: number;
  title: string;
  description: string;
  icon: string;
  tips: string[];
  category: 'diet' | 'exercise' | 'stress' | 'weight' | 'general' | 'monitoring' | 'lifestyle';
  order: number;
} 
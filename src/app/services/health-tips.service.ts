import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HealthTip } from '../components/models/health-tip';

@Injectable({
  providedIn: 'root'
})
export class HealthTipsService {
  private healthTips: HealthTip[] = [
    {
      id: 1,
      title: 'Maintain a Healthy Diet',
      description: 'Follow the DASH diet (Dietary Approaches to Stop Hypertension) which emphasizes fruits, vegetables, whole grains, and low-fat dairy products.',
      icon: 'favorite',
      tips: [
        'Reduce sodium intake to less than 2,300mg daily',
        'Increase potassium-rich foods like bananas and spinach',
        'Limit alcohol consumption'
      ],
      category: 'diet',
      order: 1
    },
    {
      id: 2,
      title: 'Stay Physically Active',
      description: 'Regular physical activity helps lower blood pressure and maintain a healthy weight.',
      icon: 'directions_run',
      tips: [
        'Aim for at least 150 minutes of moderate exercise weekly',
        'Include both cardio and strength training',
        'Even short walks can help reduce blood pressure'
      ],
      category: 'exercise',
      order: 2
    },
    {
      id: 3,
      title: 'Manage Stress',
      description: 'Chronic stress can contribute to high blood pressure. Find healthy ways to manage stress.',
      icon: 'self_improvement',
      tips: [
        'Practice meditation or deep breathing exercises',
        'Get adequate sleep (7-9 hours per night)',
        'Take regular breaks during the day'
      ],
      category: 'stress',
      order: 3
    },
    {
      id: 4,
      title: 'Maintain a Healthy Weight',
      description: 'Being overweight increases your risk of high blood pressure. Even a small weight loss can help.',
      icon: 'monitor_weight',
      tips: [
        'Focus on portion control',
        'Eat more whole foods and fewer processed foods',
        'Stay hydrated with water instead of sugary drinks'
      ],
      category: 'weight',
      order: 4
    },
    {
      id: 5,
      title: 'Monitor Your Blood Pressure',
      description: 'Regular monitoring helps you understand how lifestyle changes affect your blood pressure.',
      icon: 'speed',
      tips: [
        'Measure your blood pressure at the same time each day',
        'Keep a log of your readings to track patterns',
        'Share your readings with your healthcare provider'
      ],
      category: 'monitoring',
      order: 5
    },
    {
      id: 6,
      title: 'Limit Caffeine',
      description: 'While moderate caffeine consumption is generally safe, excessive amounts may raise blood pressure.',
      icon: 'coffee',
      tips: [
        'Limit coffee to 1-2 cups per day',
        'Be aware of caffeine in other beverages and foods',
        'Consider switching to decaffeinated options'
      ],
      category: 'diet',
      order: 6
    },
    {
      id: 7,
      title: 'Get Regular Check-ups',
      description: 'Regular medical check-ups help catch potential health issues early and manage existing conditions.',
      icon: 'medical_services',
      tips: [
        'Schedule annual physical exams',
        'Follow up with specialists as recommended',
        'Keep your vaccinations up to date'
      ],
      category: 'general',
      order: 7
    },
    {
      id: 8,
      title: 'Practice Mindful Eating',
      description: 'Mindful eating helps you develop a healthier relationship with food and can aid in weight management.',
      icon: 'restaurant',
      tips: [
        'Eat slowly and savor each bite',
        'Pay attention to hunger and fullness cues',
        'Avoid distractions like TV while eating'
      ],
      category: 'diet',
      order: 8
    },
    {
      id: 9,
      title: 'Stay Hydrated',
      description: 'Proper hydration is essential for overall health and can help maintain healthy blood pressure.',
      icon: 'water_drop',
      tips: [
        'Aim for 8 glasses of water daily',
        'Replace sugary drinks with water or herbal tea',
        'Monitor your urine color as a hydration indicator'
      ],
      category: 'general',
      order: 9
    },
    {
      id: 10,
      title: 'Limit Screen Time',
      description: 'Excessive screen time can contribute to a sedentary lifestyle and poor sleep quality.',
      icon: 'devices',
      tips: [
        'Take regular breaks from screens every 20-30 minutes',
        'Avoid screens for at least an hour before bedtime',
        'Use screen time tracking apps to monitor usage'
      ],
      category: 'lifestyle',
      order: 10
    }
  ];

  constructor() { }

  getHealthTips(): Observable<HealthTip[]> {
    return of(this.healthTips);
  }

  getRandomTips(count: number = 2): Observable<HealthTip[]> {
    // Create a copy of the array and shuffle it
    const shuffled = [...this.healthTips]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
    
    console.log('Returning tips:', shuffled.length); // Debug log
    return of(shuffled);
  }
} 
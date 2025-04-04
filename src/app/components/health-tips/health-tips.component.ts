import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HealthTipsService } from '../../services/health-tips.service';
import { HealthTip } from '../models/health-tip';

@Component({
  selector: 'app-health-tips',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  template: `
    <div class="health-tips-container">
      <div class="title-container">
        <h2 class="tips-title">Health Tips for Blood Pressure</h2>
        <button mat-icon-button color="primary" (click)="loadNewTip()" matTooltip="Show another tip" class="refresh-button">
          <mat-icon>refresh</mat-icon>
        </button>
      </div>
      
      <ng-container *ngIf="healthTips.length > 0">
        <mat-card class="tip-card" *ngFor="let tip of healthTips">
          <mat-card-content>
            <div class="tip-header">
              <mat-icon class="tip-icon">{{tip.icon}}</mat-icon>
              <h3>{{tip.title}}</h3>
            </div>
            <p>{{tip.description}}</p>
            <ul>
              <li *ngFor="let item of tip.tips">{{item}}</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </ng-container>
    </div>
  `,
  styles: [`
    .health-tips-container {
      padding: 16px;
      height: 100%;
      overflow-y: auto;
      background-color: #f5f5f5;
    }
    
    .title-container {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .tips-title {
      font-size: 1.5rem;
      color: #333;
      margin: 0;
      font-weight: 500;
      margin-right: 8px;
    }
    
    .refresh-button {
      margin-left: -8px;
    }
    
    .tip-card {
      margin-bottom: 16px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      background-color: white;
    }
    
    .tip-header {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    
    .tip-icon {
      color: #2196f3;
      margin-right: 8px;
    }
    
    h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }
    
    p {
      color: #555;
      line-height: 1.5;
      margin-bottom: 12px;
    }
    
    ul {
      padding-left: 20px;
      margin: 0;
    }
    
    li {
      color: #555;
      margin-bottom: 8px;
      line-height: 1.4;
    }

    /* Responsive styles for health tips */
    @media (max-width: 768px) {
      .health-tips-container {
        padding: 12px;
      }
      
      .tips-title {
        font-size: 1.3rem;
      }
      
      .tip-card {
        margin-bottom: 12px;
      }
      
      h3 {
        font-size: 1.1rem;
      }
      
      p, li {
        font-size: 0.9rem;
      }
    }
  `]
})
export class HealthTipsComponent implements OnInit {
  healthTips: HealthTip[] = [];

  constructor(private healthTipsService: HealthTipsService) { }

  ngOnInit(): void {
    this.loadNewTip();
  }

  loadNewTip(): void {
    // Request only 1 random tip
    this.healthTipsService.getRandomTips(1).subscribe({
      next: (tips) => {
        this.healthTips = tips;
        console.log('Loaded tips:', tips.length); // Debug log
      },
      error: (error) => {
        console.error('Error loading tips:', error);
      }
    });
  }
} 
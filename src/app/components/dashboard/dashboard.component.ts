import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BloodPressureService } from '../../services/blood-pressure.service';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Auth, User } from '@angular/fire/auth';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { v4 as uuidv4 } from 'uuid';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [FormsModule, CommonModule,MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule ],
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  user: User | null = null;
  results$: Observable<Result[]> | undefined;
  systolic!: number;
  diastolic!: number;

  constructor(private bloodPressureService: BloodPressureService, private auth: Auth, private authService: AuthService) {
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });

    this.results$ = this.bloodPressureService.getResults();
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.bloodPressureService.addBloodPressureRecord(
       {
        id: uuidv4(), // You can generate a unique ID if needed
        user_uuid: this.user!.uid,
        systolic: this.systolic,
        diastolic: this.diastolic,
        created_at: new Date().toJSON(), // Set the date
      });
  }

  deleteResult(id: string) {
    if (confirm('Are you sure you want to delete this reading?')) {
      this.bloodPressureService.deleteBloodPressureRecord(id);
    }
  }

  editProfile() {
    // Add your edit profile logic here
    console.log('Edit profile clicked');
  }

  logout() {
    this.authService.logout();
  }

}

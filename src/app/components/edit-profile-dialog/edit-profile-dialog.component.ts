import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-profile-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>Edit Display Name</h2>
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Display Name</mat-label>
          <input matInput [(ngModel)]="displayName" placeholder="Enter your display name">
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-button color="primary" (click)="onSave()">Save</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .dialog-container {
      min-width: 350px;
    }
    .full-width {
      width: 100%;
      margin: 16px 0;
    }
    mat-dialog-content {
      padding: 0;
      margin: 0;
    }
    mat-dialog-actions {
      margin: 16px 0 0 0;
      padding: 0;
    }
    h2 {
      margin: 0;
    }
  `]
})
export class EditProfileDialogComponent {
  displayName: string;

  constructor(
    public dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { displayName: string }
  ) {
    this.displayName = data.displayName || '';
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.displayName.trim()) {
      this.dialogRef.close(this.displayName);
    }
  }
} 
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Result } from '../components/models/result';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { limit, orderBy } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class BloodPressureService {
  firestore = inject(Firestore);
  results = collection(this.firestore, 'results');
  users = collection(this.firestore, 'users');

  constructor(private authService: AuthService) {}

  addBloodPressureRecord(result: Result): Observable<string> {

    const promise = addDoc(this.results, result).then(
      (response) => response.id
    );
    return from(promise);
  }

  // Get all results for the current user
  getResults() {
    const user = this.authService.getCurrentUser();
    console.log(user?.uid);
    if (!user) throw new Error('User not logged in');

    return collectionData(
      query(this.results, where('user_uuid', '==', user?.uid)),
      {
        idField: 'id',
      }
    ).pipe(
      map(results => results.sort((a, b) => 
        new Date(b['created_at']).getTime() - new Date(a['created_at']).getTime()
      ))
    ) as Observable<Result[]>;
  }

  deleteBloodPressureRecord(id: string) {
    const docRef = doc(this.firestore, 'results', id);
    return deleteDoc(docRef);
  }
  
}

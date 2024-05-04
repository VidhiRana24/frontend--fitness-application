import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3001'; // Your backend API base URL

  constructor(private http: HttpClient) {}

  registerUser(userDetails: any): Observable<any> {
    alert('User Register Successfully');
    return this.http.post<any>(`${this.baseUrl}/user/create`, userDetails);
  }

  loginUser(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user/login`, userDetails).pipe(
      tap((response: { token: string }) => {
        if (response && response.token) {
          console.log('Token:', response.token);
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  registerTrainer(trainerDetails: any): Observable<any> {
    alert('Trainer Register Successfully');
    return this.http.post<any>(
      `${this.baseUrl}/trainer/create`,
      trainerDetails
    );
  }

  loginTrainer(trainerDetails: any): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/trainer/login`, trainerDetails)
      .pipe(
        tap((response: { token: string }) => {
          if (response && response.token) {
            console.log('Trainer Token:', response.token);
            localStorage.setItem('trainerToken', response.token);
          }
        })
      );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    return !!token;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:3002'; // Replace this with your API URL

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjQwYTVhMTlkYWFhMjFiNWIwZDliMzYiLCJpYXQiOjE3MTU2Mjk5NDEsImV4cCI6MTcxNTYzMzU0MX0.FvfNmR_OErNYLtqybbXbPlFiuNCKzZUOJLuODrxVXmE'); // Include the token in the Authorization header

    return this.http.get<any>(
      'http://localhost:3002/profile', // Assuming this endpoint returns user details along with workout plan
      { headers: headers }
    );
    
  }

  // Add the updateUserProfile method
  updateUserProfile(userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user-profile`, userData);
  }
  uploadProfilePicture(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('profilePicture', file, file.name);
    return this.http.post<any>(`${this.apiUrl}/user/upload-profile-picture`, formData);
  }
  
}

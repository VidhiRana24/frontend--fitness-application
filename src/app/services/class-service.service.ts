import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassServiceService {
  constructor(private http: HttpClient) {}

  getClassDetails(id: string): Observable<any> {
    // Implement your HTTP request here to fetch class details by ID
    return this.http.get<any>(`/api/classes/${id}`);
  }
}

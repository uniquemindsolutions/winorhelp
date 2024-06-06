

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

@Injectable({
  providedIn: 'root'
})

export class CommanService {
  private apiUrl = 'http://localhost:8080/winorhelp/index.php/api'; // Replace with your actual API URL

  

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
   console.log("regivalues",user)
    return this.http.post(`${this.apiUrl}/register_post`, user,{headers});
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_post`, credentials);
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/verify_email/${token}`);
  }
}
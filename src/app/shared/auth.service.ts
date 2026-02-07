import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: any = 0;
  reirectUrl: string | null = null;
  url: string = "http://localhost:3000";

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient
      .post("/api/login", { username, password })
      .pipe(tap(() => (this.isLoggedIn = true)));
  }

  logOut(): void {
    this.isLoggedIn = false;
  }

  signUpUser(name: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.url}/user`, { name, email, password });
  };

  loginValidate(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.url}/user/login`, { email, password },{ withCredentials: true });
    //{ withCredentials: true } By adding this option, the browser will include cookies in the request, allowing the server to recognize the session associated with the user.
  };

  getStudentsData(): Observable<any> {
    return this.httpClient.get(`${this.url}/user/student`,{ withCredentials: true });
  }

  

}

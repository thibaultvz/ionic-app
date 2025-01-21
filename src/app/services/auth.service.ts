import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';

interface LoginResponse {
  token: string;
  user: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';
  private authStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.init();
  }

  async init() {
    const { value } = await Storage.get({ key: 'auth_token' });
    this.authStatus.next(!!value);
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(async (response: LoginResponse) => {
          await Storage.set({
            key: 'auth_token',
            value: response.token,
          });
          this.authStatus.next(true);
        })
      );
  }

  logout(): void {
    Storage.remove({ key: 'auth_token' }).then(() => {
      this.authStatus.next(false);
    });
  }

  async getToken(): Promise<string | null> {
    const { value } = await Storage.get({ key: 'auth_token' });
    return value;
  }

  async isAuthenticated(): Promise<boolean> {
    const token = await this.getToken();
    return !!token;
  }
}

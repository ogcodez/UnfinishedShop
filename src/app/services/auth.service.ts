import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private router: Router
  ){}
  login(user: string, password: string): boolean {
    if (user === 'korisnik' && password === '1234') {
      localStorage.setItem('username', user);
      this.router.navigateByUrl("#/home", { skipLocationChange: true });
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}


export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Simulate authentication process
  login(username: string, password: string): Observable<{ username: string; token: string }> {
    return of({ username, token: 'fake-jwt-token' }).pipe(delay(2000)); // Simulate a 2-second delay
  }
}

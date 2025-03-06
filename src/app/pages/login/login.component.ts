import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { loginFailure, loginRequest, loginSuccess } from '../../stores/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports:[CommonModule, FormsModule],
  template: `
    <div>
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()">
        <input type="text" [(ngModel)]="username" name="username" placeholder="Username" required />
        <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required />
        <button type="submit" [disabled]="loading">Login</button>
      </form>

      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="loading">Logging in...</p>
    </div>
  `,
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;
  error: string | null = null;

  constructor(private authService: AuthService, private store: Store) {
  }

  onSubmit() {
    this.loading = true;
    this.error = null;

    this.store.dispatch(loginRequest({ username: this.username, password: this.password }));

    this.authService.login(this.username, this.password).subscribe(
      (user) => {
        this.store.dispatch(loginSuccess({ user }));
        this.loading = false;
      },
      (error) => {
        this.store.dispatch(loginFailure({ error: 'Invalid credentials' }));
        this.loading = false;
        this.error = 'Invalid credentials';
      }
    );
  }
}

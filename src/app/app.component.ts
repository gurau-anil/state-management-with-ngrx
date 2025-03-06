import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuth } from './stores/auth/auth.selectors';
import { AuthState } from './stores/auth/auth.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'state-management-with-ngrx';

  authState$: Observable<AuthState>;
  constructor(private store: Store) {
      this.authState$ = store.select(selectAuth);
    }
}

import { createReducer, on } from '@ngrx/store';
import { loginRequest, loginSuccess, loginFailure } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginRequest, (state) => ({
    ...state,
    isAuthenticated: false,
    error: null,
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user: user,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: error,
  }))
);


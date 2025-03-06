import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

// Feature selector to select the auth slice of the state
const selectAuthState = createFeatureSelector<AuthState>('authFeature');

// Selector to get the authentication status
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

// Selector to get the user's information
export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

// Selector to get any errors related to authentication
export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

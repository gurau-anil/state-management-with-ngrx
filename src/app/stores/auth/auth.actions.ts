// import { createAction, props } from '@ngrx/store';
// import { User, UserState } from './auth.state';

// export const login = createAction('[Auth] Login', props<{userName: string}>());
// export const loginSuccess = createAction('[Auth] Login Success', props<{user: User, token: string}>());
// export const logout = createAction('[Auth] Logout');


import { createAction, props } from '@ngrx/store';

// Define actions for login process
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: { username: string; token: string } }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

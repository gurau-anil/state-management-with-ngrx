export interface UserState {
    user: User; 
    token: string
  }

export interface User{
    userName: string,
    isAuthenticated: boolean
}

export interface AuthState {
  isAuthenticated: boolean;
  user: { username: string; token: string } | null;
  error: string | null;
}
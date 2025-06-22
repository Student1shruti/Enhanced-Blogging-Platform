import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authAPI } from '../services/api';
import socketService from '../services/socket';

interface User {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  isAdmin: boolean;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: any) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: User };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
  loading: true,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('authToken');
      
      if (token) {
        try {
          const response = await authAPI.getMe();
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user: response.data.user, token }
          });
          
          // Connect to socket after successful auth
          socketService.connect();
        } catch (error) {
          console.error('Auth initialization failed:', error);
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
        }
      }
      
      dispatch({ type: 'SET_LOADING', payload: false });
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      const response = await authAPI.login({ email, password });
      const { user, token } = response.data;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
      
      // Connect to socket after successful login
      socketService.connect();
      
      return true;
    } catch (error: any) {
      console.error('Login failed:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
      return false;
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      const response = await authAPI.register(userData);
      const { user, token } = response.data;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
      
      // Connect to socket after successful registration
      socketService.connect();
      
      return true;
    } catch (error: any) {
      console.error('Registration failed:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Disconnect socket
    socketService.disconnect();
    
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = async (userData: any): Promise<boolean> => {
    try {
      if (!state.user) return false;
      
      const response = await authAPI.getMe();
      const updatedUser = response.data.user;
      
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      dispatch({ type: 'UPDATE_PROFILE', payload: updatedUser });
      
      return true;
    } catch (error) {
      console.error('Profile update failed:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
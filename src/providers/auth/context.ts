import { createContext, useContext } from 'react';
import { AuthContextProperties } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext<AuthContextProperties>({} as any);

export const useAuth = () => useContext(AuthContext);

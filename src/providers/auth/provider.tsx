import React, { useState } from 'react';
import { AuthContext } from './context';
import { User } from './types';

const mockUser = {
    username: 'demo',
    token: 'mock-token-12345',
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const stored = localStorage.getItem('user');
        return stored ? JSON.parse(stored) : null;
    });

    const login = async (username: string, password: string) => {
        // Fake API delay
        await new Promise((res) => setTimeout(res, 1000));

        if (username === 'demo' && password === 'password') {
            localStorage.setItem('user', JSON.stringify(mockUser));
            setUser(mockUser);
            return { success: true } as const;
        }
        return { success: false, message: 'Invalid credentials' } as const;
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

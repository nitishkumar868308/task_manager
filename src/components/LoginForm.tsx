'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
        });

        if (result?.error) {
            toast.error('Invalid credentials');
        } else {
            toast.success('Login successful');
            router.push('/dashboard');
        }
    };


    return (
        <form
            onSubmit={handleLogin}
            className="max-w-md mx-auto mt-20 bg-white shadow-md rounded px-8 py-6"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                required
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;

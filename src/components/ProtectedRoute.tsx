'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session && status !== 'loading') {
            router.push('/login');
        }
    }, [session, status, router]);

    if (status === 'loading' || !session) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }


    return <>{children}</>;
}

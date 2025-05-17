'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-gray-100 dark:bg-gray-800">
      <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        TaskManager
      </Link>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        {session?.user ? (
          <>
            <span className="text-gray-700 dark:text-gray-300 text-center sm:text-left">
              Hello, {session.user.name || session.user.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-center"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

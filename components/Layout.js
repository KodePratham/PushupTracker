import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Layout({ children, title = 'PushupTracker' }) {
  const { isLoaded, userId, signOut } = useAuth();
  const router = useRouter();
  
  const isActive = (path) => {
    return router.pathname === path ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-700 hover:text-white';
  };

  return (
    <>
      <Head>
        <title>{title} | Your Fitness Journey</title>
        <meta name="description" content="Track your daily pushups and achieve your fitness goals" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        {!isLoaded || !userId ? (
          <nav className="bg-indigo-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <span className="text-white font-bold text-xl cursor-pointer">
                      PushupTracker
                    </span>
                  </Link>
                </div>
                <div className="flex">
                  <div className="flex items-center space-x-4">
                    <Link href="/sign-in">
                      <span className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer">
                        Sign In
                      </span>
                    </Link>
                    <Link href="/sign-up">
                      <span className="px-3 py-2 rounded-md text-sm font-medium bg-white text-indigo-600 hover:bg-gray-100 transition-colors cursor-pointer">
                        Sign Up
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="bg-indigo-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/dashboard">
                    <span className="text-white font-bold text-xl cursor-pointer">
                      PushupTracker
                    </span>
                  </Link>
                </div>
                <div className="flex">
                  <div className="flex items-center space-x-4">
                    <Link href="/dashboard">
                      <span className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/dashboard')} transition-colors duration-200 cursor-pointer`}>
                        Dashboard
                      </span>
                    </Link>
                    <Link href="/history">
                      <span className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/history')} transition-colors duration-200 cursor-pointer`}>
                        History
                      </span>
                    </Link>
                    <Link href="/goals">
                      <span className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/goals')} transition-colors duration-200 cursor-pointer`}>
                        Goals
                      </span>
                    </Link>
                    <Link href="/profile">
                      <span className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/profile')} transition-colors duration-200 cursor-pointer`}>
                        Profile
                      </span>
                    </Link>
                    <button
                      onClick={() => signOut(() => router.push('/'))}
                      className="px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors duration-200"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
        
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} PushupTracker. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

import { SignIn } from '@clerk/nextjs';
import Head from 'next/head';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Head>
        <title>Sign In | PushupTracker</title>
      </Head>
      
      <div className="w-full max-w-md mb-8 text-center">
        <Link href="/">
          <a className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            PushupTracker
          </a>
        </Link>
        <p className="mt-2 text-gray-600">Sign in to track your pushup journey</p>
        <p className="mt-1 text-sm text-gray-500">
          Don't have an account? <Link href="/sign-up"><a className="text-indigo-600 hover:underline">Sign up</a></Link>
        </p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <SignIn
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            redirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
}

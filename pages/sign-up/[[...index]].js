import { SignUp } from "@clerk/nextjs";
import Head from 'next/head';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Head>
        <title>Sign Up | PushupTracker</title>
      </Head>
      
      <div className="w-full max-w-md mb-8 text-center">
        <Link href="/">
          <a className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            PushupTracker
          </a>
        </Link>
        <p className="mt-2 text-gray-600">Create an account to start tracking your pushups</p>
        <p className="mt-1 text-sm text-gray-500">
          Already have an account? <Link href="/sign-in"><a className="text-indigo-600 hover:underline">Sign in</a></Link>
        </p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <SignUp 
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            redirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

import { useState } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';
import Link from 'next/link';

export default function UserMenu() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  
  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <img
          src={user.profileImageUrl}
          alt="Profile"
          className="h-8 w-8 rounded-full border-2 border-white"
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
          <Link href="/profile">
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Profile
            </a>
          </Link>
          <Link href="/settings">
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Settings
            </a>
          </Link>
          <button
            onClick={() => signOut()}
            className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';

export default function Sidebar({ }) {

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Join Room', href: '/join' },
    { label: 'Analyze Chats', href: '/analyze' },
    { label: 'My Account', href: '/account' },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-[#1e2021] p-4 flex flex-col justify-center items-center gap-4">
        <div className='flex flex-col gap-4 align-center'>
            {navItems.map(({ label, href }) => (
                <Link
                key={label}
                href={href}
                className="min-w-60 rounded-md hover:bg-zinc-700 transition text-3xl px-6 py-4 block text-white"
                >
                {label}
                </Link>
            ))}
            </div>
        </div>
    </div>
  );
}
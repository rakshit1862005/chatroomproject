'use client';

import Link from 'next/link';

export default function Sidebar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Join Room', href: '/join' },
    { label: 'Analyze Chats', href: '/analyze' },
    { label: 'My Account', href: '/account' },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-[#252424] p-4 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col gap-2 align-center">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="min-w-65 min-h-15 rounded-md hover:bg-zinc-700 transition text-[20px] font-light text-white flex items-center m-6"
            id='bartext'>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

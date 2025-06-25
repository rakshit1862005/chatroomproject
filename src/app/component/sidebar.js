'use client';

import Link from 'next/link';

export default function Sidebar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Join Room', href: '/join' },
    { label: 'Analyze Chats', href: '/analyze' },
    { label: 'My Account', href: '/myaccount' },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-1/6 bg-[#252424] p-4 flex flex-col justify-center items-center gap-2 z-50">
      <div className="flex flex-col items-start gap-6 w-full px-4 ">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="w-11/12 h-12 rounded-md hover:bg-zinc-700 transition text-[20px] font-light text-white "
            id="bartext"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

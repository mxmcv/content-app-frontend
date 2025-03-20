'use client';
import { Button } from '@/components/ui/button';
import { Layout, Shield } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideBar() {
  const path = usePathname();

  return (
    <div className="shadow-md h-screen p-7">
      <Image src={'/logo.svg'} alt="logo" width={170} height={120} />

      <div className="mt-10">
        {/* Removed UploadPdfDialog and PDF button */}
        <Link href="/dashboard">
          <div
            className={`flex gap-2 items-center p-3 mt-5 hover:bg-gray-200 rounded-lg cursor-pointer ${
              path === '/dashboard' && 'bg-gray-100'
            }`}
          >
            <Layout />
            <h2>Workspace</h2>
          </div>
        </Link>
        <Link href="/dashboard/upgrade">
          <div
            className={`flex gap-2 items-center p-3 mt-1 hover:bg-gray-200 rounded-lg cursor-pointer ${
              path === '/dashboard/upgrade' && 'bg-gray-100'
            }`}
          >
            <Shield />
            <h2>Upgrade</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;

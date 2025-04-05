'use client';
import { Progress } from '@/components/ui/progress';
import { Layout, Shield } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideBar() {
  const path = usePathname();
  const currentCredits = 30;
  const totalCredits = 50;
  const progressPercentage = (currentCredits / totalCredits) * 100;

  return (
    <div className="shadow-md h-screen p-7 flex flex-col justify-between">
      <div>
        <Image src="/logo.svg" alt="logo" width={170} height={120} />
        <div className="mt-10">
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

      {/* Bottom section for credits */}
      <div className="mb-[5.3rem]">
        {' '}
        {/* This margin-bottom pushes the content upward */}
        <div className="mb-2 text-sm font-medium text-gray-700">
          Credits Remaining: {currentCredits}/{totalCredits}
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
    </div>
  );
}

export default SideBar;

'use client';

import { Progress } from '@/components/ui/progress';
import { Layout, Shield } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { useAppContext } from '@/app/_context/AppContext';

function SideBar() {
  const path = usePathname();
  const { getToken } = useAuth();
  const [credits, setCredits] = useState({ current: 0, total: 50 });
  const { isGenerating } = useAppContext();
  useEffect(() => {
    async function fetchCredits() {
      try {
        const token = await getToken();
        const response = await fetch('https://reddify.ca/api/credits', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          console.error('Failed to fetch credits:', response.statusText);
          return;
        }
        const data = await response.json();
        // data.credits should be the current credits value from your backend
        setCredits({ current: data.credits, total: 50 });
      } catch (error) {
        console.error('Error fetching credits:', error);
      }
    }
    fetchCredits();
  }, [isGenerating, getToken]);

  const progressPercentage = Math.min(
    (credits.current / credits.total) * 100,
    100
  );

  return (
    <div className="shadow-md h-screen p-7 flex flex-col justify-between">
      <div>
        <a href="/">
          <Image
            src="/redditLogo.svg"
            alt="logo"
            width={180}
            height={132}
            className="pl-2 cursor-pointer"
          />
        </a>
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
        <div className="mb-2 text-sm font-medium text-gray-700">
          Credits Remaining: {credits.current}/{credits.total}
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
    </div>
  );
}

export default SideBar;

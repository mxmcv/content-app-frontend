'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

import localFont from 'next/font/local';

const poppinsBold = localFont({
  src: '../../fonts/Poppins-Bold.ttf', // Adjust path as needed
  display: 'swap',
  variable: '--font-poppinsbold',
});

const anton = localFont({
  src: '../../fonts/anton.ttf',
  display: 'swap',
  variable: '--font-anton',
});

const vagabondfed = localFont({
  src: '../../fonts/Vagabondfed.ttf',
  display: 'swap',
  variable: '--font-vagabondfed',
});

// Map font names to their corresponding class names
const fontMap = {
  'Poppins-Bold': poppinsBold.className,
  Anton: anton.className,
  Vagabondfed: vagabondfed.className,
};

export default function ContinueWorkspacePage() {
  const handleBack = () => {
    router.push('/dashboard/');
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-3xl font-medium mb-20">Workspace</h2>
      {/* Form Container with relative positioning */}
      <div className="relative">
        <div className="flex flex-col items-center mt-12">
          <div className="relative w-[220px] h-[440px]">
            <img
              src={`/images/${selectedGame}.png`}
              alt="Gameplay Preview"
              className="w-full h-full object-contain"
            />

            {/* Overlay text with dynamic font and color */}
            <div
              className={`
                              absolute inset-0 
                              flex items-center justify-center 
                              text-xl
                              ${fontMap[selectedFont]}
                            `}
              style={{ color: selectedFontColor }}
            >
              Text
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="default"
        onClick={handleBack}
        className="text-lg fixed bottom-28 left--16 w-[200px] h-[45px]"
      >
        Back
      </Button>
      ;
    </div>
  );
}

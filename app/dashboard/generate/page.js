"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useAppContext } from "@/app/_context/AppContext";
import { useAuth } from "@clerk/nextjs";

import localFont from "next/font/local";

const poppinsBold = localFont({
  src: "../../fonts/Poppins-Bold.ttf", // Adjust path as needed
  display: "swap",
  variable: "--font-poppinsbold",
});

const anton = localFont({
  src: "../../fonts/anton.ttf",
  display: "swap",
  variable: "--font-anton",
});

const vagabondfed = localFont({
  src: "../../fonts/Vagabondfed.ttf",
  display: "swap",
  variable: "--font-vagabondfed",
});

// Map font names to their corresponding class names
const fontMap = {
  "Poppins-Bold": poppinsBold.className,
  Anton: anton.className,
  Vagabondfed: vagabondfed.className,
};

export default function ContinueWorkspacePage() {
  const router = useRouter();
  const handleBack = () => {
    handleGenerate();
  };

  const {
    redditPostUrl,
    selectedGame,
    selectedFont,
    selectedFontColor,
    username,
    voice,
  } = useAppContext();

  const { getToken } = useAuth();

  const handleGenerate = async () => {
    const token = await getToken();
    const responselist = {
      user: username, // We need this
      story_data: redditPostUrl,
      video: selectedGame,
      color: selectedFontColor,
      font: selectedFont,
      voice: voice, // We need this
      ai: true, // We need this
    };

    try {
      const response = await fetch("http://18.218.45.35:3001/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(responselist),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Will have to change this maybe
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "video.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error generating video:", error);
    }
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
              src={`/images/subway-surfers.png`}
              alt="Gameplay Preview"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-12 flex space-x-6">
            <Button
              variant="default"
              onClick={handleBack}
              className="text-lg w-[200px] h-[45px] bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300"
            >
              Exit
            </Button>

            <Button
              variant="default"
              onClick={handleBack}
              className="text-lg w-[200px] h-[45px]"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

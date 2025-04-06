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
  // Default states
  const [selectedGame, setSelectedGame] = useState("subway-surfers");
  const [selectedFont, setSelectedFont] = useState("Poppins-Bold");
  const [selectedFontColor, setSelectedFontColor] = useState("white");
  const { redditPostUrl } = useAppContext();
  const router = useRouter();

  const handleBackgroundChange = (value) => {
    setSelectedGame(value);
  };

  const handleFontChange = (value) => {
    setSelectedFont(value);
  };

  const handleFontColorChange = (value) => {
    setSelectedFontColor(value);
  };
  const handleBack = () => {
    router.push("/dashboard/");
  };

  const { getToken } = useAuth();

  const handleGenerate = async () => {
    const token = await getToken({ template: "integration_default" });
    const responselist = {
      user: "Username", // We need this
      story_data: redditPostUrl,
      video: selectedGame,
      color: selectedFontColor,
      font: selectedFont,
      voice: "voice1", // We need this
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
          <div className="flex gap-32">
            {/* LEFT COLUMN: Dropdowns */}
            <div className="flex flex-col gap-12">
              {/* Background gameplay */}
              <div>
                <Label className="mb-2 block text-md font-medium">
                  Background gameplay
                </Label>
                <Select onValueChange={handleBackgroundChange}>
                  <SelectTrigger className="w-[280px] h-[39px]">
                    <SelectValue placeholder="Select game" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subway-surfers">
                      Subway Surfers
                    </SelectItem>
                    <SelectItem value="temple-run">Temple Run</SelectItem>
                    <SelectItem value="minecraft">Minecraft</SelectItem>
                    <SelectItem value="GTAV">GTA V</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Font Style */}
              <div>
                <Label className="mb-2 block text-md font-medium">
                  Font Style
                </Label>
                <Select onValueChange={handleFontChange}>
                  <SelectTrigger className="w-[280px] h-[39px]">
                    <SelectValue placeholder="Select font style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Poppins-Bold">Font 1</SelectItem>
                    <SelectItem value="Anton">Font 2</SelectItem>
                    <SelectItem value="Vagabondfed">Font 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Font Colour */}
              <div>
                <Label className="mb-2 block text-md font-medium">
                  Font Colour
                </Label>
                <Select onValueChange={handleFontColorChange}>
                  <SelectTrigger className="w-[280px] h-[39px]">
                    <SelectValue placeholder="Select font colour" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="yellow">Yellow</SelectItem>
                    <SelectItem value="pink">Pink</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block text-md font-medium">Voice</Label>
                <Select>
                  <SelectTrigger className="w-[280px] h-[39px]">
                    <SelectValue placeholder="Select voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Male</SelectItem>
                    <SelectItem value="male">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* RIGHT COLUMN: Image preview */}
            <div className="flex-1 flex items-center justify-center">
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
        </div>
      </div>
      <Button
        variant="default"
        onClick={handleGenerate}
        className="text-lg fixed bottom-28 right-16 w-[200px] h-[45px]"
      >
        Generate
      </Button>
      <Button
        variant="default"
        onClick={handleBack}
        className="text-lg fixed bottom-28 left--16 w-[200px] h-[45px] bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300"
      >
        Back
      </Button>
    </div>
  );
}

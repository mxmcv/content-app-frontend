"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MultiSelect } from "@/components/ui/multi-select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/app/_context/AppContext";

export default function WorkspacePage() {
  const [selectedValues, setSelectedValues] = useState([]);
  const { redditPostUrl, setRedditPostUrl } = useAppContext();
  const router = useRouter();

  const handleValueChange = (values) => {
    setSelectedValues(values);
    console.log(selectedValues);
  };

  const handleContinue = () => {
    router.push("/dashboard/continue");
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-3xl font-medium mb-20">Workspace</h2>

      {/* Form Container with relative positioning */}
      <div className="relative">
        <div className="flex flex-col items-center mt-12">
          {/* 1) Reddit Post URL Input */}
          <div className="mb-4">
            <Label
              htmlFor="inputOne"
              className="mb-2 block text-md font-medium"
            >
              Reddit Post URL
            </Label>
            <Input
              placeholder="Enter URL"
              id="inputOne"
              className="w-[520px] h-[39px]"
              disabled={selectedValues.length > 0} // disable URL if subreddits are selected
              value={redditPostUrl}
              onChange={(e) => setRedditPostUrl(e.target.value)}
            />
          </div>

          {/* 2) "Or" text */}
          <div className="text-center text-gray-500 font-medium my-2">Or</div>

          {/* 3) MultiSelect */}
          <div className="mb-4">
            <Label
              htmlFor="multiSelect"
              className="mb-2 block text-md font-medium"
            >
              Subreddits
            </Label>
            <MultiSelect
              id="multiSelect"
              options={[
                { label: "AskReddit", value: "optionA" },
                { label: "AmItheAsshole", value: "optionB" },
                { label: "TrueOffMyChest", value: "optionC" },
                { label: "entitledparents", value: "optionD" },
                { label: "tifu", value: "optionE" },
                { label: "relationship_advice", value: "optionF" },
                { label: "pettyrevenge", value: "optionG" },
              ]}
              onValueChange={handleValueChange}
              placeholder="Select subreddits"
              maxCount={2}
              animation={0.3}
              variant="default"
              className="w-[520px] h-[39px]"
              disabled={redditPostUrl.trim().length > 0} // disable subreddits if URL has a value
            />
          </div>

          {/* 4) Horizontal separator */}
          <Separator className="w-[580px] mx-auto my-10 opacity-50" />

          {/* 5) Username Input */}
          <div className="mb-4">
            <Label
              htmlFor="inputTwo"
              className="mb-2 block text-md font-medium"
            >
              Username on video
            </Label>
            <Input
              placeholder="Enter a username"
              id="inputTwo"
              className="w-[520px] h-[39px]"
            />
          </div>

          {/* 6) Checkbox */}
          <div className="flex items-center mt-4 w-[520px]">
            <Checkbox id="placeholderCheckbox" />
            <Label
              htmlFor="placeholderCheckbox"
              className="ml-2 text-md font-medium"
            >
              Use AI to enhance story
            </Label>
          </div>
        </div>
      </div>

      {/* 7) Continue button */}
      <Button
        variant="default"
        onClick={handleContinue}
        className="text-lg fixed bottom-28 right-16 w-[200px] h-[45px]"
      >
        Continue
      </Button>
    </div>
  );
}

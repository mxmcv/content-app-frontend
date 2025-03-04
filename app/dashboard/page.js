'use client';

import React, { useState } from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function WorkspacePage() {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleValueChange = (values) => {
    setSelectedValues(values);
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-3xl font-medium mb-20">Workspace</h2>

      {/* Form Container with relative positioning */}
      <div className="relative">
        <div className="flex flex-col items-center mt-12">
          {/* 1) Shadcn dropdown */}
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
            />
          </div>

          {/* 2) "Or" text with closer vertical spacing */}
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
                { label: 'AskReddit', value: 'optionA' },
                { label: 'AmItheAsshole', value: 'optionB' },
                { label: 'TrueOffMyChest', value: 'optionC' },
                { label: 'entitledparents', value: 'optionD' },
                { label: 'tifu', value: 'optionE' },
                { label: 'relationship_advice', value: 'optionF' },
                { label: 'pettyrevenge', value: 'optionG' },
              ]}
              onValueChange={handleValueChange}
              placeholder="Select subreddits"
              maxCount={2} // Only show 2 badges before summarizing
              animation={0.3} // Control bounce animation duration
              variant="default"
              className="w-[520px] h-[39px]"
            />
          </div>

          {/* 4) Horizontal separator line, fainter and with extra vertical space */}
          <Separator className="w-[580px] mx-auto my-10 opacity-50" />

          {/* 5) Another Shadcn dropdown */}
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

          {/* 6) Shadcn checkbox (left aligned) with extra top spacing */}
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

        {/* 7) Continue button positioned relative to the form container */}
        <Button
          variant="default"
          className="text-md absolute bottom-0 right-0 translate-x-4 translate-y-[120px] w-[180px]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

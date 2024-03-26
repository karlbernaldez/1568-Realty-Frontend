import React from "react";
import { Button, Heading, Img, Input } from "./..";

export default function EditDetailsColumninterior({
  interior = "Interior Features",
  bedrooms = "Bedroom/s",
  bathrooms = "Bathroom/s",
  kitchen = "Kitchen",
  addproperty = "Add interior features",
  cancel = "Cancel",
  saveChanges = "Save changes",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex self-stretch justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
        <Heading size="xl" as="h1" className="ml-4 md:ml-0 !text-blue_gray-900">
          {interior}
        </Heading>
        <Img src="images/img_uil_edit_teal_900.svg" alt="uiledit" className="h-[24px] w-[24px] mr-4 md:mr-0" />
      </div>
      <div className="flex flex-col self-stretch gap-[15px] p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
        <div className="flex md:flex-col justify-center w-full gap-4 mx-auto max-w-[778px]">
          <div className="flex flex-col items-start w-full gap-[3px]">
            <Heading as="h2" className="opacity-0.6">
              {bedrooms}
            </Heading>
            <Input shape="round" name="frameforty" placeholder={`2`} className="self-stretch sm:pr-5" />
          </div>
          <div className="flex flex-col items-start w-full gap-[3px]">
            <Heading as="h3" className="opacity-0.6">
              {bathrooms}
            </Heading>
            <Input shape="round" name="frameforty_four" placeholder={`2`} className="self-stretch sm:pr-5" />
          </div>
        </div>
        <div className="flex flex-col items-start w-[47%] md:w-full ml-6 gap-[3px] md:ml-0">
          <Heading as="h2" className="opacity-0.6">
            {kitchen}
          </Heading>
          <Input shape="round" name="frameforty_five" placeholder={`2`} className="self-stretch sm:pr-5" />
        </div>
        <div className="flex items-center ml-6 gap-2 md:ml-0">
          <Img src="images/img_memory_plus_teal_900.svg" alt="memoryplus_one" className="h-[24px] w-[24px]" />
          <Heading size="lg" as="h2" className="!text-teal-900">
            {addproperty}
          </Heading>
        </div>
        <div className="flex ml-6 gap-2 md:ml-0">
          <Button color="gray_50_01" shape="round" className="min-w-[85px]">
            {cancel}
          </Button>
          <Button shape="round" className="sm:px-5 min-w-[155px]">
            {saveChanges}
          </Button>
        </div>
      </div>
    </div>
  );
}

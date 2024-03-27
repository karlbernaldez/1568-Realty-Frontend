import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Heading, GoogleMap, TextArea } from "../../components";
import EditDetailsOneImageuploader from "../../components/EditDetailsOneImageuploader";
import Sidebar from "../../components/Sidebar";

export default function ViewDetailsPage() {
  return (
    <>
      <div className="flex md:flex-col items-start w-full gap-[29px] bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden" />
        <div className="flex flex-col w-[71%] md:w-full mt-[62px] gap-8 md:p-5 ml-[350px]">
          <div className="flex items-center">
            <Img src="images/img_ri_arrow_up_line.svg" alt="riarrowup_one" className="h-[24px] w-[24px]" />
            <Heading size="xl" as="h1" className="!text-gray-900">
              Back
            </Heading>
          </div>
          <div className="flex flex-col items-start ml-1 gap-[3px] md:ml-0">
            <Heading size="2xl" as="h2" className="!text-gray-900">
              <span className="text-gray-900">Property /&nbsp;</span>
              <span className="text-teal-900">Taguig Property</span>
            </Heading>
            <Heading size="s" as="h3" className="!text-gray-500">
              View and manage property list
            </Heading>
          </div>
          <div className="flex flex-col ml-1 gap-6 md:ml-0">
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h2" className="ml-4 md:ml-0 !text-blue_gray-900">
                  Overview
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_three"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="flex flex-col items-center gap-[15px] p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="h3" className="opacity-0.6">
                      Property name
                    </Heading>
                    <Input
                      shape="round"
                      name="name"
                      placeholder={`House and Lot For Sale in Taguig City`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Heading as="h4" className="opacity-0.6">
                      Price
                    </Heading>
                    <Input shape="round" name="price" placeholder={`45,000,000`} className="self-stretch sm:pr-5" />
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="h5" className="opacity-0.6">
                      Property Type
                    </Heading>
                    <Input
                      shape="round"
                      name="house_and_lot"
                      placeholder={`House and Lot`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="h6" className="opacity-0.6">
                      Agent
                    </Heading>
                    <Input
                      shape="round"
                      name="frameforty"
                      placeholder={`Alyssa Joy Del Rosario`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Heading as="p" className="opacity-0.6">
                      Year Built
                    </Heading>
                    <Input shape="round" name="zipcode" placeholder={`2021`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="p" className="opacity-0.6">
                      Land Area (sq m)
                    </Heading>
                    <Input
                      shape="round"
                      name="frameforty_one"
                      placeholder={`7,002 `}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
                  Description
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_five"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="shadow-sm">
                <div className="flex justify-between gap-5 px-8 sm:px-5 rounded-tl-[1px] rounded-tr-[1px] border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h6" className="!text-blue_gray-900">
                    Description
                  </Heading>
                  <Img src="images/img_uil_edit_teal_900.svg" alt="uiledit_seven" className="h-px" />
                </div>
                <div className="p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                  <div>
                    <div className="flex flex-col items-start gap-[7px]">
                      <Heading as="p" className="opacity-0.6">
                        Description
                      </Heading>
                      <TextArea
                        shape="round"
                        name="frameforty_two"
                        placeholder={`Step back in time and experience the allure of a bygone era with this enchanting vintage house nestled in the heart of Bagumbayan, Taguig City. A perfect blend of classic elegance and modern convenience...`}
                        className="self-stretch sm:pb-5 text-gray-900 font-bold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
                  Property Images
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_nine"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="justify-center gap-1.5 grid-cols-[repeat(auto-fill,_minmax(141px_,_1fr))] p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700 grid">
                <div className="flex w-full">
                  <Img
                    src="images/img_image_9.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex w-full">
                  <Img
                    src="images/img_image_9_108x141.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex w-full">
                  <Img
                    src="images/img_image_9.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex justify-end w-full">
                  <Img
                    src="images/img_image_9_1.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex justify-end w-full">
                  <Img
                    src="images/img_image_9_2.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex w-full">
                  <Img
                    src="images/img_image_9_3.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex w-full">
                  <Img
                    src="images/img_image_9_4.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex items-center h-[108px] w-full md:h-auto bg-[url(/public/images/img_picture.png)] bg-cover bg-no-repeat">
                  <Img
                    src="images/img_image_9_5.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <div className="flex justify-end items-center h-[108px] w-full md:h-auto bg-[url(/public/images/img_picture_108x141.png)] bg-cover bg-no-repeat">
                  <Img
                    src="images/img_image_9.png"
                    alt="imagenine_one"
                    className="h-[108px] w-full md:h-auto object-cover"
                  />
                </div>
                <EditDetailsOneImageuploader className="flex flex-col items-center justify-center w-full gap-[7px] p-[11px] border-gray-500_01 border border-dashed bg-white-A700 rounded" />
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
                  Property Location
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_eleven"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="flex flex-col items-center gap-[15px] p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="p" className="opacity-0.6">
                      Region
                    </Heading>
                    <Input
                      shape="round"
                      name="metro_manila"
                      placeholder={`Metro Manila`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Heading as="p" className="opacity-0.6">
                      Province
                    </Heading>
                    <Input
                      shape="round"
                      name="metro_manila"
                      placeholder={`Metro Manila`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="p" className="opacity-0.6">
                      City
                    </Heading>
                    <Input shape="round" name="city" placeholder={`Taguig`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="p" className="opacity-0.6">
                      Barangay
                    </Heading>
                    <Input
                      shape="round"
                      name="bagumbayan"
                      placeholder={`Bagumbayan`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <a href="#" className="opacity-0.6">
                      <Heading as="p">Street name, Buidling, House no.</Heading>
                    </a>
                    <Input shape="round" name="name" placeholder={`304`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="p" className="opacity-0.6">
                      Zip Code
                    </Heading>
                    <Input shape="round" name="zipcode" placeholder={`3014`} className="self-stretch sm:pr-5" />
                  </div>
                </div>
                <Heading as="p" className="self-start opacity-0.6">
                  Map preview
                </Heading>
                <GoogleMap showMarker={false} className="h-[415px] w-[94%] rounded" />
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h6" className="ml-4 md:ml-0 !text-blue_gray-900">
                  Interior Features
                </Heading>
                <Img src="images/img_uil_edit_teal_900.svg" alt="uiledit" className="h-[24px] w-[24px] mr-4 md:mr-0" />
              </div>
              <div className="flex flex-col gap-[15px] p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                <div className="flex md:flex-col justify-center ml-6 gap-4 md:ml-0">
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Heading as="p" className="opacity-0.6">
                      Bedroom/s
                    </Heading>
                    <Input shape="round" name="frameforty" placeholder={`2`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Heading as="p" className="opacity-0.6">
                      Bathroom/s
                    </Heading>
                    <Input shape="round" name="frameforty_four" placeholder={`2`} className="self-stretch sm:pr-5" />
                  </div>
                </div>
                <div className="flex flex-col items-start w-[47%] md:w-full ml-6 gap-[3px] md:ml-0">
                  <Heading as="p" className="opacity-0.6">
                    Kitchen
                  </Heading>
                  <Input shape="round" name="frameforty_five" placeholder={`2`} className="self-stretch sm:pr-5" />
                </div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h6" className="ml-4 md:ml-0 !text-blue_gray-900">
                  Exterior Features
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_fifteen"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="flex flex-col gap-4 p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                <div className="flex md:flex-col justify-center ml-6 gap-4 md:ml-0">
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Heading as="p" className="opacity-0.6">
                      Garden
                    </Heading>
                    <Input shape="round" name="frameforty_six" placeholder={`2`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-0.5">
                    <Heading as="p" className="opacity-0.6">
                      Swimming pool
                    </Heading>
                    <Input shape="round" name="frameforty" placeholder={`2`} className="self-stretch sm:pr-5" />
                  </div>
                </div>
                <div className="flex flex-col items-start w-[47%] md:w-full ml-6 gap-0.5 md:ml-0">
                  <Heading as="p" className="opacity-0.6">
                    Garage
                  </Heading>
                  <Input shape="round" name="frameforty" placeholder={`2`} className="self-stretch sm:pr-5" />
                </div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
                  Appliances
                </Heading>
                <Img src="images/img_uil_edit_teal_900.svg" alt="uiledit" className="h-[24px] w-[24px] mr-4 md:mr-0" />
              </div>
              <div className="flex flex-col items-center gap-4 p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4 py-2.5">
                  <Input shape="round" name="air" placeholder={`Air conditioning`} className="w-full sm:pr-5" />
                  <Input
                    shape="round"
                    name="washing_machine"
                    placeholder={`Washing machine`}
                    className="w-full sm:pr-5"
                  />
                </div>
                <div className="flex w-[94%] md:w-full py-2.5">
                  <Input shape="round" name="dryer" placeholder={`Dryer`} className="w-[49%] sm:pr-5" />
                </div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="xl" as="h6" className="ml-4 md:ml-0 !text-blue_gray-900">
                  Utilities
                </Heading>
                <Img src="images/img_uil_edit_teal_900.svg" alt="uiledit" className="h-[24px] w-[24px] mr-4 md:mr-0" />
              </div>
              <div className="flex flex-col items-center gap-4 p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4 py-2.5">
                  <Input shape="round" name="water_source" placeholder={`Water source`} className="w-full sm:pr-5" />
                  <Input
                    shape="round"
                    name="internet_access"
                    placeholder={`Internet Access`}
                    className="w-full sm:pr-5"
                  />
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4 py-2.5">
                  <Input shape="round" name="security" placeholder={`Security`} className="w-full sm:pr-5" />
                  <Input shape="round" name="gas" placeholder={`Gas`} className="w-full sm:pr-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

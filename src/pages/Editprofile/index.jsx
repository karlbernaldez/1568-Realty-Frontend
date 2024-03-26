import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img, Heading } from "../../components";
import Sidebar from "../../components/Sidebar.jsx";

export default function EditprofilePage() {
  return (
    <>
      <Helmet>
        <title>1568 Realty</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-8 bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 py-12 md:py-5 bg-white-A700 shadow-xs !sticky overflow-auto" />
        <Tabs
          className="flex flex-col w-[71%] md:w-full mt-[59px] md:p-5"
          selectedTabClassName="!text-teal-900 font-bold text-base border-teal-900 border-b-2"
          selectedTabPanelClassName="p-10 sm:p-5 relative tab-panel--selected"
        >
          <div className="flex flex-col items-start gap-[5px]">
            <Heading size="md" as="h1">
              Profile
            </Heading>
            <Text size="xs" as="p" className="!text-gray-500">
              Manage personal information and security settings
            </Text>
          </div>
          <TabList className="flex sm:flex-col items-center mt-4 gap-[21px] rounded-bl-lg rounded-br-lg rotate-[180deg] border-gray-300 border-l border-b border-r border-solid bg-white-A700">
            <Tab className="flex justify-center items-center ml-[23px] gap-2.5 p-2.5 sm:ml-0 border-teal-900 border-b-2 border-solid">
              <Img src="images/img_search_teal_900.svg" alt="search_one" className="h-[24px] w-[24px] my-1.5" />
              <Heading as="h2" className="!text-teal-900">
                Personal Information
              </Heading>
            </Tab>
            <Tab className="flex justify-center items-center gap-2.5 p-2.5">
              <Img src="images/img_ri_admin_line.svg" alt="riadminline_one" className="h-[23px] w-[23px] my-1.5" />
              <Heading as="h3" className="self-end mb-1.5">
                Security Settings
              </Heading>
            </Tab>
          </TabList>
          {[...Array(2)].map((_, index) => (
            <TabPanel key={`tab-panel${index}`} className="absolute">
              <div className="w-full">
                <div className="flex flex-col items-start gap-6">
                  <div className="self-stretch">
                    <div className="flex flex-col gap-[15px]">
                      <Heading size="s" as="h2">
                        Personal Information
                      </Heading>
                      <div className="flex justify-center items-center gap-2.5 p-2">
                        <Img src="images/img_avatar.png" alt="avatar_one" className="h-[64px] w-[64px] rounded-[50%]" />
                        <div className="flex flex-col items-start gap-[7px] flex-1">
                          <Button size="xs" variant="outline" shape="round" className="w-full !rounded-sm">
                            Upload Avatar
                          </Button>
                          <Text size="xs" as="p">
                            maximum file size: 5MB
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-[15px]">
                        <div className="flex flex-col w-full gap-[3px]">
                          <Text as="p">First name</Text>
                          <Input
                            shape="round"
                            name="firstName"
                            placeholder={`Nina`}
                            className="sm:pr-5 border-gray-500_01 border border-solid"
                          />
                        </div>
                        <div className="flex flex-col w-full gap-0.5">
                          <Text as="p">Middle name (optional)</Text>
                          <Input
                            shape="round"
                            name="name"
                            placeholder={`Sison`}
                            className="sm:pr-5 border-gray-500_01 border border-solid"
                          />
                        </div>
                        <div className="flex flex-col w-full gap-[3px]">
                          <Text as="p">Last name</Text>
                          <Input
                            shape="round"
                            name="lastName"
                            placeholder={`Velasco`}
                            className="sm:pr-5 border-gray-500_01 border border-solid"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-[15px]">
                        <div className="flex flex-col w-full gap-[3px]">
                          <Text as="p">Username</Text>
                          <Input
                            shape="round"
                            name="userName"
                            placeholder={`nina`}
                            className="sm:pr-5 border-gray-500_01 border border-solid"
                          />
                        </div>
                        <div className="flex flex-col w-full gap-[3px]">
                          <Text as="p">Email address</Text>
                          <Input
                            shape="round"
                            type="email"
                            name="email"
                            placeholder={`ninavelasco@gmail.com`}
                            className="sm:pr-5 border-gray-500_01 border border-solid"
                          />
                        </div>
                        <div className="flex flex-col w-full gap-[3px]">
                          <Text as="p">Mobile number</Text>
                          <Input
                            shape="round"
                            type="number"
                            name="mobileNumber"
                            placeholder={`09069462738`}
                            className="sm:pr-5 border-gray-500_01 border border-solid"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-4">
                        <div className="flex flex-col w-[33%] md:w-full gap-[3px]">
                          <Text as="p">Birthdate</Text>
                          <Input
                            shape="round"
                            name="date"
                            placeholder={`01 - 11 - 2002`}
                            suffix={<Img src="images/img_pixelarticonscalendar.svg" alt="pixelarticons:calendar" />}
                            className="gap-[35px] border-gray-500_01 border border-solid"
                          />
                        </div>
                        <div className="flex flex-col gap-[3px] flex-1">
                          <Text as="p">Address</Text>
                          <Input
                            shape="round"
                            name="address"
                            placeholder={`261 Masagana, Pandi, Bulacan`}
                            className="sm:pr-5 border-gray-500_01 border border-solid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button shape="round" className="sm:px-5 font-bold min-w-[156px]">
                    Update profile
                  </Button>
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img, Heading } from "../../components";
import Sidebar from "../../components/Sidebar";

export default function SecuritySettingsPage() {
  return (
    <>
      <Helmet>
        <title>Bryan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-8 bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 py-12 md:py-5 bg-white-A700 shadow-xs !sticky overflow-auto" />
        <div className="flex w-[71%] md:w-full mt-[59px] md:p-5">
          <Tabs
            className="flex flex-col w-full"
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
              <Tab className="flex justify-center items-center ml-[23px] gap-2.5 p-2.5 sm:ml-0">
                <Img src="images/img_search_gray_900.svg" alt="search_one" className="h-[24px] w-[24px] my-1.5" />
                <Heading as="h2">Personal Information</Heading>
              </Tab>
              <Tab className="flex justify-center items-center gap-2.5 p-2.5 border-teal-900 border-b-2 border-solid">
                <Img
                  src="images/img_ri_admin_line_teal_900.svg"
                  alt="riadminline_one"
                  className="h-[23px] w-[23px] my-1.5"
                />
                <Heading as="h3" className="self-end mb-1.5 !text-teal-900">
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
                        <Heading size="s" as="h4">
                          Change password
                        </Heading>
                        <Input
                          color="blue_gray_50"
                          shape="round"
                          type="password"
                          name="password"
                          placeholder={`Password should be minimum of 8 characters, at least one number and one special character.`}
                          prefix={<Img src="images/img_group.svg" alt="Group" />}
                          className="gap-[5px] sm:pr-5 !rounded-sm"
                        />
                        <div className="flex flex-col w-[47%] md:w-full gap-0.5">
                          <Text as="p">Current password</Text>
                          <Input
                            shape="round"
                            type="password"
                            name="password"
                            placeholder={`Current password`}
                            className="sm:pr-5 !text-gray-500_01 border-gray-500_01 border border-solid"
                          />
                        </div>
                        <div className="flex flex-col w-[47%] md:w-full gap-0.5">
                          <Text as="p">New password</Text>
                          <Input
                            shape="round"
                            type="password"
                            name="newpassword"
                            placeholder={`New password`}
                            className="sm:pr-5 !text-gray-500_01 border-gray-500_01 border border-solid"
                          />
                        </div>
                        <div className="flex flex-col w-[47%] md:w-full gap-0.5">
                          <Text as="p">Re-type new password</Text>
                          <Input
                            shape="round"
                            type="password"
                            name="newpassword"
                            placeholder={`Re-type new password`}
                            className="sm:pr-5 !text-gray-500_01 border-gray-500_01 border border-solid"
                          />
                        </div>
                      </div>
                    </div>
                    <Button shape="round" className="sm:px-5 font-bold min-w-[182px]">
                      Update password
                    </Button>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}

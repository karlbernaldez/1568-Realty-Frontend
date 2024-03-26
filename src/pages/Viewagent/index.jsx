import React from "react";
import { Helmet } from "react-helmet";
import { Input, Text, Img, Heading } from "../../components";
import Sidebar from "../../components/Sidebar";

export default function ViewagentPage() {
  return (
    <>
      <Helmet>
        <title>1568 Realstate</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-[25px] bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden" />
        <div className="flex w-[71%] md:w-full mt-[62px] md:p-5 ml-[350px]">
          <div className="flex flex-col items-start w-full gap-[29px]">
            <div className="flex items-center ml-1 md:ml-0">
              <Img src="images/img_ri_arrow_up_line.svg" alt="riarrowup_one" className="h-[24px] w-[24px]" />
              <Heading size="md" as="h1">
                Back
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center ml-2 gap-0.5 md:ml-0">
              <Heading size="lg" as="h2">
                <span className="text-gray-900">Users / Admin</span>
                <span className="text-teal-900">&nbsp;</span>
                <span className="text-gray-900">/</span>
                <span className="text-teal-900">&nbsp;Nina Rapha Ella</span>
              </Heading>
              <Text size="xs" as="p">
                View or edit admin details
              </Text>
            </div>
            <div className="self-stretch shadow-sm">
              <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                <Heading size="md" as="h3" className="ml-4 md:ml-0">
                  Admin Details
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_three"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="flex flex-col items-center gap-[15px] p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                <div className="flex justify-center w-[94%] md:w-full p-2">
                  <Img src="images/img_avatar.png" alt="avatar_one" className="h-[64px] w-[64px] rounded-[50%]" />
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Text as="p">First name</Text>
                    <Input shape="round" name="firstName" placeholder={`Nina`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Text as="p">Middle name</Text>
                    <Input shape="round" name="name" placeholder={`Sison`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Text as="p">Last name</Text>
                    <Input shape="round" name="lastName" placeholder={`Velasco`} className="self-stretch sm:pr-5" />
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Text as="p">Username</Text>
                    <Input shape="round" name="userName" placeholder={`nina`} className="self-stretch sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Text as="p">Email address</Text>
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`ninavelasco@gmail.com`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full gap-[3px]">
                    <Text as="p">Contact number</Text>
                    <Input
                      shape="round"
                      type="number"
                      name="frameforty"
                      placeholder={`09069462738`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[94%] md:w-full mb-4 gap-4">
                  <div className="flex flex-col items-start w-[33%] md:w-full gap-[3px]">
                    <Text as="p">Birthdate</Text>
                    <Input
                      shape="round"
                      name="date"
                      placeholder={`01 - 11 - 2002`}
                      suffix={<Img src="images/img_pixelarticonscalendar.svg" alt="pixelarticons:calendar" />}
                      className="self-stretch gap-[35px]"
                    />
                  </div>
                  <div className="flex flex-col items-start md:self-stretch gap-[3px] flex-1">
                    <Text as="p">Address</Text>
                    <Input
                      shape="round"
                      name="address"
                      placeholder={`261 Masagana, Pandi, Bulacan`}
                      className="self-stretch sm:pr-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

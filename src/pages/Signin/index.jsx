import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, CheckBox, Input, Heading } from "../../components";
import { useRoutes } from "react-router-dom";
import axios from "axios";

export default function SigninPage() {
  return (
    <>
      <Helmet>
        <title>Real State</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pl-[127px] md:pl-5 bg-white-A700 h-screen">
        <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1153px]">
          <div className="flex flex-col justify-center w-[43%] md:w-full gap-[23px] p-0 md:p-5 bg-white-A700 rounded-[21px]">
            <div className="flex self-left justify-left items-center mt-10 gap-2">
              <Img src="images/img_logo.png" alt="logo_one" className="h-9 object-cover" />
              <Heading
                size="2xl"
                as="h1"
                className="self-end !text-transparent !font-compassserif bg-gradient bg-clip-text"
              >
                1568 Realty
              </Heading>
            </div>
            <div className="flex flex-col mb-[38px] gap-[23px]">
              <div className="flex self-start pr-[95px] md:pr-5">
                <div className="flex flex-col items-start gap-[3px]">
                  <a href="#">
                    <Heading size="xl" as="h2" className="!text-black-900">
                      Log in
                    </Heading>
                  </a>
                  <Text size="xl" as="p" className="!text-black-900">
                    Enter your username and password to log in
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="relative border-2 rounded-lg h-[60px]">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-7 w-7 text-gray-400"
                      fill="none"
                      viewBox="0 0 28 28"
                      stroke="currentColor"
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="lucide:user">
                          <g id="Group">
                          <path id="Vector" d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path id="Vector_2" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#A2A2A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          </g>
                        </svg>
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="ml-[50px] mt-[18px] pl-10 bg-gray-50 border border-gray-300 text-lg text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 pl-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="relative border-2 rounded-lg h-[60px]">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-7 w-7 text-gray-400"
                      fill="none"
                      viewBox="0 0 28 28"
                      stroke="currentColor"
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="mdi:password-outline">
                        <path id="Vector" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".2" d="M12 17C11.4696 17 10.9609 16.7893 10.5858 16.4142C10.2107 16.0391 10 15.5304 10 15C10 13.89 10.89 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15C14 15.5304 13.7893 16.0391 13.4142 16.4142C13.0391 16.7893 12.5304 17 12 17ZM18 20V10H6V20H18ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 8.89 4.89 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z" fill="#A2A2A2"/>
                        </g>
                      </svg>
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="ml-[50px] mt-[18px] bg-gray-50 border border-gray-300 text-lg text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 pr-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <CheckBox
                    shape="square"
                    name="rememberme"
                    label="Remember me"
                    id="rememberme"
                    className="self-start gap-1 text-gray-800 text-left text-sm"
                  />
                  <a href="#" className="self-end">
                    <Text as="p" className="!text-gray-900">
                      Forgot password?
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col items-center gap-4">
                  
                <Button size="sm" shape="round" className="w-full sm:px-5 !text-white-A700 font-bold">
                  <a href="/dashboard">Log in</a>
                </Button>
                  
                  <Text as="p" className="!text-gray-900 text-center">
                    <span className="text-gray-900">Developed by </span>
                    <span className="text-gray-900 font-bold">IntelliSeven Technology Solutions Inc.</span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[46%] md:w-full md:p-5">
            <div className="flex flex-col gap-[0px] md:gap-[607px] sm:gap-[405px]">
              <div className="flex pt-[53px] px-[53px] md:pt-5 md:px-5 bg-gray-900_04">
              <Text size="3xl" as="p" className="self-start w-[77%] mt-[40px] mb-[200px] !text-gray-50 !font-notoserifjp text-shadow-stroke">
                  <span className="text-gray-50">
                    <>
                      Unlock your
                      <br />
                    </>
                  </span>
                  <span className="text-gray-50 text-5xl font-bold">
                    <>
                      Dream Home
                      <br />
                    </>
                  </span>
                  <span className="text-gray-50">with us</span>
                </Text>
              </div>
              <Img src="images/img_logo_427x526.png" alt="logo_three" className="h-[454px] w-[546px] object-cover -mt-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

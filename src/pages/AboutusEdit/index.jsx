import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Sidebar from "../../components/Sidebar.jsx";

export default function AboutusEditPage() {
  return (
    <>
      <Helmet>
        <title>1568 Realty</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full pb-10 gap-[26px] sm:pb-5 bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 p-6 sm:p-5 bg-white-A700 shadow-xs !sticky overflow-auto" />
        <div className="flex flex-col w-[71%] md:w-full mt-[60px] gap-10 md:p-5 ml-[350px]">
          <div className="flex flex-col items-start ml-[7px] gap-[3px] md:ml-0">
            <Heading size="md" as="h1">
              <span className="text-gray-900">Pages / </span>
              <span className="text-teal-900">About Us</span>
            </Heading>
            <Text size="xs" as="p" className="!text-gray-500">
              View and manage about us details
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <div className="shadow-sm">
              <div className="flex p-[17px] rounded-tl rounded-tr border-gray-300 border border-solid bg-gray-50_01">
                <Heading size="s" as="h2" className="ml-3.5 md:ml-0">
                  About us
                </Heading>
              </div>
              <div className="flex flex-col gap-10 p-8 sm:p-5 rounded-bl rounded-br border-gray-300 border-l border-b border-r border-solid bg-gray-50_01">
                <div className="ml-6 p-5 md:ml-0 border-gray-500_01 border border-solid rounded">
                  <Text size="md" as="p" className="!text-gray-900">
                    <>
                      With a team of experienced professionals that are dedicated in providing excellent service, we
                      pride ourselves on our deep understanding of the market and our commitment to our client
                      satisfaction.
                      <br />
                      <br />
                      Over the years, we have earned a reputation for excellence, integrity, and reliability. Our
                      clients trust us to guide them through every step of the buying, or renting process, ensuring a
                      smooth and stress-free experience from start to finish. Whether it&#39;s finding the perfect home
                      for a growing family, securing an investment property, or negotiating a complex commercial deal,
                      we are there every step of the way, providing personalized attention and expert guidance.
                      <br />
                      <br />
                      With each new challenge and opportunity, we are reminded of why we do what we do – because there
                      is no greater satisfaction than helping our clients turn their real estate dreams into reality.
                      <br />
                      <br />
                      At 1568 Realty, the journey is just beginning, and we invite you to join us as we continue to set
                      new standards of excellence in the world of real estate.
                    </>
                  </Text>
                </div>
                <div className="flex ml-6 gap-2 md:ml-0">
                  <Button color="gray_50_01" shape="round" className="font-bold min-w-[81px]">
                    Cancel
                  </Button>
                  <Button shape="round" className="sm:px-5 font-bold min-w-[155px]">
                    Save changes
                  </Button>
                </div>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-4 rounded-tl rounded-tr border-gray-300 border border-solid bg-gray-50_01">
                <Heading size="s" as="h3" className="ml-4 md:ml-0">
                  Mission
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_three"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="flex justify-center p-[31px] sm:p-5 rounded-bl rounded-br border-gray-300 border-l border-b border-r border-solid bg-gray-50_01">
                <Text size="md" as="p" className="w-[94%] !text-gray-900">
                  At 1568 Realty, we empower clients to unlock their dream homes and build prosperous futures through
                  exceptional service, innovative solutions, and unwavering integrity.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

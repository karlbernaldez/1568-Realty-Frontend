import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, Text, Input } from "../../components";
import Sidebar from "../../components/Sidebar";

export default function SubscribersPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Bryan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-6 bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden" />
        <div className="flex flex-col items-start w-[71%] md:w-full mt-[59px] gap-[30px] md:p-5 ml-[350px]">
          <div className="flex flex-col items-start ml-[9px] gap-[5px] md:ml-0 ">
            <Heading size="lg" as="h1">
              <span className="text-gray-900">Users /&nbsp;</span>
              <span className="text-teal-900">Subscribers</span>
            </Heading>
            <Text size="xs" as="p" className="!text-gray-500">
              View and manage list of subscribers
            </Text>
          </div>
          <Input
            shape="round"
            name="search"
            placeholder={`Search`}
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e)}
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={15} width={15} fillColor="#1b1b1bff" />
              ) : (
                <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
              )
            }
            className="self-stretch ml-[656px] gap-[35px] md:ml-0 sm:px-5 !text-gray-500_01"
          />
          <div className="self-stretch">
            <div className="flex justify-between items-center gap-5 p-[13px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
              <div className="flex self-start justify-between w-[18%] ml-3.5 gap-5 md:ml-0 flex-wrap">
                <Text as="p" className="self-start">
                  #
                </Text>
                <Text as="p" className="self-end">
                  Email
                </Text>
              </div>
              <Text as="p" className="self-start mr-7 md:mr-0">
                Action
              </Text>
            </div>
            <div className="flex flex-col gap-px rounded-bl-lg rounded-br-lg border-gray-300 border-l border-r border-solid bg-white-A700">
              <div className="flex justify-between items-center gap-5 p-6 md:p-5 border-gray-300 border-b border-solid flex-1">
                <div className="flex ml-1 gap-7 md:ml-0 flex-wrap">
                  <Text as="p">1</Text>
                  <Heading size="xs" as="h2" className="self-end">
                    ninaraphaella.velasco@gmail.com
                  </Heading>
                </div>
                <Button shape="circle" className="w-[30px] mr-4 md:mr-0 !rounded-[15px]">
                  <Img src="images/img_material_symbol_red_800.svg" />
                </Button>
              </div>
              <div className="flex justify-between items-center gap-5 p-6 md:p-5 border-gray-300 border-b border-solid flex-1">
                <div className="flex ml-1 gap-[25px] md:ml-0 flex-wrap">
                  <Text as="p">2</Text>
                  <Heading size="xs" as="h3" className="self-end">
                    pauloregalado@gmail.com
                  </Heading>
                </div>
                <Button shape="circle" className="w-[30px] mr-4 md:mr-0 !rounded-[15px]">
                  <Img src="images/img_material_symbol_red_800.svg" />
                </Button>
              </div>
              <div className="flex justify-between items-center gap-5 p-6 md:p-5 border-gray-300 border-b border-solid flex-1">
                <div className="flex ml-1 gap-[25px] md:ml-0 flex-wrap">
                  <Text as="p">3</Text>
                  <Heading size="xs" as="h4" className="self-end">
                    alyssadelrosario@gmail.com
                  </Heading>
                </div>
                <Button shape="circle" className="w-[30px] mr-4 md:mr-0 !rounded-[15px]">
                  <Img src="images/img_material_symbol_red_800.svg" />
                </Button>
              </div>
              <div className="flex justify-between items-center gap-5 p-6 md:p-5 border-gray-300 border-b border-solid flex-1">
                <div className="flex ml-1 gap-[25px] md:ml-0 flex-wrap">
                  <Text as="p">4</Text>
                  <Heading size="xs" as="h5" className="self-end">
                    clarencecoronel@gmail.com
                  </Heading>
                </div>
                <Button shape="circle" className="w-[30px] mr-4 md:mr-0 !rounded-[15px]">
                  <Img src="images/img_material_symbol_red_800.svg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

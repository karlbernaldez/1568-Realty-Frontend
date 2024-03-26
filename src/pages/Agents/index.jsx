import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input } from "../../components";
import AgentsFooter from "../../components/AgentsFooter";
import { ReactTable } from "../../components/ReactTable";
import Sidebar from "../../components/Sidebar";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { row: "1", contactnumber: "09069462736", email: "ninaraphaella@gmail.com", action: "images/img_dropdown.svg" },
  { row: "2", contactnumber: "09069462736", email: "clarence@gmail.com", action: "images/img_dropdown.svg" },
];

export default function AgentsPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("row", {
        cell: (info) => (
          <div className="flex items-center md:self-stretch gap-[27px] flex-1">
            <Text size="md" as="p" className="ml-1 !text-gray-500_01">
              {info?.getValue?.()}
            </Text>
            <div className="flex items-center gap-2 flex-1">
              <Img src="images/img_ellipse_2.png" alt="circleimage_one" className="h-[32px] w-[32px] rounded-[50%]" />
              <Heading size="xs" as="h2" className="self-end mb-1.5">
                Alyssa Joy Del Rosario
              </Heading>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex justify-between items-center md:self-stretch gap-5 p-3 md:p-5 flex-1 flex-wrap">
            <Text as="p" className="ml-4 my-0.5 md:ml-0">
              #
            </Text>
            <Text as="p" className="self-end mr-[181px] md:mr-0">
              Name
            </Text>
          </div>
        ),
        meta: { width: "377px" },
      }),
      tableColumnHelper.accessor("contactnumber", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[17px] pb-[13px] md:p-5">
            Contact Number
          </Text>
        ),
        meta: { width: "189px" },
      }),
      tableColumnHelper.accessor("email", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3 px-px md:p-5">
            Email
          </Text>
        ),
        meta: { width: "262px" },
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex">
            <Img src={info?.getValue?.()} alt="dropdown_one" className="h-[32px] w-[32px] my-5" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-[15px] md:p-5">
            Action
          </Text>
        ),
        meta: { width: "62px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Bryan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-6 bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden" />
        <div className="flex flex-col w-[71%] md:w-full mt-[61px] gap-[31px] md:p-5 ml-[350px]">
          <div className="flex flex-col self-center gap-[3px]">
            <Heading size="lg" as="h1">
              <span className="text-gray-900">Users /&nbsp;</span>
              <span className="text-teal-900">Agents</span>
            </Heading>
            <Text size="xs" as="p" className="!text-gray-500">
              View and manage list of admin
            </Text>
          </div>
          <div className="flex md:flex-col justify-end ml-[512px] gap-2 md:ml-0">
            <Input
              shape="round"
              name="search"
              placeholder={`Search`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e)}
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={15} width={15} fillColor="#1b1b1bff" />
                ) : (
                  <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                )
              }
              className="gap-[35px] sm:px-5 !text-gray-500_01 flex-grow"
            />
            <Button
              color="teal_900"
              size="sm"
              shape="round"
              leftIcon={<Img src="images/img_memoryplus.svg" alt="memory:plus" />}
              className="gap-2 font-bold min-w-[136px]"
            >
              Add Agent
            </Button>
          </div>
          <div>
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{
                className: "border-gray-300 border border-solid bg-white-A700 rounded-tl rounded-tr md:flex-col",
              }}
              rowDataProps={{ className: "md:flex-col" }}
              columns={tableColumns}
              data={tableData}
            />
            <div className="flex justify-end">
              <AgentsFooter className="flex justify-between items-center w-[36%] md:w-full gap-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

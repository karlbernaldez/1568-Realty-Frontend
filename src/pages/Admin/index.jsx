import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input } from "../../components";
import AgentsFooter from "../../components/AgentsFooter";
import { ReactTable } from "../../components/ReactTable";
import Sidebar from "../../components/Sidebar";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  {
    Data: "1",
    name: "Nina Rapha Ella Velasco",
    contactnumber: "09069462736",
    email: "ninaraphaella@gmail.com",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "2",
    name: "Paulo Regalado",
    contactnumber: "09069462736",
    email: "paulo@gmail.com",
    action: "images/img_dropdown.svg",
  },
];

export default function AdminPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("Data", {
        cell: (info) => (
          <Text size="md" as="p" className="!text-gray-500_01">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pl-[29px] pr-6 py-[15px] sm:px-5">
            #
          </Text>
        ),
        meta: { width: "62px" },
      }),
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-center gap-2">
            <Img src="images/img_ellipse_2_1.png" alt="circleimage_one" className="h-[32px] w-[32px] rounded-[50%]" />
            <Heading size="xs" as="h2" className="self-end mb-1.5">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3">
            Name
          </Text>
        ),
        meta: { width: "315px" },
      }),
      table1ColumnHelper.accessor("contactnumber", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[17px] pb-[13px]">
            Contact Number
          </Text>
        ),
        meta: { width: "189px" },
      }),
      table1ColumnHelper.accessor("email", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3 px-px">
            Email
          </Text>
        ),
        meta: { width: "264px" },
      }),
      table1ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex">
            <Img src={info?.getValue?.()} alt="dropdown_one" className="h-[32px] w-[32px] my-[21px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Action
          </Text>
        ),
        meta: { width: "60px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>1568 Realstate</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-6 bg-gray-100">
        <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden" />
        <div className="flex flex-col w-[71%] md:w-full mt-[59px] gap-[31px] md:p-5 ml-[350px]">
          <div className="flex flex-col self-center gap-[5px]">
            <Heading size="lg" as="h1">
              <span className="text-gray-900">Users /&nbsp;</span>
              <span className="text-teal-900">Admin</span>
            </Heading>
            <Text size="xs" as="p" className="!text-gray-500">
              View and manage list of admin
            </Text>
          </div>
          <div className="flex md:flex-col justify-end ml-[508px] gap-2 md:ml-0">
            <Input
              shape="round"
              name="search"
              placeholder={`Search`}
              value={searchBarValue2}
              onChange={(e) => setSearchBarValue2(e)}
              suffix={
                searchBarValue2?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue2("")} height={15} width={15} fillColor="#1b1b1bff" />
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
              className="gap-2 font-bold min-w-[140px]"
            >
              Add Admin
            </Button>
          </div>
          <div>
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{
                className: "border-gray-300 border border-solid bg-white-A700 rounded-tl-lg rounded-tr-lg flex-wrap",
              }}
              rowDataProps={{ className: "md:flex-col" }}
              columns={table1Columns}
              data={table1Data}
            />
            <div className="flex justify-end">
              <AgentsFooter p110of100="1 of 1" className="flex justify-between items-center w-[35%] md:w-full gap-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

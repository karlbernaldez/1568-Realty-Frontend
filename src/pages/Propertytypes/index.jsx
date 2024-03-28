  import React from "react";
  import { Img, Heading, Text, Button } from "../../components";
  import PropertyTypesFooter from "../../components/PropertyTypesFooter";
  import { ReactTable } from "../../components/ReactTable";
  import { createColumnHelper } from "@tanstack/react-table";
  import Sidebar from "../../components/Sidebar";

  const tableData = [
    { Data: "1", propertytype: "Commercial", action: "images/img_dropdown.svg" },
    { Data: "2", propertytype: "Farm Lot", action: "images/img_dropdown.svg" },
    { Data: "3", propertytype: "House and Lot", action: "images/img_dropdown.svg" },
    { Data: "4", propertytype: "Residential Lot", action: "images/img_dropdown.svg" },
    { Data: "5", propertytype: "Condo", action: "images/img_dropdown.svg" },
  ];

  export default function PropertytypesPage() {
    const tableColumns = React.useMemo(() => {
      const tableColumnHelper = createColumnHelper();
      return [
        tableColumnHelper.accessor("Data", {
          cell: (info) => (
            <Text as="p" className="md:p-5">
              {info?.getValue?.()}
            </Text>
          ),
          header: (info) => (
            <Heading size="lg" as="h2" className="pl-7 pr-[35px] py-3.5 sm:px-5 !text-gray-600_01">
              #
            </Heading>
          ),
          meta: { width: "78px" },
        }),
        tableColumnHelper.accessor("propertytype", {
          cell: (info) => (
            <Heading as="h3" className="md:p-5 !text-gray-900">
              {info?.getValue?.()}
            </Heading>
          ),
          header: () => (
            <Text size="s" as="p" className="py-[15px]">
              Property type
            </Text>
          ),
          meta: { width: "751px" },
        }),
        tableColumnHelper.accessor("action", {
          cell: (info) => (
            <div className="flex md:p-5">
              <Img src={info?.getValue?.()} alt="dropdown_one" className="h-[32px] w-[32px] my-5" />
            </div>
          ),
          header: () => (
            <Text size="s" as="p" className="py-[15px]">
              Action
            </Text>
          ),
          meta: { width: "62px" },
        }),
      ];
    }, []);

    return (
      <>
        <div className="flex md:flex-col items-start w-full gap-8 bg-gray-100 ml-[350px]">
          <Sidebar
            width="311px !important"
            className="flex flex-col h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden  "
          >
          </Sidebar>
          <div className="flex flex-col items-start w-[calc(100% - 311px)] md:w-full mt-[60px] gap-8 md:p-5">
            <div className="flex flex-col items-start gap-[3px]">
              <Heading size="2xl" as="h1" className="!text-gray-900">
                Property
              </Heading>
              <Text size="xs" as="p" className="!text-gray-500">
                View and manage property list
              </Text>
            </div>
            <Button
              shape="round"
              leftIcon={<Img src="images/img_memoryplus.svg" alt="memory:plus" />}
              className="w-[198px] ml-[693px] gap-2 md:ml-0"
            >
              Add Property Type
            </Button>
            <div className="self-stretch">
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{
                  className: "border-gray-300 border border-solid bg-white-A700 rounded-tl rounded-tr flex-wrap",
                }}
                rowDataProps={{
                  className:
                    "border-gray-300 border-l border-r border-solid bg-white-A700 rounded-bl rounded-br md:flex-col",
                }}
                columns={tableColumns}
                data={tableData}
              />
              <div className="flex justify-end">
                <PropertyTypesFooter className="flex justify-between items-center w-[36%] md:w-full pr-3 gap-5" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

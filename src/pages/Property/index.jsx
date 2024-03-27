import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input, SelectBox } from "../../components";
import FAQsFooter from "../../components/FAQsFooter";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";
import SidebarContent from "../../components/Sidebar.jsx";
import { useState } from 'react';
import AddProperty from '../../../src/components/AddProperty'

const status = [
  { label: "All status", value: "all" },
  { label: "For Sale", value: "sale" },
  { label: "For Rent", value: "rent" },
  { label: "Sold", value: "sold" },
];

const type = [
  { label: "All types", value: "all" },
  { label: "Commercial", value: "commercial" },
  { label: "Farm Lot", value: "farm" },
  { label: "House and Lot", value: "hnl" },
  { label: "Residential Lot", value: "residential" },
  { label: "Condo", value: "condo" },
];

const table1Data = [
  {
    Data: "1",
    propertyname: "Taguig Property",
    status: "For sale",
    type: "House and lot",
    address: "Taguig",
    agent: "Alyssa Del Rosario",
    views: "1000",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "2",
    propertyname: "Pandi Property 2",
    status: "For Rent",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Paulo Regalado",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "3",
    propertyname: "Pandi Property 2",
    status: "For Rent",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Paulo Regalado",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "4",
    propertyname: "Pandi Property 2",
    status: "For Rent",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Paulo Regalado",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "5",
    propertyname: "Pandi Property 2",
    status: "For Rent",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Paulo Regalado",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "6",
    propertyname: "Pandi Property 2",
    status: "For Rent",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Paulo Regalado",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
];

export default function PropertyPage() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [activeDropdown, setActiveDropdown] = useState(false);
    
    const toggleDropdown = (index) => {
      if (activeDropdown === index) {
          setActiveDropdown(null);
      } else {
          setActiveDropdown(index);
      }
    };

  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("Data", {
        cell: (info) => (
          <Text size="xl" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h2" className="pl-7 pr-[35px] py-3.5 sm:px-5 !text-gray-600_01">
            #
          </Heading>
        ),
        meta: { width: "78px" },
      }),
      table1ColumnHelper.accessor("propertyname", {
        cell: (info) => (
          <Heading size="s" as="h3" className="!text-gray-900">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Property name
          </Text>
        ),
        meta: { width: "155px" },
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Status
          </Text>
        ),
        meta: { width: "122px" },
      }),
      table1ColumnHelper.accessor("type", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="px-px py-[15px]">
            Type
          </Text>
        ),
        meta: { width: "132px" },
      }),
      table1ColumnHelper.accessor("address", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Address
          </Text>
        ),
        meta: { width: "115px" },
      }),
      table1ColumnHelper.accessor("agent", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[17px] pb-[13px]">
            Agent
          </Text>
        ),
        meta: { width: "156px" },
      }),
      table1ColumnHelper.accessor("views", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Views
          </Text>
        ),
        meta: { width: "70px" },
      }),
      table1ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex md:p-5">
            <Img src={info?.getValue?.()} alt="dropdown_one" className="h-[32px] w-[32px] my-5" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-[15px]">
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
        <title>Real State</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full pr-12 gap-8 md:pr-5 bg-gray-100_01">
      <SidebarContent/>
        <div className="flex flex-col items-center flex-1 ml-[350px] mt-[60px]">
          <div className="flex flex-col self-start items-start gap-[3px]">
            <Heading size="xl" as="h1" className="!text-gray-900">
              Property
            </Heading>
            <Text size="md" as="p" className="!text-gray-500_01">
              View and manage property list
            </Text>
          </div>
          <div className="flex md:flex-col self-stretch justify-center mt-8 gap-[5px]">
          <SelectBox
            shape="round"
            indicator={
              <div className="group relative" onClick={() => toggleDropdown(1)}> {/* Click event applied to the whole group */}
                <Img
                  src="images/img_vector.svg"
                  alt="Vector"
                  style={{ transform: activeDropdown === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  className="w-full"
                />
                <span className="absolute top-1/2 left-[-60px] transform -translate-x-1/2 -translate-y-1/2 text-sm font-normal font-helvetica text-neutral-400">Status</span>
              </div>
            }
            name="ordertype_one"
            placeholder={``}
            options={status}
            className="w-[10%] gap-px sm:px-5 border-gray-500 border border-solid flex-1 text-sm"
          />
          <SelectBox
            shape="round"
            onClick={() => toggleDropdown(1)} 
            indicator={
              <Img
                src="images/img_vector.svg"
                alt="Vector"
                style={{ transform: activeDropdown === 2 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                onClick={() => toggleDropdown(2)} // Toggle dropdown for the second SelectBox
              />
            }
            name="ordertype_one"
            placeholder={`Type`}
            options={type}
            className="w-[30px] gap-px sm:px-5 border-gray-500 border border-solid flex-1 text-sm"
          />
          <SelectBox
              shape="round" 
              indicator={<Img src="images/img_grommeticonsnext.svg" alt="grommet-icons:next" />}
              name="ordertype_two"
              placeholder={`Agent`}
              options={type}
              className="gap-px sm:px-5 border-gray-500 border border-solid flex-1"
          />
            <Input
              color="white_A700"
              size="xs"
              variant="fill"
              shape="round"
              name="search"
              placeholder={`ID, Address, Property`}
              value={searchBarValue2}
              onChange={(e) => setSearchBarValue2(e)}
              suffix={
                searchBarValue2?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue2("")} height={15} width={15} fillColor="#1b1b1bff" />
                ) : (
                  <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                )
              }
              className="w-[27%] md:w-full gap-[35px] sm:px-5 border"
            />
            <Button shape="round" leftIcon={<Img src="images/img_memoryplus.svg" alt="memory:plus" />} className="w-full gap-2 font-bold flex-1" onClick={handleOpenModal}>
              <span className="text-xs md:text-sm lg:text-base ml-[-5px]">Add Property</span>
            </Button>
            <AddProperty isOpen={isModalOpen} onClose={handleCloseModal}>
              {/* Modal content goes here */}
            </AddProperty>
          </div>
          <ReactTable
            size="md"
            bodyProps={{ className: "" }}
            headerProps={{
              className: "border-gray-300_01 border border-solid bg-white-A700 rounded-tl rounded-tr md:flex-wrap",
            }}
            rowDataProps={{ className: "border-gray-300_01 border-b border-solid md:flex-col" }}
            className="self-stretch w-[891px] mt-8"
            columns={table1Columns}
            data={table1Data}
          />
          <div className="flex self-end justify-end mt-2">
            <FAQsFooter className="flex justify-end items-center" />
          </div>
        </div>
      </div>
    </>
  );
}

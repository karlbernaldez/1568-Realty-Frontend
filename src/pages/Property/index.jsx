import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input, SelectBox } from "../../components";
import FAQsFooter from "../../components/FAQsFooter";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
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
        <Sidebar
          width="311px !important"
          className="flex flex-col h-screen gap-10 top-0 p-6 sm:p-5 bg-white-A700 shadow-xs !sticky overflow-auto"
        >
          <div className="flex flex-col self-stretch mt-6 gap-[31px]">
            <div className="flex justify-center items-center gap-2">
              <Img src="images/img_logo.png" alt="logo_one" className="self-start object-cover" />
              <Heading size="2xl" as="h3" className="self-end !text-gray-900_04 !font-compassserif">
                <span className="text-lime_600">1568</span>
                <span className="text-lime_600 tracking-[-3.08px]">&nbsp;</span>
                <span className="text-teal-900">Realty</span>
              </Heading>
            </div>
            <div className="flex justify-center items-center gap-[7px] p-[18px] bg-gray-900_04 rounded">
              <div className="flex justify-between items-center pr-[39px] gap-5 sm:pr-5 flex-1">
                <Img src="images/img_ellipse_5.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                <div className="flex flex-col items-start">
                  <Text size="xl" as="p" className="!text-gray-50">
                    Nina Velasco
                  </Text>
                  <Text size="md" as="p" className="!text-gray-50 !font-helveticalight">
                    Admin
                  </Text>
                </div>
              </div>
              <Img src="images/img_uil_edit.svg" alt="uiledit_one" className="h-[24px] w-[24px]" />
            </div>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "16px",
                backgroundColor: "#ffffff",
                color: "#668378",
                fontWeight: 700,
                fontSize: "16px",
                borderRadius: "4px",
                paddingLeft: "16px",
                paddingRight: "16px",
                [`&:hover, &.ps-active`]: { color: "#13593e", backgroundColor: "#ccd5d2 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "458px" } }}
            renderExpandIcon={() => (
              <Img
                src="images/img_arrow_right.svg"
                alt="arrowright_one"
                className="self-end h-[18px] w-[18px] cursor-pointer"
              />
            )}
            className="flex flex-col self-stretch w-full mb-[5px] pb-[49px] md:pb-5"
          >
            <div className="flex flex-col">
              <MenuItem
                icon={
                  <Img
                    src="images/img_view_dashboard_outline_gray_600.svg"
                    alt="viewdashboard"
                    className="h-[28px] w-[28px]"
                  />
                }
              >
                Dashboard
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="images/img_material_symbol_teal_900.svg"
                    alt="materialsymbol"
                    className="h-[28px] w-[28px]"
                  />
                }
                suffix={<div className="self-end h-[18px] w-[16%] rotate-[-90deg]" />}
              >
                Property
              </MenuItem>
              <MenuItem icon={<div className="h-[14px] w-[12%]" />}>Active Listings</MenuItem>
              <MenuItem icon={<div className="h-[14px] w-[12%]" />}>Property types</MenuItem>
              <SubMenu
                icon={<Img src="images/img_mi_users.svg" alt="miusers_one" className="h-[28px] w-[28px]" />}
                label="Users"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img src="images/img_tdesign_page_head.svg" alt="tdesignpage_one" className="h-[28px] w-[28px]" />
                }
                label="Pages"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
            </div>
            <div>
              <MenuItem
                icon={<Img src="images/img_ic_twotone_log_out.svg" alt="ictwotonelog" className="h-[24px] w-[24px]" />}
              >
                Log out
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-col items-center flex-1">
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
              indicator={<Img src="images/img_grommeticonsnext.svg" alt="grommet-icons:next" />}
              name="ordertype"
              placeholder={`Status`}
              options={dropDownOptions}
              className="w-[15%] md:w-full gap-px sm:px-5 border-gray-500 border border-solid"
            />
            <SelectBox
              shape="round"
              indicator={<Img src="images/img_vector.svg" alt="Vector" />}
              name="ordertype_one"
              placeholder={`Type`}
              options={dropDownOptions}
              className="gap-px sm:px-5 border-gray-500 border border-solid flex-1"
            />
            <SelectBox
              shape="round"
              indicator={<Img src="images/img_grommeticonsnext.svg" alt="grommet-icons:next" />}
              name="ordertype_two"
              placeholder={`Agent`}
              options={dropDownOptions}
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
            <Button
              shape="round"
              leftIcon={<Img src="images/img_memoryplus.svg" alt="memory:plus" />}
              className="w-full gap-2 font-bold flex-1"
            >
              Add Property
            </Button>
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

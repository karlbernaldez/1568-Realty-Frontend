import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button } from "../../components";
import PropertyTypesFooter from "../../components/PropertyTypesFooter";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

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
        header: (info) => (
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
        header: (info) => (
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
      <Helmet>
        <title>Bryan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full gap-8 bg-gray-100">
        <Sidebar
          width="311px !important"
          className="flex flex-col h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden"
        >
          <div className="flex flex-col self-stretch mt-6 gap-[31px]">
            <div className="flex items-center gap-2">
              <Img src="images/img_logo.png" alt="logo_one" className="self-start object-cover" />
              <Heading size="3xl" as="h3" className="self-end !text-gray-900_01 !font-compassserif">
                <span className="text-lime_600">1568</span>
                <span className="text-lime_600 tracking-[-3.08px]">&nbsp;</span>
                <span className="text-teal-900">Realty</span>
              </Heading>
            </div>
            <div className="flex justify-center items-center gap-[7px] p-[18px] bg-gray-900_01 rounded">
              <div className="flex items-center gap-2 flex-1">
                <Img src="images/img_ellipse_5.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                <div className="flex flex-col items-start">
                  <Text as="p" className="!text-gray-50">
                    Nina Velasco
                  </Text>
                  <Text size="xs" as="p" className="!text-gray-50 !font-helveticalight">
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
                  <Img src="images/img_view_dashboard_outline.svg" alt="viewdashboard" className="h-[28px] w-[28px]" />
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
                  <Img
                    src="images/img_tdesign_page_head_gray_600.svg"
                    alt="tdesignpage_one"
                    className="h-[28px] w-[28px]"
                  />
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
        <div className="flex flex-col items-start w-[71%] md:w-full mt-[60px] gap-8 md:p-5">
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
            className="w-full ml-[693px] gap-2 md:ml-0"
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

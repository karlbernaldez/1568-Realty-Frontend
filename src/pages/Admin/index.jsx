import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Text, Button, Input } from "../../components";
import FAQsFooter from "../../components/FAQsFooter";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

const table2Data = [
  { row: "1", rowcontactnumbe: "09069462736", action: "images/img_dropdown.svg" },
  { row: "1", rowcontactnumbe: "09069462736", action: "images/img_dropdown.svg" },
];

export default function AdminPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("row", {
        cell: (info) => (
          <div className="flex items-center gap-[27px] md:p-5">
            <Text size="xl" as="p" className="ml-1 !text-gray-500">
              {info?.getValue?.()}
            </Text>
            <div className="flex items-center pr-2.5 gap-2 flex-1">
              <Img src="images/img_ellipse_2.png" alt="circleimage_one" className="h-[32px] w-[32px] rounded-[50%]" />
              <Heading size="s" as="h2" className="self-end mb-1.5 !text-gray-900">
                Nina Rapha Ella Velasco
              </Heading>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex justify-between gap-5 p-3 md:p-5">
            <Text as="p" className="ml-4 my-0.5 md:ml-0">
              #
            </Text>
            <Text as="p" className="self-end mr-[173px] md:mr-0">
              Name
            </Text>
          </div>
        ),
        meta: { width: "369px" },
      }),
      table2ColumnHelper.accessor("rowcontactnumbe", {
        cell: (info) => (
          <div className="flex justify-between gap-5 md:p-5 flex-1">
            <Heading
              size="s"
              as="h3"
              className="self-end mt-[3px] !text-gray-600_01 !font-plusjakartasans !font-semibold"
            >
              {info?.getValue?.()}
            </Heading>
            <Heading size="s" as="h4" className="self-end mr-16 !text-gray-600_01 !font-plusjakartasans !font-semibold">
              ninaraphaella@gmail.com
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex justify-between gap-5 md:p-5 flex-1">
            <Text as="p" className="mt-[17px] mb-3">
              Contact Number
            </Text>
            <Text as="p" className="mb-3 mr-[172px]">
              Email
            </Text>
          </div>
        ),
        meta: { width: "461px" },
      }),
      table2ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex md:p-5">
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
        <title>Real State</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full pr-14 gap-6 md:pr-5 bg-gray-100_01">
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
                marginTop: "71px",
                borderRadius: "4px",
                paddingLeft: "16px",
                paddingRight: "16px",
                [`&:hover, &.ps-active`]: { color: "#13593e", backgroundColor: "#ccd5d2 !important" },
              },
            }}
            renderExpandIcon={() => (
              <Img
                src="images/img_arrow_right.svg"
                alt="arrowright_one"
                className="self-end h-[18px] w-[18px] cursor-pointer"
              />
            )}
            className="flex flex-col self-stretch w-full mb-[5px] pb-[51px] md:pb-5"
          >
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
            <SubMenu
              icon={<Img src="images/img_material_symbol.svg" alt="materialsymbol" className="h-[28px] w-[28px]" />}
              label="Property"
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={<Img src="images/img_mi_users_teal_900.svg" alt="miusers_one" className="h-[28px] w-[28px]" />}
              suffix={<div className="self-end h-[18px] w-[20%] rotate-[-90deg]" />}
            >
              Users
            </MenuItem>
            <MenuItem icon={<div className="h-[14px] w-[23%]" />}>Admin</MenuItem>
            <MenuItem icon={<div className="h-[14px] w-[22%]" />}>Agents</MenuItem>
            <MenuItem icon={<div className="h-[14px] w-[14%]" />}>Subscribers</MenuItem>
            <SubMenu
              icon={<Img src="images/img_tdesign_page_head.svg" alt="tdesignpage_one" className="h-[28px] w-[28px]" />}
              label="Pages"
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={<Img src="images/img_ic_twotone_log_out.svg" alt="ictwotonelog" className="h-[24px] w-[24px]" />}
            >
              Log out
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="flex flex-col mt-[59px] gap-[31px] flex-1">
          <div className="flex flex-col self-center gap-[5px]">
            <Heading size="xl" as="h1" className="!text-gray-900">
              <span className="text-gray-900">Users / </span>
              <span className="text-teal-900">Admin</span>
            </Heading>
            <Text size="md" as="p" className="!text-gray-500_01">
              View and manage list of admin
            </Text>
          </div>
          <div className="flex md:flex-col justify-end ml-[508px] gap-2 md:ml-0">
            <Input
              color="white_A700"
              size="xs"
              variant="fill"
              shape="round"
              name="search"
              placeholder={`Search`}
              value={searchBarValue3}
              onChange={(e) => setSearchBarValue3(e)}
              suffix={
                searchBarValue3?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue3("")} height={15} width={15} fillColor="#1b1b1bff" />
                ) : (
                  <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                )
              }
              className="gap-[35px] sm:px-5 border flex-1"
            />
            <Button
              shape="round"
              leftIcon={<Img src="images/img_memoryplus.svg" alt="memory:plus" />}
              className="gap-2 font-bold min-w-[140px]"
            >
              Add Admin
            </Button>
          </div>
          <div>
            <ReactTable
              size="sm"
              bodyProps={{ className: "" }}
              headerProps={{
                className:
                  "border-gray-300_01 border border-solid bg-white-A700 rounded-tl-lg rounded-tr-lg md:flex-col",
              }}
              rowDataProps={{ className: "md:flex-col" }}
              className="w-[891px]"
              columns={table2Columns}
              data={table2Data}
            />
            <div className="pl-[578px] md:pl-5">
              <FAQsFooter p110of100="1 of 1" className="flex justify-between items-center gap-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

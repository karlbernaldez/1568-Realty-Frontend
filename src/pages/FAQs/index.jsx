import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import FAQsFooter from "../../components/FAQsFooter";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

export default function FAQsPage() {
  return (
    <>
      <Helmet>
        <title>1568 Realty</title>
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
                borderRadius: "4px",
                paddingLeft: "16px",
                paddingRight: "16px",
                [`&:hover, &.ps-active`]: { color: "#13593e", backgroundColor: "#ccd5d2 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "464px" } }}
            renderExpandIcon={() => (
              <Img
                src="images/img_arrow_right.svg"
                alt="arrowright_one"
                className="self-end h-[18px] w-[18px] cursor-pointer"
              />
            )}
            className="flex flex-col self-stretch w-full mb-[5px] pb-[50px] md:pb-5"
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
              <SubMenu
                icon={<Img src="images/img_material_symbol.svg" alt="materialsymbol" className="h-[28px] w-[28px]" />}
                label="Property"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={<Img src="images/img_mi_users.svg" alt="miusers_one" className="h-[28px] w-[28px]" />}
                label="Users"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <MenuItem
                icon={
                  <Img
                    src="images/img_tdesign_page_head_teal_900.svg"
                    alt="tdesignpage_one"
                    className="h-[28px] w-[28px]"
                  />
                }
                suffix={<div className="self-end h-[18px] w-[19%] rotate-[-90deg]" />}
              >
                Pages
              </MenuItem>
              <MenuItem icon={<div className="h-[14px] w-[18%]" />}>About us</MenuItem>
              <MenuItem icon={<div className="h-[14px] w-[25%]" />}>FAQs</MenuItem>
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
        <div className="flex flex-col mt-[60px] gap-8 flex-1">
          <div className="flex ml-[9px] md:ml-0">
            <div className="flex flex-col items-start gap-[3px]">
              <div className="flex">
                <div className="flex flex-col">
                  <Heading size="xl" as="h1" className="!text-gray-900">
                    <span className="text-gray-900">Pages / </span>
                    <span className="text-teal-900">FAQs</span>
                  </Heading>
                  <Heading size="xl" as="h2" className="mt-[-28px] !text-gray-900">
                    <span className="text-gray-900">Pages / </span>
                    <span className="text-teal-900">FAQs</span>
                  </Heading>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <Text size="md" as="p" className="!text-gray-500_01">
                    View and manage frequently asked questions
                  </Text>
                  <Text size="md" as="p" className="mt-[-14px] !text-gray-500_01">
                    View and manage frequently asked questions
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[515px] md:ml-0">
            <div className="flex sm:flex-col justify-end gap-2">
              <div className="h-[44px] sm:w-full border-gray-500 border border-solid bg-white-A700 flex-1 relative rounded sm:flex-none">
                <div className="flex justify-between items-center w-max h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto absolute">
                  <Text as="p" className="!text-gray-500">
                    Search
                  </Text>
                  <Img src="images/img_search.svg" alt="search_one" className="h-[15px] w-[15px]" />
                </div>
                <div className="flex justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 gap-5 p-[13px] m-auto border-gray-500 border border-solid bg-white-A700 absolute rounded">
                  <Text as="p" className="ml-2.5 md:ml-0 !text-gray-500">
                    Search
                  </Text>
                  <Img src="images/img_search.svg" alt="search_three" className="h-[15px] w-[15px] mr-1.5 md:mr-0" />
                </div>
              </div>
              <Button
                shape="round"
                leftIcon={<Img src="images/img_memoryplus.svg" alt="memory:plus" />}
                className="gap-2 font-bold min-w-[133px]"
              >
                Add FAQs
              </Button>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-between items-center gap-5 p-[13px] rounded-tl-lg rounded-tr-lg border-gray-300_01 border border-solid bg-white-A700">
                <div className="flex self-start justify-between w-[28%] ml-3.5 gap-5 md:ml-0">
                  <Text as="p" className="self-start mb-0.5">
                    #
                  </Text>
                  <Text as="p" className="self-end">
                    Questions
                  </Text>
                </div>
                <Text as="p" className="self-end">
                  Answer
                </Text>
                <Text as="p" className="self-start">
                  Action
                </Text>
              </div>
              <div className="flex flex-col gap-px rounded-bl-lg rounded-br-lg border-gray-300_01 border-l border-r border-solid bg-white-A700">
                <div className="flex sm:flex-col justify-between items-center gap-5 p-[23px] md:p-5 border-gray-300_01 border-b border-solid flex-1">
                  <Text as="p" className="ml-1 md:ml-0">
                    1
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    How do I schedule a consultation or property viewing?
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    Simply contact us through our website or give us...
                  </Text>
                  <Img src="images/img_dropdown.svg" alt="image" className="h-[32px] w-[32px]" />
                </div>
                <div className="flex sm:flex-col justify-between items-center gap-5 p-[23px] md:p-5 border-gray-300_01 border-b border-solid flex-1">
                  <Text as="p" className="ml-1 md:ml-0">
                    2
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    How do I schedule a consultation or property viewing?
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    Simply contact us through our website or give us...
                  </Text>
                  <Img src="images/img_dropdown.svg" alt="dropdown_one" className="h-[32px] w-[32px]" />
                </div>
                <div className="flex sm:flex-col justify-between items-center gap-5 p-[23px] md:p-5 border-gray-300_01 border-b border-solid flex-1">
                  <Text as="p" className="ml-1 md:ml-0">
                    3
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    How do I schedule a consultation or property viewing?
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    Simply contact us through our website or give us...
                  </Text>
                  <Img src="images/img_dropdown.svg" alt="dropdown_one" className="h-[32px] w-[32px]" />
                </div>
                <div className="flex sm:flex-col justify-between items-center gap-5 p-[23px] md:p-5 border-gray-300_01 border-b border-solid flex-1">
                  <Text as="p" className="ml-1 md:ml-0">
                    4
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    How do I schedule a consultation or property viewing?
                  </Text>
                  <Text as="p" className="w-[27%] sm:w-full !text-gray-900">
                    Simply contact us through our website or give us...
                  </Text>
                  <Img src="images/img_dropdown.svg" alt="dropdown_one" className="h-[32px] w-[32px]" />
                </div>
              </div>
            </div>
            <div className="pl-[570px] md:pl-5">
              <FAQsFooter className="flex justify-between items-center gap-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

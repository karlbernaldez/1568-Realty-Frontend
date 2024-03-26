import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

export default function LoadingScreenPage() {
  return (
    <>
      <Helmet>
        <title>Bryan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex sm:flex-col justify-between items-start w-full pr-[436px] gap-5 md:pr-5 bg-gray-100">
        <Sidebar
          width="311px !important"
          className="flex flex-col h-screen gap-10 top-0 p-6 sm:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden"
        >
          <div className="flex flex-col self-stretch mt-6 gap-[31px]">
            <div className="flex items-center gap-2">
              <Img src="images/img_logo.png" alt="logo_one" className="self-start object-cover" />
              <Heading size="xl" as="h3" className="self-end !text-gray-900_02 !font-compassserif">
                <span className="text-lime_600">1568</span>
                <span className="text-lime_600 tracking-[-3.08px]">&nbsp;</span>
                <span className="text-teal-900">Realty</span>
              </Heading>
            </div>
            <div className="flex justify-center items-center gap-[7px] p-[18px] bg-gray-900_02 rounded">
              <div className="flex items-center gap-2 flex-1">
                <Img src="images/img_ellipse_5.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                <div className="flex flex-col items-start">
                  <Text size="md" as="p" className="!text-gray-50">
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
                padding: "5px",
                backgroundColor: "#ffffff",
                color: "#668378",
                fontWeight: 700,
                fontSize: "16px",
                gap: "16px",
                borderRadius: "4px",
                [`&:hover, &.ps-active`]: { color: "#13593e", backgroundColor: "#ccd5d2 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "257px" } }}
            renderExpandIcon={() => (
              <Img
                src="images/img_arrow_right.svg"
                alt="arrowright_one"
                className="self-end h-[18px] w-[18px] cursor-pointer"
              />
            )}
            className="flex flex-col w-full mb-[5px]"
          >
            <div className="flex flex-col">
              <MenuItem
                icon={
                  <Img src="images/img_view_dashboard_outline.svg" alt="viewdashboard" className="h-[28px] w-[28px]" />
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
              <SubMenu
                icon={
                  <Img src="images/img_tdesign_page_head.svg" alt="tdesignpage_one" className="h-[28px] w-[28px]" />
                }
                label="Pages"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
            </div>
            <div className="flex">
              <MenuItem
                icon={<Img src="images/img_ic_twotone_log_out.svg" alt="ictwotonelog" className="h-[24px] w-[24px]" />}
              >
                Log out
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="h-[204px] w-[204px] relative">
          <div className="h-[204px] w-[204px] rotate-[-180deg] bg-gradient absolute rounded-[102px]" />
          <Img
            src="images/img_logo.png"
            alt="logo_three"
            className="h-[77px] w-[62%] right-[22%] bottom-0 top-0 my-auto object-cover absolute"
          />
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";

export default function MissionEditPage() {
  return (
    <>
      <div className="flex md:flex-col items-start w-full pb-10 gap-[26px] sm:pb-5 bg-gray-100">
        <Sidebar
          width="311px !important ml-[350px]"
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
            rootStyles={{ ["&>ul"]: { gap: "464px" } }}
            renderExpandIcon={() => (
              <Img
                src="images/img_arrow_right.svg"
                alt="arrowright_one"
                className="self-end h-[18px] w-[18px] cursor-pointer"
              />
            )}
            className="flex flex-col self-stretch w-full mb-6 pb-[50px] md:pb-5"
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
              <MenuItem
                icon={
                  <Img src="images/img_tdesign_page_head.svg" alt="tdesignpage_one" className="h-[28px] w-[28px]" />
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
        <div className="flex flex-col self-end w-[72%] md:w-full gap-10 md:p-5">
          <div className="flex flex-col items-start ml-[7px] gap-[3px] md:ml-0">
            <Heading size="2xl" as="h1" className="!text-gray-900">
              <span className="text-gray-900">Pages /&nbsp;</span>
              <span className="text-teal-900">About Us</span>
            </Heading>
            <Text size="xs" as="p" className="!text-gray-500">
              View and manage about us details
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <div className="shadow-sm">
              <div className="flex justify-between items-center gap-5 p-4 rounded-tl rounded-tr border-gray-300 border border-solid bg-gray-50_01">
                <Heading size="xl" as="h2" className="ml-4 md:ml-0 !text-gray-900">
                  About us
                </Heading>
                <Img
                  src="images/img_uil_edit_teal_900.svg"
                  alt="uiledit_three"
                  className="h-[24px] w-[24px] mr-4 md:mr-0"
                />
              </div>
              <div className="flex justify-center p-8 sm:p-5 rounded-bl rounded-br border-gray-300 border-l border-b border-r border-solid bg-gray-50_01">
                <Text as="p" className="w-[94%] !text-gray-900">
                  <>
                    With a team of experienced professionals that are dedicated in providing excellent service, we pride
                    ourselves on our deep understanding of the market and our commitment to our client satisfaction.
                    <br />
                    <br />
                    Over the years, we have earned a reputation for excellence, integrity, and reliability. Our clients
                    trust us to guide them through every step of the buying, or renting process, ensuring a smooth and
                    stress-free experience from start to finish. Whether it&#39;s finding the perfect home for a growing
                    family, securing an investment property, or negotiating a complex commercial deal, we are there
                    every step of the way, providing personalized attention and expert guidance.
                    <br />
                    <br />
                    With each new challenge and opportunity, we are reminded of why we do what we do – because there is
                    no greater satisfaction than helping our clients turn their real estate dreams into reality.
                    <br />
                    <br />
                    At 1568 Realty, the journey is just beginning, and we invite you to join us as we continue to set
                    new standards of excellence in the world of real estate.
                  </>
                </Text>
              </div>
            </div>
            <div className="shadow-sm">
              <div className="flex p-[17px] rounded-tl rounded-tr border-gray-300 border border-solid bg-gray-50_01">
                <Heading size="xl" as="h3" className="ml-3.5 md:ml-0 !text-gray-900">
                  Mission
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-10 p-8 sm:p-5 rounded-bl rounded-br border-gray-300 border-l border-b border-r border-solid bg-gray-50_01">
                <div className="self-stretch ml-6 p-[19px] md:ml-0 border-gray-500_01 border border-solid rounded">
                  <Text as="p" className="!text-gray-900">
                    At 1568 Realty, we empower clients to unlock their dream homes and build prosperous futures through
                    exceptional service, innovative solutions, and unwavering integrity.
                  </Text>
                </div>
                <div className="flex ml-6 gap-2 md:ml-0">
                  <Button color="gray_50_01" shape="round" className="min-w-[85px]">
                    Cancel
                  </Button>
                  <Button shape="round" className="sm:px-5 min-w-[155px]">
                    Save changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";
import logo from '../../assets/images/Logo.png'
import user from '../../assets/images/sample.png'
import edit from '../../assets/images/uil_edit.svg'
import SidebarContent from "../../components/Sidebar.jsx";

const tableData = [
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
    propertyname: "Pandi Property 3",
    status: "Sold",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Clarence Coronel",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "4",
    propertyname: "Pandi Property 4",
    status: "For Rent",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Aldrene Aguilar",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "5",
    propertyname: "Pandi Property 5",
    status: "For Rent",
    type: "Residential lot",
    address: "Bulacan",
    agent: "Paulo Regalado",
    views: "1432",
    action: "images/img_dropdown.svg",
  },
];

export default function DashboardPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("Data", {
        cell: (info) => (
          <Text size="xl" as="p" className="h-[80px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h6" className="pl-7 pr-[35px] py-3.5 sm:px-5 !text-gray-600_01">
            #
          </Heading>
        ),
        meta: { width: "79px" },
      }),
      tableColumnHelper.accessor("propertyname", {
        cell: (info) => (
          <Heading size="s" as="p" className="!text-gray-900">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3">
            Property name
          </Text>
        ),
        meta: { width: "158px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Status
          </Text>
        ),
        meta: { width: "125px" },
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3">
            Type
          </Text>
        ),
        meta: { width: "134px" },
      }),
      tableColumnHelper.accessor("address", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Address
          </Text>
        ),
        meta: { width: "117px" },
      }),
      tableColumnHelper.accessor("agent", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3">
            Agent
          </Text>
        ),
        meta: { width: "159px" },
      }),
      tableColumnHelper.accessor("views", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Views
          </Text>
        ),
        meta: { width: "71px" },
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex md:p-5">
            <Img src={info?.getValue?.()} alt="dropdown_one" className="h-[32px] w-[32px] my-4" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Action
          </Text>
        ),
        meta: { width: "63px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Real State</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col items-start w-full pb-[29px] pr-[29px] gap-[33px] sm:pb-5 sm:pr-5 bg-gray-100_01">
      <SidebarContent className="fixed" />
        <div className="flex flex-col mt-[59px] ml-[350px] mb-[21px] flex-1">
          <div className="flex flex-col">
            <Heading size="xl" as="h1" className="!text-gray-900">
              Dashboard
            </Heading>
            <Text size="md" as="p" className="mt-[5px] !text-gray-500_01">
              Welcome to 1568 Realty Dashboard
            </Text>
            <div className="flex md:flex-col mt-[19px] gap-[25px]">
              <div className="flex flex-col justify-center w-full gap-4 p-[18px] md:p-5 bg-white-A700 shadow-sm rounded">
                <div className="mt-1.5">
                  <div className="flex items-center">
                    <div className="flex flex-col flex-1">
                      <Heading as="h2" className="!text-gray-900_99 opacity-0.7">
                        Properties
                      </Heading>
                      <Heading size="3xl" as="h3" className="!text-gray-900_02 tracking-[1.00px]">
                        35
                      </Heading>
                      <Text size="md" as="p" className="!text-gray-900_99 opacity-0.7">
                        <>
                          Total number of active <br />
                          properties
                        </>
                      </Text>
                    </div>
                    <Button color="gray_900_03" size="md" shape="round" className="w-[60px] ml-[-11px]">
                      <Img src="images/img_ph_house.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex mb-[5px] gap-1">
                  <Text size="md" as="p" className="self-end !text-gray-900_04">
                    View all properties
                  </Text>
                  <Img
                    src="images/img_icon_from_tabler_io.svg"
                    alt="view_all"
                    className="self-start h-[14px] w-[14px]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center w-full gap-4 p-[18px] md:p-5 bg-white-A700 shadow-sm rounded">
                <div className="mt-1.5">
                  <div className="flex items-center">
                    <div className="flex flex-col flex-1">
                      <Heading as="h4" className="!text-gray-900_99 opacity-0.7">
                        Agents
                      </Heading>
                      <Heading size="3xl" as="h5" className="!text-gray-900_02 tracking-[1.00px]">
                        50
                      </Heading>
                      <Text size="md" as="p" className="!text-gray-900_99 opacity-0.7">
                        <>
                          Total numbers or agents
                          <br />
                          registered in system
                        </>
                      </Text>
                    </div>
                    <Button color="teal_900_01" size="md" shape="round" className="w-[60px] ml-[-11px]">
                      <Img src="images/img_icon_park_outline_peoples.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex mb-1 gap-1">
                  <Text size="md" as="p" className="self-end !text-gray-900_04">
                    View all agents
                  </Text>
                  <Img
                    src="images/img_icon_from_tabler_io.svg"
                    alt="iconfrom_one"
                    className="self-start h-[14px] w-[14px]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center w-full gap-[15px] p-[18px] md:p-5 bg-white-A700 shadow-sm rounded">
                <div className="mt-[5px]">
                  <div className="flex items-center">
                    <div className="flex flex-col flex-1">
                      <Heading as="h6" className="!text-gray-900_99 opacity-0.7">
                        Subscribers
                      </Heading>
                      <Heading size="3xl" as="h2" className="!text-gray-900_02 tracking-[1.00px]">
                        100
                      </Heading>
                      <Text size="md" as="p" className="!text-gray-900_99 opacity-0.7">
                        <>
                          Total numbers of
                          <br />
                          newsletter subscribers
                        </>
                      </Text>
                    </div>
                    <Button color="teal_600" size="md" shape="round" className="w-[60px] ml-[-11px]">
                      <Img src="images/img_icon_park_outline_peoples.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex mb-1.5 gap-1">
                  <Text size="md" as="p" className="!text-gray-900_04">
                    View all subscribers
                  </Text>
                  <Img src="images/img_icon_from_tabler_io.svg" alt="iconfrom_one" className="h-[14px] w-[14px]" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col items-center mt-[21px] gap-[22px]">
              <div className="flex flex-col items-center pb-[18px] gap-6 md:p-5 bg-white-A700 shadow-md flex-1 rounded">
                <div className="flex self-start p-4 border-black-900_1e border-b border-solid">
                  <Heading size="lg" as="h6" className="mt-1 !text-gray-900">
                    Sold Properties
                  </Heading>
                </div>
                <div className="flex flex-col items-start w-[95%] md:w-full gap-[11px] p-1.5 bg-gray-100 rounded">
                  <Heading
                    size="xs"
                    as="p"
                    className="mt-[5px] ml-[9px] md:ml-0 !text-blue_gray-600 tracking-[1.00px] uppercase"
                  >
                    Sold
                  </Heading>
                  <Heading as="h6" className="ml-[9px] md:ml-0 !text-blue_gray-900">
                    5
                  </Heading>
                </div>
                <div className="h-[257px] w-[92%] relative">
                  <div className="flex sm:flex-col justify-center items-start w-[98%] gap-2 bottom-[4%] right-0 left-0 m-auto absolute">
                    <Text size="s" as="p" className="!text-gray-700_01 !font-inter text-right">
                      0
                    </Text>
                    <div className="h-px mt-1 bg-gray-200 flex-1" />
                  </div>
                  <div className="flex flex-col items-end w-[3%] gap-3 left-0 top-0 m-auto absolute">
                    <Text size="xs" as="p" className="!text-gray-700_01 text-right">
                      100
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      90
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      80
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      70
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      60
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      50
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      40
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      30
                    </Text>
                    <Text size="xs" as="p" className="h-[11px] !text-gray-700_01 text-right">
                      20
                    </Text>
                    <Text size="xs" as="p" className="!text-gray-700_01 text-right">
                      10
                    </Text>
                  </div>
                  <div className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex sm:flex-col justify-center">
                      <div className="h-full w-px sm:w-full sm:h-px z-[1] bg-gray-200 flex-1" />
                      <div className="h-[234px] w-full ml-[-1px] sm:ml-0 relative">
                        <div className="h-full w-px ml-[87px] left-[17%] bottom-0 top-0 my-auto bg-gray-200 absolute" />
                        <div className="h-full w-px ml-[175px] left-[33%] bottom-0 top-0 my-auto bg-gray-200 absolute" />
                        <div className="justify-center h-full w-px left-0 bottom-0 right-0 top-0 m-auto bg-gray-200 absolute" />
                        <div className="h-full w-px mr-[174px] right-[33%] bottom-0 top-0 my-auto bg-gray-200 absolute" />
                        <div className="h-full w-px mr-[86px] right-[16%] bottom-0 top-0 my-auto bg-gray-200 absolute" />
                        <div className="flex flex-col w-full h-max gap-[22px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                          <div className="h-px bg-gray-200" />
                        </div>
                        <Img
                          src="images/img_line1.png"
                          alt="lineone_one"
                          className="justify-center h-[224px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                      </div>
                      <div className="h-full w-px sm:w-full sm:h-px bg-gray-200 flex-1" />
                    </div>
                    <div className="h-px mt-[-234px] z-[1] bg-gray-200" />
                    <div className="flex justify-between mt-[238px] gap-5">
                      <Text size="s" as="p" className="self-start !text-gray-700_01 text-center">
                        Jan
                      </Text>
                      <Text size="s" as="p" className="self-start !text-gray-700_01 text-center">
                        Feb
                      </Text>
                      <Text size="s" as="p" className="self-start !text-gray-700_01 text-center">
                        Mar
                      </Text>
                      <Text size="s" as="p" className="self-end !text-gray-700_01 text-center">
                        Apr
                      </Text>
                      <Text size="s" as="p" className="self-end !text-gray-700_01 text-center">
                        May
                      </Text>
                      <Text size="s" as="p" className="self-start !text-gray-700_01 text-center">
                        Jun
                      </Text>
                      <Text size="s" as="p" className="self-start h-[12px] !text-gray-700_01 text-center">
                        Jul
                      </Text>
                      <Text size="s" as="p" className="self-end !text-gray-700_01 text-center">
                        Aug
                      </Text>
                      <Text size="s" as="p" className="self-end !text-gray-700_01 text-center">
                        Sept
                      </Text>
                      <Text size="s" as="p" className="self-start !text-gray-700_01 text-center">
                        Oct
                      </Text>
                      <Text size="s" as="p" className="self-start !text-gray-700_01 text-center">
                        Nov
                      </Text>
                      <Text size="s" as="p" className="self-start !text-gray-700_01 text-center">
                        Dec
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-[32%] md:w-full pb-[15px] gap-6 md:p-5 bg-white-A700 shadow-md rounded">
                <div className="flex self-start p-4 border-gray-300_01 border-b border-solid">
                  <Heading size="lg" as="h6" className="mt-1 !text-gray-900">
                    Property types
                  </Heading>
                </div>
                <div className="flex justify-center w-[89%] md:w-full">
                  <div className="w-full p-5">
                    <div>
                      <div className="h-[191px] w-[191px] relative">
                        <div className="justify-center h-[191px] w-[191px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <CircularProgressbar
                            strokeWidth={14}
                            value={13}
                            styles={{
                              trail: { stroke: "#089860" },
                              path: { strokeLinecap: "square", transformOrigin: "center", transform: "rotate(160deg)" },
                            }}
                            className="justify-center h-[191px] w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border border-solid absolute"
                          />
                          <CircularProgressbar
                            strokeWidth={14}
                            value={16}
                            styles={{ trail: { stroke: "#089860" }, path: { strokeLinecap: "square" } }}
                            className="justify-center h-[191px] w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border border-solid absolute"
                          />
                          <CircularProgressbar
                            strokeWidth={14}
                            value={25}
                            styles={{
                              trail: { stroke: "#089860" },
                              path: { strokeLinecap: "square", transformOrigin: "center", transform: "rotate(209deg)" },
                            }}
                            className="justify-center h-[191px] w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border border-solid absolute"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <Heading size="xl" as="h4" className="h-[28px] !text-gray-900 text-center">
                            35
                          </Heading>
                          <Text size="md" as="p" className="text-center">
                            Total Property
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row sm:flex-col w-[87%] md:w-full gap-[15px]">
                  <div className="flex justify-center gap-4 flex-1">
                    <div className="flex justify-between items-start w-full pr-3 gap-5">
                      <div className="h-[14px] w-[22%] bg-gray-900_03 rounded-sm" />
                      <div className="flex flex-col items-start gap-1">
                        <Text size="md" as="p" className="text-center">
                          House and Lot
                        </Text>
                        <Text size="2xl" as="p" className="!text-gray-900 text-center">
                          <span className="text-gray-900">15 </span>
                          <span className="text-gray-600_01 text-xs">58.63%</span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between items-start w-full pr-[15px] gap-5">
                      <div className="h-[14px] w-[25%] bg-teal-900_01 rounded-sm" />
                      <div className="flex flex-col gap-1">
                        <Text size="md" as="p" className="text-center">
                          Commercial
                        </Text>
                        <Text size="2xl" as="p" className="!text-gray-900 text-center">
                          <span className="text-gray-900">10 </span>
                          <span className="text-gray-600_01 text-xs">58.63%</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 flex-1">
                    <div className="flex justify-between items-start w-full pr-[11px] gap-5">
                      <div className="h-[14px] w-[22%] bg-teal-600_01 rounded-sm" />
                      <div className="flex flex-col items-start gap-1">
                        <Text size="md" as="p" className="text-center">
                          Residential Lot
                        </Text>
                        <Text size="2xl" as="p" className="!text-gray-900 text-center">
                          <span className="text-gray-900">4 </span>
                          <span className="text-gray-600_01 text-xs">58.63%</span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between items-start w-full pr-[25px] gap-5 sm:pr-5">
                      <div className="h-[14px] w-[28%] bg-teal-300 rounded-sm" />
                      <div className="flex flex-col items-start gap-1">
                        <Text size="md" as="p" className="text-center">
                          Farm Lot
                        </Text>
                        <Text size="2xl" as="p" className="!text-gray-900 text-center">
                          <span className="text-gray-900">6 </span>
                          <span className="text-gray-600_01 text-xs">58.63%</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[27px] shadow-sm">
              <div className="flex justify-between items-center gap-5 p-[18px] rounded-tl rounded-tr border-gray-300_01 border-t border-l border-r border-solid bg-white-A700">
                <Heading size="lg" as="h6" className="self-end mt-[3px] !text-gray-900_01">
                  Featured Properties
                </Heading>
                <a href="#" className="mr-2.5 md:mr-0">
                  <Heading size="s" as="p" className="!text-gray-900_04">
                    View all
                  </Heading>
                </a>
              </div>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "border-gray-300_01 border border-solid bg-white-A700 md:flex-wrap" }}
                rowDataProps={{ className: "border-gray-300_01 border-b border-solid md:flex-col" }}
                className="w-[909px]"
                columns={tableColumns}
                data={tableData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  import React from "react";
  import { Input, Img, Heading, GoogleMap, TextArea } from "../../components";
  import EditDetailsOneImageuploader from "../../components/EditDetailsOneImageuploader";
  import Sidebar from "../../components/Sidebar";

  export default function ViewDetailsPage() {
    return (
      <>
        <div className="flex md:flex-col items-start w-full gap-[29px] bg-gray-100">
          <Sidebar className="flex flex-col w-[311px] h-screen gap-10 top-0 p-6 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden" />
          <div className="flex flex-col w-[71%] md:w-full mt-[62px] gap-8 md:p-5 ml-[350px]">
            <div className="flex items-center">
             <div className="flex items-center">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.828 6.99995L16 6.99995L16 8.99995L3.828 8.99995L9.192 14.364L7.778 15.778L-3.39987e-07 7.99995L7.778 0.221954L9.192 1.63595L3.828 6.99995Z" fill="black"/>
  </svg>
  <span className="ml-1">Back</span>
</div>

            </div>
            <div className="flex flex-col items-start ml-1 gap-[3px] md:ml-0">
              <Heading size="2xl" as="h2" className="!text-gray-900">
                <span className="text-gray-900">Property /&nbsp;</span>
                <span className="text-teal-900">Taguig Property</span>
              </Heading>
              <Heading size="s" as="h3" className="!text-gray-500">
                View and manage property list
              </Heading>
            </div>
            <div className="flex flex-col ml-1 gap-6 md:ml-0">
              <div className="shadow-sm">
                <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h2" className="ml-4 md:ml-0 !text-blue_gray-900">
                    Overview
                  </Heading>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
</svg>
                </div>
                <div className="flex flex-col items-center gap-[15px] p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="h3" className="opacity-0.6">
                        Property name
                      </Heading>
                      <Input
                        shape="round"
                        name="name"
                        placeholder={`House and Lot For Sale in Taguig City`}
                        className="self-stretch sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full gap-[3px]">
                      <Heading as="h4" className="opacity-0.6">
                        Price
                      </Heading>
                      <Input shape="round" name="price" placeholder={`45,000,000`} className="self-stretch sm:pr-5" />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="h5" className="opacity-0.6">
                        Property Type
                      </Heading>
                      <Input
                        shape="round"
                        name="house_and_lot"
                        placeholder={`House and Lot`}
                        className="self-stretch sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="h6" className="opacity-0.6">
                        Agent
                      </Heading>
                      <Input
                        shape="round"
                        name="frameforty"
                        placeholder={`Alyssa Joy Del Rosario`}
                        className="self-stretch sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                    <div className="flex flex-col items-start w-full gap-[3px]">
                      <Heading as="p" className="opacity-0.6">
                        Year Built
                      </Heading>
                      <Input shape="round" name="zipcode" placeholder={`2021`} className="self-stretch sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="p" className="opacity-0.6">
                        Land Area (sq m)
                      </Heading>
                      <Input
                        shape="round"
                        name="frameforty_one"
                        placeholder={`7,002 `}
                        className="self-stretch sm:pr-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-sm">
  <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
    <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
      Description
    </Heading>                                         
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="uil:edit">
        <path id="Vector" d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
      </g>
    </svg>
  </div>
  <div className="shadow-sm">
                  
                  <div className="p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                    <div>
                      <div className="flex flex-col items-start gap-[7px]">
                        <Heading as="p" className="opacity-0.6">
                          Description
                        </Heading>
                        <TextArea
                          shape="round"
                          name="frameforty_two"
                          placeholder={`Step back in time and experience the allure of a bygone era with this enchanting vintage house nestled in the heart of Bagumbayan, Taguig City. A perfect blend of classic elegance and modern convenience...`}
                          className="self-stretch sm:pb-5 text-gray-900 font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
              <div className="shadow-sm">
                <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
                    Property Images
                  </Heading>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
</svg>

                </div>
                <div className="justify-center gap-1.5 grid-cols-[repeat(auto-fill,_minmax(141px_,_1fr))] p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700 grid">
                 
                  <EditDetailsOneImageuploader className="flex flex-col items-center justify-center w-full gap-[7px] p-[11px] border-gray-500_01 border border-dashed bg-white-A700 rounded" />
                </div>
              </div>
              <div className="shadow-sm">
                <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
                    Property Location
                  </Heading>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
</svg>

                </div>
                <div className="flex flex-col items-center gap-[15px] p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="p" className="opacity-0.6">
                        Region
                      </Heading>
                      <Input
                        shape="round"
                        name="metro_manila"
                        placeholder={`Metro Manila`}
                        className="self-stretch sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full gap-[3px]">
                      <Heading as="p" className="opacity-0.6">
                        Province
                      </Heading>
                      <Input
                        shape="round"
                        name="metro_manila"
                        placeholder={`Metro Manila`}
                        className="self-stretch sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="p" className="opacity-0.6">
                        City
                      </Heading>
                      <Input shape="round" name="city" placeholder={`Taguig`} className="self-stretch sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="p" className="opacity-0.6">
                        Barangay
                      </Heading>
                      <Input
                        shape="round"
                        name="bagumbayan"
                        placeholder={`Bagumbayan`}
                        className="self-stretch sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4">
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <a href="#" className="opacity-0.6">
                        <Heading as="p">Street name, Buidling, House no.</Heading>
                      </a>
                      <Input shape="round" name="name" placeholder={`304`} className="self-stretch sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="p" className="opacity-0.6">
                        Zip Code
                      </Heading>
                      <Input shape="round" name="zipcode" placeholder={`3014`} className="self-stretch sm:pr-5" />
                    </div>
                  </div>
                  <Heading as="p" className="self-start opacity-0.6">
                    Map preview
                  </Heading>
                  <GoogleMap showMarker={false} className="h-[415px] w-[94%] rounded" />
                </div>
              </div>
              <div className="shadow-sm">
                <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h6" className="ml-4 md:ml-0 !text-blue_gray-900">
                    Interior Features
                  </Heading>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
</svg>

                </div>
                <div className="flex flex-col gap-[15px] p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                  <div className="flex md:flex-col justify-center ml-6 gap-4 md:ml-0">
                    <div className="flex flex-col items-start w-full gap-[3px]">
                      <Heading as="p" className="opacity-0.6">
                        Bedroom/s
                      </Heading>
                      <Input shape="round" name="frameforty" placeholder={`2`} className="self-stretch sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start w-full gap-[3px]">
                      <Heading as="p" className="opacity-0.6">
                        Bathroom/s
                      </Heading>
                      <Input shape="round" name="frameforty_four" placeholder={`2`} className="self-stretch sm:pr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-[47%] md:w-full ml-6 gap-[3px] md:ml-0">
                    <Heading as="p" className="opacity-0.6">
                      Kitchen
                    </Heading>
                    <Input shape="round" name="frameforty_five" placeholder={`2`} className="self-stretch sm:pr-5" />
                  </div>
                </div>
              </div>
              <div className="shadow-sm">
                <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h6" className="ml-4 md:ml-0 !text-blue_gray-900">
                    Exterior Features
                  </Heading>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
</svg>

                </div>
                <div className="flex flex-col gap-4 p-[31px] sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                  <div className="flex md:flex-col justify-center ml-6 gap-4 md:ml-0">
                    <div className="flex flex-col items-start w-full gap-[3px]">
                      <Heading as="p" className="opacity-0.6">
                        Garden
                      </Heading>
                      <Input shape="round" name="frameforty_six" placeholder={`2`} className="self-stretch sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start w-full gap-0.5">
                      <Heading as="p" className="opacity-0.6">
                        Swimming pool
                      </Heading>
                      <Input shape="round" name="frameforty" placeholder={`2`} className="self-stretch sm:pr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-[47%] md:w-full ml-6 gap-0.5 md:ml-0">
                    <Heading as="p" className="opacity-0.6">
                      Garage
                    </Heading>
                    <Input shape="round" name="frameforty" placeholder={`2`} className="self-stretch sm:pr-5" />
                  </div>
                </div>
              </div>
              <div className="shadow-sm">
                <div className="flex justify-between items-center gap-5 p-[15px] rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h6" className="self-end ml-4 md:ml-0 !text-blue_gray-900">
                    Appliances
                  </Heading>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
</svg>

                </div>
                <div className="flex flex-col items-center gap-4 p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4 py-2.5">
                    <Input shape="round" name="air" placeholder={`Air conditioning`} className="w-full sm:pr-5" />
                    <Input
                      shape="round"
                      name="washing_machine"
                      placeholder={`Washing machine`}
                      className="w-full sm:pr-5"
                    />
                  </div>
                  <div className="flex w-[94%] md:w-full py-2.5">
                    <Input shape="round" name="dryer" placeholder={`Dryer`} className="w-[49%] sm:pr-5" />
                  </div>
                </div>
              </div>
              <div className="shadow-sm">
                <div className="flex justify-between items-center gap-5 p-4 rounded-tl-lg rounded-tr-lg border-gray-300 border border-solid bg-white-A700">
                  <Heading size="xl" as="h6" className="ml-4 md:ml-0 !text-blue_gray-900">
                    Utilities
                  </Heading>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4804 20 12.7347 20 12.9999V18.9999C20 19.2652 19.8946 19.5195 19.7071 19.707C19.5196 19.8946 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8946 4.29289 19.707C4.10536 19.5195 4 19.2652 4 18.9999V4.99994C4 4.73472 4.10536 4.48037 4.29289 4.29283C4.48043 4.1053 4.73478 3.99994 5 3.99994H11C11.2652 3.99994 11.5196 3.89458 11.7071 3.70705C11.8946 3.51951 12 3.26516 12 2.99994C12 2.73472 11.8946 2.48037 11.7071 2.29283C11.5196 2.1053 11.2652 1.99994 11 1.99994H5C4.20435 1.99994 3.44129 2.31601 2.87868 2.87862C2.31607 3.44123 2 4.20429 2 4.99994V18.9999C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8946 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM6 12.7599V16.9999C6 17.2652 6.10536 17.5195 6.29289 17.707C6.48043 17.8946 6.73478 17.9999 7 17.9999H11.24C11.3716 18.0007 11.5021 17.9755 11.6239 17.9257C11.7457 17.8759 11.8566 17.8026 11.95 17.7099L18.87 10.7799L21.71 7.99994C21.8037 7.90698 21.8781 7.79637 21.9289 7.67452C21.9797 7.55266 22.0058 7.42195 22.0058 7.28994C22.0058 7.15793 21.9797 7.02722 21.9289 6.90536C21.8781 6.7835 21.8037 6.6729 21.71 6.57994L17.47 2.28994C17.377 2.19621 17.2664 2.12182 17.1446 2.07105C17.0227 2.02028 16.892 1.99414 16.76 1.99414C16.628 1.99414 16.4973 2.02028 16.3754 2.07105C16.2536 2.12182 16.143 2.19621 16.05 2.28994L13.23 5.11994L6.29 12.0499C6.19732 12.1434 6.12399 12.2542 6.07423 12.376C6.02446 12.4979 5.99924 12.6283 6 12.7599ZM16.76 4.40994L19.59 7.23994L18.17 8.65994L15.34 5.82994L16.76 4.40994ZM8 13.1699L13.93 7.23994L16.76 10.0699L10.83 15.9999H8V13.1699Z" fill="#668378"/>
</svg>

                </div>
                <div className="flex flex-col items-center gap-4 p-8 sm:p-5 rounded-bl-lg rounded-br-lg border-gray-300 border-l border-b border-r border-solid bg-white-A700">
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4 py-2.5">
                    <Input shape="round" name="water_source" placeholder={`Water source`} className="w-full sm:pr-5" />
                    <Input
                      shape="round"
                      name="internet_access"
                      placeholder={`Internet Access`}
                      className="w-full sm:pr-5"
                    />
                  </div>
                  <div className="flex md:flex-col justify-center w-[94%] md:w-full gap-4 py-2.5">
                    <Input shape="round" name="security" placeholder={`Security`} className="w-full sm:pr-5" />
                    <Input shape="round" name="gas" placeholder={`Gas`} className="w-full sm:pr-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

import React from "react";
import logo from '../assets/images/Logo.png';
import user from '../assets/images/sample.png';
import edit from '../assets/images/uil_edit.svg';
import mi_user from '../assets/images/mi_users.svg';
import { useState } from 'react';

const SidebarContent = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

  return (
    <div className="w-80 h-[830px] px-6 py-12 bg-[#FFFFFF] shadow flex-col justify-between items-start fixed top-0 left-0">
      <div className="flex-col justify-start items-start gap-10 flex">
        <div className="h-36 flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <img className="w-10 h-8" src={logo} alt="logo" />
            <div>
              <span className="text-[#C6AA58] text-3xl font-bold font-compassserif">1568</span>
              <span className="text-orange-300 text-3xl font-bold font-compassserif">&nbsp;</span>
              <span className="text-green-800 text-3xl font-bold font-compassserif">Realty</span>
            </div>
          </div>
          <div className="inline-flex w-full flex-row items-start rounded bg-green-900 py-5 px-6 text-left font-normal leading-normal tracking-0px text-neutral-50" style={{ backgroundColor: "#01311F" }}>
            <div className="flex h-10 flex-grow items-center justify-center gap-x-12" >
              <div className="flex w-36 items-center justify-center gap-x-2 self-stretch" >
                <img
                  className="h-10 w-10"
                  src={user}
                />
                <div className="flex flex-col items-start justify-center">
                  <div className="font-helvetica flex items-center self-stretch text-base leading-normal w-[100px]">
                    Nina Velasco
                  </div>
                  <div className="font-helvetica_light text-xs leading-[normal]">
                    Admin
                  </div>
                </div>
              </div>
              <img
                className="h-6 w-6"
                src={edit}
              />
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-0 flex">
          <a href="/dashboard">
            <div className="w-64 p-2 bg-gray-300 rounded justify-start items-center gap-0 mb-[10px] inline-flex">
              <div className="grow shrink basis-0 h-7 justify-start items-center flex ml-[-15px]">
                <div className="w-7 h-7 relative"></div>
                <div className="w-28 h-90 text-green-800 text-base font-bold font-helvetica flex items-center gap-[0.7rem]"> 
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                    <g id="view-dashboard-outline">
                      <path id="Vector" d="M22.1667 5.83333V8.16667H17.5V5.83333H22.1667ZM10.5 5.83333V12.8333H5.83333V5.83333H10.5ZM22.1667 15.1667V22.1667H17.5V15.1667H22.1667ZM10.5 19.8333V22.1667H5.83333V19.8333H10.5ZM24.5 3.5H15.1667V10.5H24.5V3.5ZM12.8333 3.5H3.5V15.1667H12.8333V3.5ZM24.5 12.8333H15.1667V24.5H24.5V12.8333ZM12.8333 17.5H3.5V24.5H12.8333V17.5Z" fill='#14593F'/> 
                    </g>
                  </svg>
                  Dashboard 
                </div>
              </div>
            </div>
          </a>
        <div className="relative">
          <div className="hover:bg-gray-300 w-64 p-2 rounded justify-start items-center gap-1.5 inline-flex sidebar-dropdown mb-[10px]">
              <button className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex ml-[-30px]" onClick={() => toggleDropdown(1)}>
                  <div className="w-7 h-7 relative"></div>
                  <div className="w-28 h-90 text-green-1 text-base font-bold font-helvetica flex items-center gap-[3px]" style={{ opacity: 0.7 }}>
                      <div className="ml-[-4px] mr-[8px]">
                      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 mb-[3px]">
                            <g id="view-dashboard-outline">
                                <path id="Vector" d="M5.27273 24V13.5833L3.30909 15.1111L2 13.3333L14 4L26 13.3333L24.6909 15.0833L22.7273 13.5833V24H5.27273ZM7.45455 21.7778H20.5455V11.8889L14 6.80556L7.45455 11.8889V21.7778ZM9.63636 17.3333C9.32727 17.3333 9.06836 17.2267 8.85964 17.0133C8.65091 16.8 8.54618 16.5363 8.54545 16.2222C8.54545 15.9074 8.65018 15.6437 8.85964 15.4311C9.06909 15.2185 9.328 15.1119 9.63636 15.1111C9.94545 15.1111 10.2047 15.2178 10.4142 15.4311C10.6236 15.6444 10.728 15.9081 10.7273 16.2222C10.7273 16.537 10.6225 16.8011 10.4131 17.0144C10.2036 17.2278 9.94473 17.3341 9.63636 17.3333ZM14 17.3333C13.6909 17.3333 13.432 17.2267 13.2233 17.0133C13.0145 16.8 12.9098 16.5363 12.9091 16.2222C12.9091 15.9074 13.0138 15.6437 13.2233 15.4311C13.4327 15.2185 13.6916 15.1119 14 15.1111C14.3091 15.1111 14.5684 15.2178 14.7778 15.4311C14.9873 15.6444 15.0916 15.9081 15.0909 16.2222C15.0909 16.537 14.9862 16.8011 14.7767 17.0144C14.5673 17.2278 14.3084 17.3341 14 17.3333ZM18.3636 17.3333C18.0545 17.3333 17.7956 17.2267 17.5869 17.0133C17.3782 16.8 17.2735 16.5363 17.2727 16.2222C17.2727 15.9074 17.3775 15.6437 17.5869 15.4311C17.7964 15.2185 18.0553 15.1119 18.3636 15.1111C18.6727 15.1111 18.932 15.2178 19.1415 15.4311C19.3509 15.6444 19.4553 15.9081 19.4545 16.2222C19.4545 16.537 19.3498 16.8011 19.1404 17.0144C18.9309 17.2278 18.672 17.3341 18.3636 17.3333Z" fill="#668378"/> 
                            </g>
                       </svg>
                      </div>
                      Property
                      <div className="ml-[115px]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${activeDropdown === 1 ? 'rotate-90' : ''}`}>
                            <g id="ooui:next-ltr">
                                <path id="Vector" d="M6.29998 0.899902L5.03998 2.2499L11.7 8.9999L5.03998 15.7499L6.29998 17.0999L14.4 8.9999L6.29998 0.899902Z" fill="#668378"/>
                            </g>
                        </svg>
                      </div>
                  </div>
              </button>
              <div className={`dropdown-content absolute py-2 px-4 w-52 top-10 left-0 z-10 ${activeDropdown === 1 ? '' : 'hidden'}`}>
              <a href="/active-listing">
                <button className="hover:bg-gray-100 focus:outline-none w-full text-left">
                  <div class="h-10 px-6 py-3 left-0 top-[-2px] absolute bg-white rounded justify-start items-center flex">
                    <div class="h-4 justify-start items-center flex">
                      <div class="w-3.5 h-3.5 bg-green-800 rounded-full"></div>
                      <div className="text-green-800 ml-[10px] text-sm font-normal font-['Helvetica'] hover:text-green-600">Active Listings</div>
                    </div>
                  </div>
                </button>
              </a>
              <a href="/property">
                <button className="hover:bg-gray-100 focus:outline-none w-full text-left">
                  <div class="h-10 px-6 py-3 left-0 top-[30px] absolute bg-white rounded justify-start items-center flex">
                    <div class="h-4 justify-start items-center flex">
                      <div className="group flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-neutral-300 rounded-full group-hover:bg-green-800"></div>
                        <div className="text-neutral-400 ml-[1px] text-sm font-normal font-helvetica group-hover:text-green-600">Property Types</div>
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
        <div className={`hover:bg-gray-300 w-64 p-2 rounded justify-start items-center gap-1.5 inline-flex sidebar-dropdown mb-[10px] ${activeDropdown === 1 ? 'mt-[50px]' : ''}`}>
          <button className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex ml-[-30px]" onClick={() => toggleDropdown(2)}>
                  <div className="w-7 h-7 relative"></div>
                  <div className="w-28 h-90 text-green-1 text-base font-bold font-helvetica flex items-center gap-[3px]" style={{ opacity: 0.7 }}>
                      <div className="ml-[-4px] mr-[8px]">
                      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 mb-[3px]">
                            <g id="view-dashboard-outline">
                                <path id="Vector" d="M11.6666 6C10.6058 6 9.58834 6.42143 8.8382 7.17157C8.08805 7.92172 7.66663 8.93913 7.66663 10C7.66663 11.0609 8.08805 12.0783 8.8382 12.8284C9.58834 13.5786 10.6058 14 11.6666 14C12.7275 14 13.7449 13.5786 14.4951 12.8284C15.2452 12.0783 15.6666 11.0609 15.6666 10C15.6666 8.93913 15.2452 7.92172 14.4951 7.17157C13.7449 6.42143 12.7275 6 11.6666 6ZM5.66663 10C5.66663 8.4087 6.29877 6.88258 7.42399 5.75736C8.5492 4.63214 10.0753 4 11.6666 4C13.2579 4 14.784 4.63214 15.9093 5.75736C17.0345 6.88258 17.6666 8.4087 17.6666 10C17.6666 11.5913 17.0345 13.1174 15.9093 14.2426C14.784 15.3679 13.2579 16 11.6666 16C10.0753 16 8.5492 15.3679 7.42399 14.2426C6.29877 13.1174 5.66663 11.5913 5.66663 10ZM18.4946 5.757C18.5875 5.66402 18.6978 5.59026 18.8192 5.53994C18.9406 5.48962 19.0707 5.46371 19.2021 5.46371C19.3335 5.46371 19.4637 5.48962 19.5851 5.53994C19.7065 5.59026 19.8168 5.66402 19.9096 5.757C20.4669 6.31416 20.9089 6.97565 21.2105 7.70366C21.5121 8.43168 21.6673 9.21198 21.6673 10C21.6673 10.788 21.5121 11.5683 21.2105 12.2963C20.9089 13.0244 20.4669 13.6858 19.9096 14.243C19.8167 14.3359 19.7064 14.4096 19.585 14.4599C19.4636 14.5102 19.3335 14.5361 19.2021 14.5361C19.0707 14.5361 18.9406 14.5102 18.8192 14.4599C18.6978 14.4096 18.5875 14.3359 18.4946 14.243C18.4017 14.1501 18.328 14.0398 18.2777 13.9184C18.2275 13.797 18.2016 13.6669 18.2016 13.5355C18.2016 13.4041 18.2275 13.274 18.2777 13.1526C18.328 13.0312 18.4017 12.9209 18.4946 12.828C19.2445 12.0779 19.6658 11.0607 19.6658 10C19.6658 8.93934 19.2445 7.92211 18.4946 7.172C18.4016 7.07913 18.3279 6.96884 18.2776 6.84744C18.2272 6.72604 18.2013 6.59592 18.2013 6.4645C18.2013 6.33308 18.2272 6.20296 18.2776 6.08156C18.3279 5.96016 18.4016 5.84987 18.4946 5.757ZM19.1966 18.757C19.2611 18.5 19.4249 18.279 19.6522 18.1427C19.8794 18.0064 20.1515 17.9659 20.4086 18.03C21.7366 18.362 22.5776 19.21 23.0606 20.178C23.5286 21.113 23.6666 22.158 23.6666 23C23.6666 23.2652 23.5613 23.5196 23.3737 23.7071C23.1862 23.8946 22.9318 24 22.6666 24C22.4014 24 22.1471 23.8946 21.9595 23.7071C21.772 23.5196 21.6666 23.2652 21.6666 23C21.6666 22.343 21.5546 21.637 21.2726 21.072C21.0056 20.539 20.5956 20.138 19.9236 19.97C19.6666 19.9055 19.4457 19.7417 19.3093 19.5144C19.173 19.2872 19.1325 19.0141 19.1966 18.757ZM8.16663 20C6.90663 20 5.66663 21.213 5.66663 23C5.66663 23.2652 5.56127 23.5196 5.37373 23.7071C5.1862 23.8946 4.93184 24 4.66663 24C4.40141 24 4.14706 23.8946 3.95952 23.7071C3.77198 23.5196 3.66663 23.2652 3.66663 23C3.66663 20.368 5.55963 18 8.16663 18H15.1666C17.7736 18 19.6666 20.368 19.6666 23C19.6666 23.2652 19.5613 23.5196 19.3737 23.7071C19.1862 23.8946 18.9318 24 18.6666 24C18.4014 24 18.1471 23.8946 17.9595 23.7071C17.772 23.5196 17.6666 23.2652 17.6666 23C17.6666 21.213 16.4266 20 15.1666 20H8.16663Z" fill="#668378"/> 
                            </g>
                       </svg>
                      </div>
                      Users
                      <div className="ml-[135px]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${activeDropdown === 2 ? 'rotate-90' : ''}`}>
                            <g id="ooui:next-ltr">
                                <path id="Vector" d="M6.29998 0.899902L5.03998 2.2499L11.7 8.9999L5.03998 15.7499L6.29998 17.0999L14.4 8.9999L6.29998 0.899902Z" fill="#668378"/>
                            </g>
                        </svg>
                      </div>
                  </div>
              </button>
              <div className={`dropdown-content absolute py-2 px-4 z-10 w-52 top-10 left-0 ${activeDropdown === 2 ? '' : 'hidden'}`}>
                <button className="hover:bg-gray-100 focus:outline-none w-full text-left">
                  <div class="h-10 px-6 py-3 left-0 top-[-2px] absolute bg-white rounded justify-start items-center flex">
                    <div class="h-4 justify-start items-center flex">
                      <div class="w-3.5 h-3.5 bg-green-800 rounded-full"></div>
                      <div className="text-green-800 ml-[10px] text-sm font-normal font-['Helvetica'] hover:text-green-600">Admin</div>
                    </div>
                  </div>
                </button>
                <button className="hover:bg-gray-100 focus:outline-none w-full text-left">
                <div class="h-10 px-6 py-3 left-0 top-[28px] absolute bg-white rounded justify-start items-center flex">
                  <div class="h-4 justify-start items-center flex">
                    <div className="group flex items-center gap-2">
                      <div className="w-3.5 h-3.5 bg-neutral-300 rounded-full group-hover:bg-green-800"></div>
                      <div className="text-neutral-400 ml-[1px] text-sm font-normal font-helvetica group-hover:text-green-600">Agents</div>
                    </div>
                  </div>
                </div>
                </button>
                <button className="hover:bg-gray-100 focus:outline-none w-full text-left">
                <div class="h-20 px-6 py-3 left-0 top-[40px] absolute bg-white rounded justify-start items-center flex">
                  <div class="h-4 justify-start items-center flex">
                    <div className="group flex items-center gap-2">
                      <div className="w-3.5 h-3.5 bg-neutral-300 rounded-full group-hover:bg-green-800"></div>
                      <div className="text-neutral-400 ml-[1px] text-sm font-normal font-helvetica group-hover:text-green-600">Subscribers</div>
                    </div>
                  </div>
                </div>
                </button>
              </div>
          </div>
        </div>
        <div className="relative">
        <div className={`hover:bg-gray-300 w-64 p-2 rounded justify-start items-center gap-1.5 inline-flex sidebar-dropdown mb-[10px] ${activeDropdown === 2 ? 'mt-[75px]' : ''}`}>
          <button className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex ml-[-30px]" onClick={() => toggleDropdown(3)}>
                  <div className="w-7 h-7 relative"></div>
                  <div className="w-28 h-90 text-green-1 text-base font-bold font-helvetica flex items-center gap-[3px]" style={{ opacity: 0.7 }}>
                      <div className="ml-[-4px] mr-[8px]">
                      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 mb-[3px]">
                            <g id="tdesign:page-head">
                                <path id="Vector" d="M23 12.5V24.5H21V14.5H7V24.5H5V12.5H23ZM23 4.5V10.5H5V4.5H23ZM21 6.5H7V8.5H21V6.5Z" fill="#668378"/> 
                            </g>
                       </svg>
                      </div>
                      Pages
                      <div className="ml-[132px]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${activeDropdown === 3 ? 'rotate-90' : ''}`}>
                            <g id="ooui:next-ltr">
                                <path id="Vector" d="M6.29998 0.899902L5.03998 2.2499L11.7 8.9999L5.03998 15.7499L6.29998 17.0999L14.4 8.9999L6.29998 0.899902Z" fill="#668378"/>
                            </g>
                        </svg>
                      </div>
                  </div>
              </button>
              <div className={`dropdown-content absolute py-2 px-4 w-52 top-10 left-0 ${activeDropdown === 3 ? '' : 'hidden'}`}>
      <button className="hover:bg-gray-100 focus:outline-none w-full text-left">
        <a href="/aboutus">
          <div className="h-10 px-6 py-3 left-0 top-0 absolute bg-white rounded justify-start items-center flex">
            <div className="h-4 justify-start items-center flex">
              <div className="w-3.5 h-3.5 bg-green-800 rounded-full"></div>
              <div className="text-green-800 ml-[10px] text-sm font-normal font-['Helvetica'] hover:text-green-600">About us</div>
            </div>
          </div>
        </a>
      </button>
      <button className="hover:bg-gray-100 focus:outline-none w-full text-left">
        <a href="/faqs">
          <div className="h-10 px-6 py-3 left-0 top-[30px] absolute bg-white rounded justify-start items-center flex">
            <div className="h-4 justify-start items-center flex">
              <div className="group flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-neutral-300 rounded-full group-hover:bg-green-800"></div>
                <div className="text-neutral-400 ml-[10px] text-sm font-normal font-helvetica group-hover:text-green-600">FAQs</div>
              </div>
            </div>
          </div>
        </a>
      </button>
    </div>
          </div>
        </div>
        <div className="hover:bg-gray-300 w-64 p-2 rounded justify-start items-center gap-1.5 inline-flex sidebar-dropdown mb-[50px] mt-[520px]" style={{ position: 'fixed' }}>
            <button className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex ml-[-30px]"> 
                <div className="w-7 h-7 relative"></div>
                <div className="w-28 h-90 text-green-1 text-base font-bold font-helvetica flex items-center gap-[3px]" style={{ opacity: 0.7 }}>
                    <div className="mt-[5px] ml-[-1px] mr-[4px]"> 
                        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 mb-[3px]">
                            <g id="view-dashboard-outline">
                                <path id="Vector" d="M6 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H15V4H6V20H15V18H17V20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z" fill="#668378"/> 
                                <path id="Vector_2" d="M16.09 15.59L17.5 17L22.5 12L17.5 7L16.09 8.41L18.67 11H9V13H18.67L16.09 15.59Z" fill="#668378"/>
                            </g>
                       </svg>
                    </div>
                    Logout
                </div>
            </button>
            <div className="dropdown-content hidden"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;

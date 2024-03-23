import React from "react";
import logo from '../assets/images/Logo.png';
import user from '../assets/images/sample.png';
import edit from '../assets/images/uil_edit.svg';
import { useState } from 'react';

const SidebarContent = () => {
    const SidebarDropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
    }
  return (
    <div className="w-80 h-450 px-6 py-12 bg-white shadow flex-col justify-between items-start fixed top-0 left-0">
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
        <div className="w-64 p-2 bg-gray-300 rounded justify-start items-center gap-0 mb-[10px] inline-flex">
            <div className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex">
                <div className="w-7 h-7 relative"></div>
                    <div className="w-28 h-90 text-green-800 text-base font-bold font-helvetica flex items-center gap-2"> 
                        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                            <g id="view-dashboard-outline">
                                <path id="Vector" d="M22.1667 5.83333V8.16667H17.5V5.83333H22.1667ZM10.5 5.83333V12.8333H5.83333V5.83333H10.5ZM22.1667 15.1667V22.1667H17.5V15.1667H22.1667ZM10.5 19.8333V22.1667H5.83333V19.8333H10.5ZM24.5 3.5H15.1667V10.5H24.5V3.5ZM12.8333 3.5H3.5V15.1667H12.8333V3.5ZM24.5 12.8333H15.1667V24.5H24.5V12.8333ZM12.8333 17.5H3.5V24.5H12.8333V17.5Z" fill='#14593F'/> 
                            </g>
                        </svg>
                    Dashboard 
                </div>
            </div>
        </div>
        <div className="hover:bg-gray-300 w-64 p-2 rounded justify-start items-center gap-0 inline-flex sidebar-dropdown"> 
            <button className="grow shrink basis-0 h-8 justify-start items-center gap-4 flex"> 
                <div className="w-7 h-7 relative"></div>
                <div className="w-28 h-90 text-green-1 text-base font-bold font-helvetica flex items-center gap-[3px]" style={{ opacity: 0.7 }}>
                    <div className="ml-[-1px] mr-[4px]"> 
                        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600 mb-[3px]">
                            <g id="view-dashboard-outline">
                                <path id="Vector" d="M5.27273 24V13.5833L3.30909 15.1111L2 13.3333L14 4L26 13.3333L24.6909 15.0833L22.7273 13.5833V24H5.27273ZM7.45455 21.7778H20.5455V11.8889L14 6.80556L7.45455 11.8889V21.7778ZM9.63636 17.3333C9.32727 17.3333 9.06836 17.2267 8.85964 17.0133C8.65091 16.8 8.54618 16.5363 8.54545 16.2222C8.54545 15.9074 8.65018 15.6437 8.85964 15.4311C9.06909 15.2185 9.328 15.1119 9.63636 15.1111C9.94545 15.1111 10.2047 15.2178 10.4142 15.4311C10.6236 15.6444 10.728 15.9081 10.7273 16.2222C10.7273 16.537 10.6225 16.8011 10.4131 17.0144C10.2036 17.2278 9.94473 17.3341 9.63636 17.3333ZM14 17.3333C13.6909 17.3333 13.432 17.2267 13.2233 17.0133C13.0145 16.8 12.9098 16.5363 12.9091 16.2222C12.9091 15.9074 13.0138 15.6437 13.2233 15.4311C13.4327 15.2185 13.6916 15.1119 14 15.1111C14.3091 15.1111 14.5684 15.2178 14.7778 15.4311C14.9873 15.6444 15.0916 15.9081 15.0909 16.2222C15.0909 16.537 14.9862 16.8011 14.7767 17.0144C14.5673 17.2278 14.3084 17.3341 14 17.3333ZM18.3636 17.3333C18.0545 17.3333 17.7956 17.2267 17.5869 17.0133C17.3782 16.8 17.2735 16.5363 17.2727 16.2222C17.2727 15.9074 17.3775 15.6437 17.5869 15.4311C17.7964 15.2185 18.0553 15.1119 18.3636 15.1111C18.6727 15.1111 18.932 15.2178 19.1415 15.4311C19.3509 15.6444 19.4553 15.9081 19.4545 16.2222C19.4545 16.537 19.3498 16.8011 19.1404 17.0144C18.9309 17.2278 18.672 17.3341 18.3636 17.3333Z" fill="#668378"/> 
                            </g>
                       </svg>
                    </div>
                    Property
                    <div className="ml-[75px]">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ooui:next-ltr">
                                <path id="Vector" d="M6.29998 0.899902L5.03998 2.2499L11.7 8.9999L5.03998 15.7499L6.29998 17.0999L14.4 8.9999L6.29998 0.899902Z" fill="#668378"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </button>
            <div className="dropdown-content hidden"></div>
        </div>
          <div className="w-64 p-2 bg-white rounded justify-between items-center inline-flex">
            <div className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex">
              <div className="w-7 h-7 relative"></div>
              <div className="justify-start items-center gap-2 flex">
                <div className="w-28 h-3 text-gray-500 text-base font-bold font-helvetica">Users</div>
              </div>
            </div>
            <div className="w-4 h-4 relative"></div>
          </div>
          <div className="w-64 p-2 bg-white rounded justify-between items-center inline-flex">
            <div className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex">
              <div className="w-7 h-7 relative"></div>
              <div className="justify-start items-center gap-2 flex">
                <div className="w-28 h-3 text-gray-500 text-base font-bold font-helvetica">Pages</div>
              </div>
            </div>
            <div className="w-4 h-4 relative"></div>
          </div>
          <div class="w-64 h-14 p-30 bg-white rounded justify-start items-center gap-4 inline-flex mt-[320px]">
          <div class="grow shrink basis-0 h-6 justify-start items-center gap-4 flex">
              <div class="w-6 h-6 relative"></div>
              <div class="text-gray-500 text-base font-bold font-['Helvetica']">Log out</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;

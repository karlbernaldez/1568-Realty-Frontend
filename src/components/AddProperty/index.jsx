import React, { useState, useEffect } from 'react';
import MapPreview from '../MapPreview.jsx';
import FormInput from '../FormInput';
import AddButton from '../AddButton';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const [address, setAddress] = useState('');
    const [cityProvince, setCityProvince] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const [isExpanded, setIsExpanded] = useState(false);
    const [featureName, setFeatureName] = useState('');
    const [number, setNumber] = useState('');
    const [features, setFeatures] = useState([]);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleAddClick = () => {
        // Create a new feature object with the current featureName and number
        const newFeature = { featureName, number };

        // Add the new feature to the features array
        setFeatures([...features, newFeature]);

        // Clear the form inputs after adding
        setFeatureName('');
        setNumber('');
    };

    return (
        <div style={{ position: 'fixed', top: 0, right: '1px', transform: 'translate(0%, 0)', zIndex: 10, width: 608, maxHeight: '100vh', boxShadow: '6px 6px 54px rgba(0, 0, 0, 0.05)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', overflowY: 'auto' }}>
            <div style={{ width: '100%', height: '100%', background: '#F5F6FA' }}>

                <button className="mt-[50px] ml-[15px] h-10 px-8 py-2.5 justify-start items-center gap-4 inline-flex" onClick={onClose}>
                    {/* Arrow Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="ep:back">
                            <path id="Vector" d="M5.25 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.25C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25Z" fill="#2B2D42" />
                            <path id="Vector_2" d="M5.56062 12L11.7811 18.219C11.922 18.3598 12.0011 18.5508 12.0011 18.75C12.0011 18.9491 11.922 19.1401 11.7811 19.281C11.6403 19.4218 11.4493 19.5009 11.2501 19.5009C11.051 19.5009 10.86 19.4218 10.7191 19.281L3.96912 12.531C3.89928 12.4613 3.84386 12.3785 3.80605 12.2874C3.76824 12.1963 3.74878 12.0986 3.74878 12C3.74878 11.9013 3.76824 11.8036 3.80605 11.7125C3.84386 11.6214 3.89928 11.5386 3.96912 11.469L10.7191 4.71897C10.86 4.57814 11.051 4.49902 11.2501 4.49902C11.4493 4.49902 11.6403 4.57814 11.7811 4.71897C11.922 4.8598 12.0011 5.05081 12.0011 5.24997C12.0011 5.44913 11.922 5.64014 11.7811 5.78097L5.56062 12Z" fill="#2B2D42" />
                        </g>
                    </svg>
                    {/* Back Text */}
                    <div className="text-gray-600">Back</div>
                </button>

                <div className='ml-[50px] mt-[30px]'>
                    <div className="text-slate-800 text-3xl font-bold font-['Helvetica']">Add property</div>
                    <div className="text-neutral-400 text-xs font-normal font-['Helvetica']">Fill out the fields below to add property</div>
                </div>

                <div className="ml-[60px] mt-[25px] mx-auto w-[487px] h-10 px-8 py-2.5 bg-gray-50 rounded-tl rounded-tr border border-zinc-200">
                    <div className="mt-[-5px]">
                        <div className="text-zinc-900 text-lg font-bold font-['Helvetica']">Overview</div>
                    </div>
                </div>
                <div className="ml-[60.5px] w-[487px] px-8 py-5 bg-gray-50 rounded-bl rounded-br border-l border-r border-b border-zinc-200 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="mt-[-5px] self-stretch h-16 flex-col justify-between items-start flex">
                        <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Property name</div>
                        <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                            <input
                                type="text"
                                className="text-zinc-900 text-sm font-normal font-['Helvetica'] bg-transparent border-none outline-none w-full"
                                placeholder="Enter Your Property name"
                            />
                        </div>
                    </div>
                    <div className="self-stretch h-16 flex-col justify-between items-start flex">
                        <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Price</div>
                        <div className="self-stretch h-11 pr-4 py-1.5 bg-white border border-neutral-400 rounded justify-start items-center gap-2.5 inline-flex">
                            <div className="relative w-[350px]">
                                <input
                                    type="number"
                                    onInput={(event) => {
                                        event.target.value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                    }}
                                    className="ml-[60px] w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                    placeholder="Property price"
                                />
                            </div>
                            <div className="ml-[-360px] w-12 h-11 px-2.5 py-1.5 bg-white rounded-tl rounded-bl border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-zinc-900 text-sm font-normal font-['Helvetica']">PHP</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                        <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Property type</div>
                        <div className="relative self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-between items-center inline-flex">
                            <select className="absolute inset-0 w-full h-full px-2.5 py-1.5 bg-white border-none outline-none appearance-none text-zinc-900 text-sm font-normal font-['Helvetica']">
                                <option value="" disabled selected>Select property type</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="condo">Condo</option>
                                {/* Add more options as needed */}
                            </select>
                            <div className="absolute inset-0 flex justify-end items-center pr-2.5 pointer-events-none">
                                <svg className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.65018 7.34985C6.94691 7.05312 7.4237 7.05312 7.72043 7.34985L10.0002 9.62961L12.2799 7.34985C12.5766 7.05312 13.0534 7.05312 13.3502 7.34985C13.6469 7.64658 13.6469 8.12337 13.3502 8.4201L10.3502 11.4201C10.0534 11.7168 9.5766 11.7168 9.27987 11.4201L6.27987 8.4201C5.98314 8.12337 5.98314 7.64658 6.27987 7.34985C6.5766 7.05312 7.0534 7.05312 7.35013 7.34985L7.65018 7.64985L7.65018 7.64985L7.95023 7.34985L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                        <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Agent (optional)</div>
                        <div className="relative self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-between items-center inline-flex">
                            <select className="absolute inset-0 w-full h-full px-2.5 py-1.5 bg-white border-none outline-none appearance-none text-zinc-900 text-sm font-normal font-['Helvetica']">
                                <option value="" disabled selected>Select agent</option>
                                <option value="agent1">Agent 1</option>
                                <option value="agent2">Agent 2</option>
                                <option value="agent3">Agent 3</option>
                                {/* Add more options as needed */}
                            </select>
                            <div className="absolute inset-0 flex justify-end items-center pr-2.5 pointer-events-none">
                                <svg className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.65018 7.34985C6.94691 7.05312 7.4237 7.05312 7.72043 7.34985L10.0002 9.62961L12.2799 7.34985C12.5766 7.05312 13.0534 7.05312 13.3502 7.34985C13.6469 7.64658 13.6469 8.12337 13.3502 8.4201L10.3502 11.4201C10.0534 11.7168 9.5766 11.7168 9.27987 11.4201L6.27987 8.4201C5.98314 8.12337 5.98314 7.64658 6.27987 7.34985C6.5766 7.05312 7.0534 7.05312 7.35013 7.34985L7.65018 7.64985L7.65018 7.64985L7.95023 7.34985L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498L7.65018 7.0498Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Year built</div>
                            <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                <input
                                    type="text"
                                    onInput={(event) => {
                                        event.target.value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                    }}
                                    className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                    placeholder="Year built"
                                />
                            </div>
                        </div>
                        <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Land Area (sq m)</div>
                            <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                <input
                                    type="text"
                                    onInput={(event) => {
                                        event.target.value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                    }}
                                    className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                    placeholder="Land Area (sq m)"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Bedroom/s</div>
                            <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                <input
                                    type="text"
                                    onInput={(event) => {
                                        event.target.value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                    }}
                                    className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                    placeholder="Bedroom/s"
                                />
                            </div>
                        </div>
                        <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Bathroom/s</div>
                            <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                <input
                                    type="text"
                                    onInput={(event) => {
                                        event.target.value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                    }}
                                    className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                    placeholder="Bathroom/s"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[32px] mx-auto w-[487px] h-auto px-8 bg-gray-50 rounded border border-zinc-200">
                    <div className="mt-[4px] border-b border-zinc-200 ">
                        <div className="text-zinc-900 text-lg font-bold font-['Helvetica']">Description</div>
                    </div>
                    <div className="w-full h-auto px-0 pt-4 pb-7 bg-gray-50 flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch h-36 flex-col justify-start items-start gap-2 flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Include a short description about the property</div>
                            <div className="self-stretch grow shrink basis-0">
                                <textarea
                                    className="w-full h-24 px-2.5 py-1.5 bg-white border border-neutral-400 rounded outline-none resize-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                    placeholder="Description"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[32px] mx-auto w-[487px] h-auto px-8 bg-gray-50 rounded border border-zinc-200">
                    <div className="mt-4 border-b border-zinc-200">
                        <div className="text-zinc-900 text-lg font-bold font-['Helvetica']">Property Images</div>
                    </div>

                    <div className="w-full h-auto px-0 pt-4 pb-7 bg-gray-50 flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch h-36 flex-col justify-start items-start gap-2 flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Upload property photos</div>
                            <div
                                className="w-full h-full p-4 bg-white rounded-lg border border-neutral-400 flex-col justify-center items-center"
                                style={{ borderStyle: 'dashed' }}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
                                <label htmlFor="file-upload">
                                    <div className="self-stretch h-30 flex-col justify-center items-center gap-2 flex cursor-pointer">
                                        <svg width="40px" height="40px" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
                                            <g id="material-symbols:add-photo-alternate-outline">
                                                <path
                                                    id="Vector"
                                                    d="M8.83333 35.5C7.91667 35.5 7.13222 35.1739 6.48 34.5217C5.82778 33.8694 5.50111 33.0844 5.5 32.1667V8.83333C5.5 7.91667 5.82667 7.13222 6.48 6.48C7.13333 5.82778 7.91778 5.50111 8.83333 5.5H23.8333V8.83333H8.83333V32.1667H32.1667V17.1667H35.5V32.1667C35.5 33.0833 35.1739 33.8683 34.5217 34.5217C33.8694 35.175 33.0844 35.5011 32.1667 35.5H8.83333ZM28.8333 15.5V12.1667H25.5V8.83333H28.8333V5.5H32.1667V8.83333H35.5V12.1667H32.1667V15.5H28.8333ZM10.5 28.8333H30.5L24.25 20.5L19.25 27.1667L15.5 22.1667L10.5 28.8333Z"
                                                    fill="#A2A2A2"
                                                />
                                            </g>
                                        </svg>
                                        <div className="mt-[-50px] w-10 h-10 relative"></div>
                                        <div className="self-stretch text-center">
                                            <span className="text-zinc-500 text-sm font-normal font-['Helvetica']">Drop your image here, or </span>
                                            <span className="text-emerald-600 text-sm font-bold font-['Helvetica']">Browse</span>
                                        </div>
                                        <div className="opacity-60 text-zinc-900 text-xs font-normal font-['Helvetica']">Supports: JPEG, PNG</div>
                                    </div>
                                </label>

                            </div>
                            {previewUrl && (
                                <img src={previewUrl} alt="Preview" className="mt-4 w-20 h-20 rounded-lg object-cover" />
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-[32px] mx-auto w-[487px] h-auto px-8 bg-gray-50 rounded border border-zinc-200">
                    <div className="mt-4 border-b border-zinc-200">
                        <div className="text-zinc-900 text-lg font-bold font-['Helvetica']">Property Location</div>
                    </div>

                    <div className="ml-[-32px] w-96 h-120 px-8 pt-4 pb-7 bg-gray-50 rounded-bl border-zinc-200 flex-col justify-start items-start gap-4 inline-flex">
                        <form onSubmit={handleSubmit}>
                            <div className="self-stretch justify-start items-start gap-4 inline-flex">
                                <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                                    <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Address</div>
                                    <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                            placeholder="Address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                                    <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">City/Province</div>
                                    <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                            placeholder="City/Province"
                                            value={cityProvince}
                                            onChange={(e) => setCityProvince(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch justify-start items-start gap-4 inline-flex">
                                <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                                    <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Country</div>
                                    <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                            placeholder="Country"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 h-16 flex-col justify-between items-start inline-flex">
                                    <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Zip Code</div>
                                    <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                            placeholder="Zip Code"
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[16px] opacity-60 text-zinc-900 text-sm font-normal font-['Helvetica']">Map Preview</div>
                            <div className="self-stretch justify-center items-center mt-[8px]">
                                <MapPreview address={address} cityProvince={cityProvince} country={country} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-[32px] mx-auto w-[487px] h-auto px-8 bg-gray-50 rounded border border-zinc-200">
                    <div className="mt-4 border-b border-zinc-200">
                        <div className="text-zinc-900 text-lg font-bold font-['Helvetica']">Interior Features</div>
                    </div>

                    <div className={`w-96 ${isExpanded ? 'h-186' : 'h-56'} px-8 pt-4 pb-7 bg-gray-50 flex-col justify-start items-start gap-4 inline-flex`}>
                        <div className="ml-[-30px] self-stretch h-16 flex-col justify-between items-start flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Bedroom/s</div>
                            <div className="self-stretch h-11 pr-4 py-1.5 bg-white border border-neutral-400 rounded justify-start items-center gap-2.5 inline-flex relative w-[400px]">
                                <div className="relative w-full">
                                    <input
                                        type="number"
                                        onInput={(event) => {
                                            event.target.value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                        }}
                                        className="ml-[5px] w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                        placeholder="0"
                                    />
                                </div>
                                <svg className="absolute ml-[405px]" width="20" height="20" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M1.08341 15.4167C1.08341 15.9029 1.27657 16.3692 1.62039 16.713C1.9642 17.0568 2.43052 17.25 2.91675 17.25H10.2501C10.7363 17.25 11.2026 17.0568 11.5464 16.713C11.8903 16.3692 12.0834 15.9029 12.0834 15.4167V4.41667H1.08341V15.4167ZM2.91675 6.25H10.2501V15.4167H2.91675V6.25ZM9.79175 1.66667L8.87508 0.75H4.29175L3.37508 1.66667H0.166748V3.5H13.0001V1.66667H9.79175Z" fill="#D90429" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-[-30px] self-stretch h-16 flex-col justify-between items-start flex">
                            <div className="opacity-60 text-zinc-500 text-sm font-normal font-['Helvetica']">Bathroom/s</div>
                            <div className="self-stretch h-11 pr-4 py-1.5 bg-white border border-neutral-400 rounded justify-start items-center gap-2.5 inline-flex relative w-[400px]">
                                <div className="relative w-full">
                                    <input
                                        type="number"
                                        onInput={(event) => {
                                            event.target.value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                        }}
                                        className="ml-[5px] w-full h-full px-2.5 py-1.5 bg-white border-none outline-none text-zinc-900 text-sm font-normal font-['Helvetica']"
                                        placeholder="0"
                                    />
                                </div>
                                <svg className="absolute ml-[405px]" width="20" height="20" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M1.08341 15.4167C1.08341 15.9029 1.27657 16.3692 1.62039 16.713C1.9642 17.0568 2.43052 17.25 2.91675 17.25H10.2501C10.7363 17.25 11.2026 17.0568 11.5464 16.713C11.8903 16.3692 12.0834 15.9029 12.0834 15.4167V4.41667H1.08341V15.4167ZM2.91675 6.25H10.2501V15.4167H2.91675V6.25ZM9.79175 1.66667L8.87508 0.75H4.29175L3.37508 1.66667H0.166748V3.5H13.0001V1.66667H9.79175Z" fill="#D90429" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            {isExpanded && (
                                <div className="ml-[-20px] mb-[15px] w-full h-36 flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="opacity-60 text-zinc-900 text-sm font-normal font-['Helvetica']">Not Specified</div>
                                    <div className="w-96 justify-start items-center gap-2 inline-flex">
                                        <div className="w-96 h-32 pl-2.5 pr-4 py-2.5 bg-white rounded border border-slate-300 flex-col justify-start items-start gap-2.5 inline-flex">
                                            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-end gap-2 flex">
                                                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                                                        <div className="opacity-60 text-zinc-900 text-xs font-normal font-['Helvetica']">Interior Feature name</div>
                                                        <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-slate-300 justify-start items-center gap-2.5 inline-flex">
                                                            <input type="text" className="text-zinc-900 text-sm font-normal font-['Helvetica']" placeholder="Enter Feature Name" />
                                                        </div>
                                                    </div>
                                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                                                        <div className="opacity-60 text-zinc-900 text-xs font-normal font-['Helvetica']">Number</div>
                                                        <div className="self-stretch h-11 pl-2.5 pr-4 py-1.5 bg-white rounded border border-slate-300 justify-between items-center inline-flex">
                                                            <input type="number" className="text-zinc-900 text-sm font-normal font-['Helvetica']" placeholder="Enter Number" />
                                                            <div className="h-11 flex-col justify-center items-end inline-flex">
                                                                <div className="w-6 h-6 relative origin-top-left -rotate-180" />
                                                                <div className="w-6 h-6 relative" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <AddButton onClick={handleAddClick} />
                                                    <div className="flex gap-4">
                                                        <FormInput label="Interior Feature Name" value={featureName} onChange={(e) => setFeatureName(e.target.value)} />
                                                        <FormInput label="Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="ml-[-25px] mt-[-5px] justify-start items-center gap-2 inline-flex">
                                <div onClick={toggleExpansion} className="text-green-800 text-base font-bold font-['Helvetica'] cursor-pointer">
                                    + Add property features
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Modal;

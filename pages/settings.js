import React, { useState } from 'react';
import userPic from "../assets/images/user.png"
import { FaCamera } from "react-icons/fa";

    const settings = () => {
        const [profilePic, setProfilePic] = useState(null);

        const handleFileChange = (event) => {
            const file = event.target.files[0];
            if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(file);
            }
        };
        return(
            <div className='w-full py-20 px-10'>
                <div class="w-6/12 box-shadow rounded-lg p-10">
                    <div className="max-w-full bg-white">
                        <form>
                            <div className="flex  mb-6 relative">
                                <div className="w-[130px] h-[130px] bg-gray-200 rounded-full relative flex items-center justify-center rounded-full">
                                {profilePic ? (
                                    <img src={profilePic} alt="Profile" className="object-cover w-full h-full rounded-full" />
                                ) : (
                                    <img src={userPic.src} alt="Profile" className="object-cover w-full h-full rounded-full"/>
                                )}
                                <input
                                    type="file"
                                    id="profilePicInput"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <div
                                    className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full cursor-pointer"
                                    onClick={() => document.getElementById('profilePicInput').click()}
                                >
                                    <span className="text-white text-md">
                                        <FaCamera />
                                    </span>
                                </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-8">PERSONAL INFORMATION</h2>
                            <div className="mb-4 flex">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 w-3/12 flex items-center">Full Name*</label>
                                <input type="text" id="fullName" className="mt-1 block w-9/12 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Full Name" />
                            </div>
                            <div className="mb-4 flex">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 w-3/12 flex items-center">Email Address*</label>
                                <input type="email" id="email" className="mt-1 block w-9/12 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Email Address" />
                            </div>
                            <div className="mb-4 flex">
                                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 w-3/12 flex items-center">Contact Number*</label>
                                <input type="tel" id="contactNumber" className="mt-1 block w-9/12 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter Contact Number" />
                            </div>
                            <div className="mb-4 flex">
                                <label className="block text-sm font-medium text-gray-700 w-3/12 flex items-center">Gender*</label>
                                <div className="flex items-center mt-2 w-9/12">
                                    <input type="radio" id="male" name="gender" value="male" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                                    <label htmlFor="male" className="ml-2 block text-sm text-gray-700">Male</label>
                                    <input type="radio" id="female" name="gender" value="female" className="ml-4 focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300" />
                                    <label htmlFor="female" className="ml-2 block text-sm text-gray-700">Female</label>
                                    <input type="radio" id="other" name="gender" value="other" className="ml-4 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                                    <label htmlFor="other" className="ml-2 block text-sm text-gray-700">Other</label>
                                </div>
                            </div>
                            <div className="mb-6 flex">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 w-3/12 flex items-center">Enter Your Password*</label>
                                <input type="password" id="password" className="mt-1 block w-9/12 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="***************" />
                            </div>
                            <div className='flex'>
                                <button type="submit" className="w-3/12 m-auto py-3 px-4 bg-[#223575] text-white font-medium rounded-md hover:bg-[#304CAC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    export default settings
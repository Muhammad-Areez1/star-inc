import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menuItems from './MenuItems';
import sideBarLogo from '../assets/images/sidebarlogo.png';
import { useRouter } from 'next/router';
import logout from '../assets/images/icons/logout.png';

export default function Sidebar({ isOpen }) {
    const router = useRouter();

    const handleLogout = async () => {
        document.cookie = 'jToken=expired; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        router.push('/')
    }

    return (
        <>
            {isOpen &&
                <aside className="w-24 md:w-2/12 bg-cover bg-right py-5 space-y-10 shadow-lg bg-[#fff]">
                    <div className='flex justify-center'>
                        <Image src={sideBarLogo} alt="SideBar Image" width={207} height={99} priority={true} className='w-[207px]' />
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-1">
                            {
                                menuItems.map(({ url, title, id, icon }) => (
                                    <li key={id} className={`${router.route === url ? 'sideBarActive' : 'md:bg-colorThemeSecondary md:bg-opacity-70 hover:md:bg-red-100 md:backdrop-blur-lg'} w-full flex items-center justify-center md:justify-start transition-all ease-in-out duration-200 sideBarli relative`}>
                                        <Link href={url} className='w-full flex items-center md:p-4 gap-1'>
                                            <div className='flex items-center w-12 h-12 m-auto md:m-0'>
                                                <div className={`flex items-center justify-center h-12 w-10 bg-transparent rounded-lg p-2`}>
                                                    <Image src={icon} alt="SideBar Icons" width={40} height={40} priority className='w-full h-auto' />
                                                </div>
                                            </div>
                                            <span className='hidden md:block text-base lg:text-m  font-normal text-[#5E5E5E] uppercase !leading-tight '>{title}</span>
                                        </Link>
                                    </li>
                                ))
                            }

                            {/* logout */}
                            <li onClick={handleLogout} className={`w-full flex items-center justify-center md:justify-start md:bg-colorThemeSecondary md:bg-opacity-70 hover:md:bg-red-100 md:backdrop-blur-lg cursor-pointer transition-all ease-in-out duration-200 sideBarli relative`}>
                                <div className='w-full flex items-center md:p-4 gap-1'>
                                    <div className='flex items-center w-12 h-12 m-auto md:m-0'>
                                        <div className={`flex items-center justify-center h-12 w-10 bg-transparent rounded-lg p-2`}>
                                            <Image src={logout} alt="Logout Icons" width={40} height={40} priority className='w-full h-auto' />
                                        </div>
                                    </div>
                                    <span className='hidden md:block text-base lg:text-m  font-normal text-[#5E5E5E] uppercase !leading-tight '>Logout</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </aside>
            }
        </>
    )
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menuItems from './MenuItems';
import sideBarLogo from '../assets/images/sidebarlogo.png';
import { useRouter } from 'next/router';

export default function Sidebar({ isOpen }) {
    const router = useRouter();

    return (
        <>
            {isOpen &&
                <aside className="w-24 md:w-2/12 bg-cover bg-right py-5 space-y-10 shadow-lg bg-[#fff]">
                    <div className='flex justify-center'>
                        <Image src={sideBarLogo} alt="SideBar Image" width={207} height={99} priority={true} className='w-[207px]' />
                    </div>
                    <nav>
                        <ul className="flex flex-col">
                            {menuItems.map(({ url, title, id, icon }) => (
                                <li key={id} className={`${router.route === url ? 'sideBarActive' : 'md:bg-colorThemeSecondary md:bg-opacity-70 hover:md:bg-red-200 md:backdrop-blur-lg'} w-full flex items-center justify-center md:justify-start hover:shadow-xl transition-all ease-in-out duration-200 sideBarli relative`}>
                                    <Link href={url} className='w-full flex items-center md:p-4 gap-1'>
                                        <div className='flex items-center w-12 h-12 m-auto md:m-0'>
                                            <div className={`flex items-center justify-center h-12 w-10 bg-transparent rounded-lg p-2`}>
                                                <Image src={icon} alt="SideBar Icons" width={40} height={40} priority className='w-full h-auto' />
                                            </div>
                                        </div>
                                        <span className='hidden md:block text-base lg:text-m  font-normal text-[#5E5E5E] uppercase !leading-tight '>{title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            }
        </>
    )
}
import { useEffect, useState } from 'react'
// import BasicBreadcrumbs from './Breadcrumbs';
// import Logout from './Logout';
import { FaBars } from 'react-icons/fa';
import { FaBell } from "react-icons/fa";



const Header = ({ toggleSidebar }) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        (function getUsername() {
            const username = localStorage.getItem('username');
            username && setUsername(username);
        })();
    }, [username])

    return (
        <header className='flex justify-between items-center'>
            <div className="flex items-center space-x-3 justify-end">
                {/* <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} /> */}
                <span className='text-gray-700 text-2xl'>
                    <h2>gg</h2>
                </span>
            </div>
            <div className='flex justify-end  items-center space-x-2'>
                <FaBell className='text-xl' />
            </div>
        </header>
    )
}

export default Header
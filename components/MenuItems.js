import homeIcon from '../assets/images/icons/dashboard.png';
import contentIcon from '../assets/images/icons/chat.png';
import userManagement from '../assets/images/icons/user.png';
import archive from '../assets/images/icons/archive.png';
import settings from '../assets/images/icons/settings.png';
import statistics from '../assets/images/icons/statistics.png';
import logout from '../assets/images/icons/logout.png';



export default [
    {
        id: 1,
        url: '/dashboard',
        title: 'Dashboard',
        icon: homeIcon,
    },
    {
        id: 2,
        url: '/conversations',
        title: 'conversations',
        icon: contentIcon,
    },
    {
        id: 3,
        url: '/starsUsers',
        title: 'STARS Users',
        icon: userManagement,
    },
    {
        id: 4,
        url: '/archive',
        title: 'Archive',
        icon: archive,
    },
    {
        id: 5,
        url: '/statistics',
        title: 'Statistics',
        icon: statistics
    },
    {
        id: 6,
        url: '/settings',
        title: 'Settings',
        icon: settings
    },
    {
        id: 7,
        url: '/login',
        title: 'Logout',
        icon: logout
    }

];
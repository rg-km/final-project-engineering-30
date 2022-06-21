import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Dashboard',
        path: 'src/pages/admin/Dashboard.js',
        icon: <MdIcons.MdDashboard />,
        cName: 'nav-text',
    },
    {
        title: 'Room',
        path: 'src/pages/admin/Room.js',
        icon: <AiIcons.AiFillHome />,
        
        cName: 'nav-text',
    },
    {
        title: 'Report',
        path: 'src/pages/admin/Reservations.js',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
]
    

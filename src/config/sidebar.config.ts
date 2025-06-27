import { FaBook, FaHome, FaWpforms } from 'react-icons/fa';
import { PiNumberOne, PiNumberTwo } from 'react-icons/pi';
import { TbApi, TbCode } from 'react-icons/tb';
import { SidebarLinkConfig } from '@/layouts/Shell/Sidebar/SidebarLink/types';

export const sidebarConfig: SidebarLinkConfig[] = [
    { type: 'link', label: 'Dashboard', icon: FaHome, link: '/' },
    {
        type: 'menu',
        label: 'Page Collection',
        icon: FaBook,
        link: '/page-collection',
        initiallyOpened: true,
        links: [
            { label: 'Page 1', link: '/page-collection/page-1', icon: PiNumberOne },
            { label: 'Page 2', link: '/page-collection/page-2', icon: PiNumberTwo },
        ],
    },
    { type: 'link', label: 'Form Example', icon: FaWpforms, link: '/form-example' },
    { type: 'link', label: 'API Example', icon: TbApi, link: '/api-example' },
    { type: 'link', label: 'Wasm Example', icon: TbCode, link: '/wasm-example' },
];

import { Link, useLocation } from 'react-router-dom';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import React from 'react';

interface MenuLinkProps {
    LinkClass?: string; // Optional CSS class for the link
    NavigationClass?: string; // Optional CSS class for the navigation menu item
    URL: string; // The URL path for the link
    Text: string; // The text to display for the link
}

const MenuLink: React.FC<MenuLinkProps> = ({ LinkClass, NavigationClass, URL, Text }) => {
    const { pathname } = useLocation(); // Get the current path from React Router

    return (
        <NavigationMenuItem
            className={`${NavigationClass} m-0 ${
                URL === pathname ? 'bg-sky-500' : ''
            }`}
        >
            <Link
                to={URL}
                className={`${LinkClass} ${
                    URL === pathname
                        ? 'bg-sky-500 border-sky-500'
                        : 'border-blue-50'
                } text-white hover:text-white block border-r px-8 py-4 text-lg focus:outline-0 focus:shadow-none`}
            >
                {Text}
            </Link>
        </NavigationMenuItem>
    );
};

export default MenuLink;
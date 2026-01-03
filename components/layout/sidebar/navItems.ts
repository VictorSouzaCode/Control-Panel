// data/config

import { 
    Home,
    Users,
    Settings,
    Package,
    LogOut
} from "lucide-react";

import { ItemsType } from "@/lib/types/itemsType";


export const mainNav:ItemsType = [
    { 
        title: 'Overview', 
        href: '/dashboard', 
        icon: Home
    },
    { 
        title: 'Customers', 
        href: '/customers', 
        icon: Users
    },
    { 
        title: 'Orders', 
        href: '/orders',
        icon: Package
    },
    { 
        title: 'Settings', 
        href: '/settings', 
        icon: Settings 
    },
    {
        title: 'LogOut',
        href: '/login',
        icon: LogOut
    }
]


export const footerNav:ItemsType = [
    { 
        title: 'Settings', 
        href: '/settings', 
        icon: Settings 
    },
    {
        title: 'LogOut',
        href: '/login',
        icon: LogOut
    }

]
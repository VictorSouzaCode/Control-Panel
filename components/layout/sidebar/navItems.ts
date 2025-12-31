// data/config

import { 
    Home,
    Users,
    Settings,
    Package
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
        href: '/dashboard/customers', 
        icon: Users
    },
    { 
        title: 'Orders', 
        href: '/dashboard/orders',
        icon: Package
    },
]

export const secondaryNav:ItemsType = [
    { title: 'Settings', href: '/dashboard/settings', icon: Settings }
]
import { NavItem } from "./models/NavItem";
import About from "./pages/About";
import Home from "./pages/Home";

export const mainNavItems: NavItem[] = [
    {
        path: '/home',
        component: Home,
        label: 'Home',
    },
    {
        path: '/about',
        component: About,
        label: 'About',
    }
];
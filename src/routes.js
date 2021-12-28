import { Navigate } from "react-router-dom";
import { 
    HOME_ROUTE, 
    ABOUT_ROUTE, 
    WARRANTY_ROUTE, 
    PROTECTION_ROUTE, 
    CONTACTS_ROUTE, 
    LEGAL_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";

import Home from './pages/Home';
import About from './pages/About';
import Warranty from './pages/Warranty';
import Protection from './pages/Protection';
import Contacts from './pages/Contacts';
import Legal from './pages/Legal'
import Auth from './pages/Auth'

export const authRoutes = [

];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: ABOUT_ROUTE,
        Component: <About/>
    },
    {
        path: WARRANTY_ROUTE,
        Component: <Warranty/>
    },
    {
        path: PROTECTION_ROUTE,
        Component: <Protection/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>
    },
    {
        path: LEGAL_ROUTE,
        Component: <Legal/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: "*",
        Component: <Navigate to="/" />
    },

];
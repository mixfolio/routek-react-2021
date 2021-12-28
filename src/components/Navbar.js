import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/routek-logo-white.svg';
import logoSmall from '../assets/images/r-logo.svg';

const Navbar = ({visible, setVisible}) => {
    const [profile, setProfile] = useState(false);
    function profileToggle() {
        setProfile(!profile)
    }
    return (
        <nav className="navbar">
        <div className="wrapper">
            <div className="flex items-center justify-between h-18">

                {/* Buttons section */}
                <div className="lg:hidden">
                    <button onClick={() => setVisible(!visible)} type="button" className="inline-flex items-center justify-center p-2">
                        {visible 
                            ? 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg className="block h-6 w-6 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>}
                        
                    </button>
                </div>
                {/* Main nav section */}
                <div className="flex-1 flex items-center justify-center lg:justify-start">
                    <div className="logos">
                        <Link to="/">
                            <img className='sm:hidden' src={logoSmall} alt="small-logo" />
                            <img className='hidden sm:block' src={logo} width="192" height="72" alt="Компания Routek"/>
                        </Link>
                    </div>
                    <div className="main-nav hidden lg:block lg:ml-8">
                        <ul className="flex space-x-4">
                            <li>
                                <NavLink to="/about" className="font-light hover:text-white">О нас</NavLink>
                            </li>
                            <li>
                                <NavLink to="/warranty" className="font-light hover:text-white">Гарантия качества</NavLink>
                            </li>
                            <li>
                                <NavLink to="/protection" className="font-light hover:text-white">Защита IP</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts" className="font-light hover:text-white">Контакты</NavLink>
                            </li>
                            <li>
                                <NavLink to="/legal" className="font-light hover:text-white">Правовая информация</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* End Main nav section */}

                {/* Profile section */}
                <div className="ml-4 relative">
                    <div>
                        <button onClick={() => profileToggle()} type="button" className="flex rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 hover:text-white" viewBox="0 0 24 24" fill="none"  stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.59233 19.0938C6.15706 17.6441 9.05393 16.8844 12 16.8889C15.0556 16.8889 17.9241 17.6894 20.4077 19.0938M15.6667 9.55556C15.6667 10.528 15.2804 11.4606 14.5927 12.1483C13.9051 12.8359 12.9725 13.2222 12 13.2222C11.0275 13.2222 10.0949 12.8359 9.40727 12.1483C8.71964 11.4606 8.33333 10.528 8.33333 9.55556C8.33333 8.58309 8.71964 7.65046 9.40727 6.96283C10.0949 6.2752 11.0275 5.88889 12 5.88889C12.9725 5.88889 13.9051 6.2752 14.5927 6.96283C15.2804 7.65046 15.6667 8.58309 15.6667 9.55556ZM23 12C23 13.4445 22.7155 14.8749 22.1627 16.2095C21.6099 17.5441 20.7996 18.7567 19.7782 19.7782C18.7567 20.7996 17.5441 21.6099 16.2095 22.1627C14.8749 22.7155 13.4445 23 12 23C10.5555 23 9.12506 22.7155 7.79048 22.1627C6.4559 21.6099 5.24327 20.7996 4.22183 19.7782C3.20038 18.7567 2.39013 17.5441 1.83733 16.2095C1.28452 14.8749 1 13.4445 1 12C1 9.08262 2.15893 6.28473 4.22183 4.22183C6.28473 2.15893 9.08262 1 12 1C14.9174 1 17.7153 2.15893 19.7782 4.22183C21.8411 6.28473 23 9.08262 23 12Z"/>
                            </svg>
                        
                            {/* <img className="h-10 w-10 rounded-full" src="./img/ava_am4.jpg" alt="am"/> */}
                        </button>
                    </div>
                    <div className={profile ? "absolute right-0 mt-2 rounded-md py-1 shadow-lg bg-white"
                        : "hidden absolute right-0 mt-2 rounded-md py-1 shadow-lg bg-white"}>
                        <Link onClick={() => profileToggle()} to="/registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-200">Зарегистироваться</Link>
                        <Link onClick={() => profileToggle()} to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-200">Войти</Link>
                    </div>
                    
                </div>
            </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={visible ? "lg:hidden" : "hidden lg:hidden"}>
            <ul className="px-2 pt-2 pb-3 space-y-1">
                <li>
                    <NavLink onClick={() => setVisible(false)} to="/about" className="bg-neutral-900 px-3 py-2 rounded-md block font-light hover:text-white hover:bg-neutral-800">О нас</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setVisible(false)} to="/warranty" className="bg-neutral-900 px-3 py-2 rounded-md block font-light hover:text-white hover:bg-neutral-800">Гарантия качества</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setVisible(false)} to="/protection" className="bg-neutral-900 px-3 py-2 rounded-md block font-light hover:text-white hover:bg-neutral-800">Защита IP</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setVisible(false)} to="/contacts" className="bg-neutral-900 px-3 py-2 rounded-md block font-light hover:text-white hover:bg-neutral-800">Контакты</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setVisible(false)} to="/legal" className="bg-neutral-900 px-3 py-2 rounded-md block font-light hover:text-white hover:bg-neutral-800">Правовая информация</NavLink>
                </li>
            </ul>
        </div>

    </nav>
    )
}

export default Navbar

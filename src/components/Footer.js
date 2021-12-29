import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/routek-logo-white.svg';
import facebook from "../assets/images/facebook-ico.svg"
import telegram from "../assets/images/telegram-ico.svg"
import youtube from "../assets/images/youtube-ico.svg"
import linkedin from "../assets/images/linkedin-ico.svg"


const Footer = () => {
    return (
        <footer className="py-10 md:py-16 text-white bg-black">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-wrap space-y-4 justify-between">
                <div className="w-fit">
                    <Link to="/">
                        <img className="logo__img" src={logo} width="191" height="71"
                            alt="Компания Routek"/>
                    </Link>
                </div>

                <div className="w-48 text-neutral-400 font-light">
                    <p className="text-sm">Москва, ул. 1905 года, д.7с1</p>
                    <p className="text-sm mt-4">info@routek.com</p>
                    <p className="text-sm mt-4">+7 (495) 374-82-46</p>
                    <p  className="text-sm mt-4">© 2021 Routek</p>
                </div>

                <ul className="w-48 text-sm font-light text-neutral-400">
                    <li className="font-bold">О нас</li>
                    <li className="mt-4">
                        <Link className="hover:text-primary" to="/about">О нас</Link>
                    </li>
                    <li className="mt-4">
                        <Link className="hover:text-primary" to="/warranty">Гарантии качества</Link>
                    </li>
                    <li className="mt-4">
                        <Link className="hover:text-primary" to="/protection">Защита IP</Link>
                    </li>
                    <li className="mt-4">
                        <Link className="hover:text-primary" to="/contacts">Контакты</Link>
                    </li>
                </ul>

                <ul className="w-48 text-sm font-light text-neutral-400">
                    <li className="font-bold">Для пользователей</li>
                    <li className="mt-4">
                        <Link className="hover:text-primary" to="#">Личный кабинет</Link>
                    </li>
                    <li className="mt-4">
                        <Link className="hover:text-primary" to="#">Связаться с нами по почте</Link>
                    </li>
                    <li className="mt-4">
                        <Link className="hover:text-primary" to="#">Позвонить нам</Link>
                    </li>
                    <ul className="flex mt-4 space-x-4">
                        <li>
                            <Link to="#"
                                className="inline-flex cursor-pointer border border-neutral-400 rounded-md hover:border-white">
                                <img src={facebook} alt="facebook"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#"
                                className="inline-flex cursor-pointer border border-neutral-400 rounded-md hover:border-white">
                                <img src={telegram} alt="telegram"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="inline-flex cursor-pointer border border-neutral-400 rounded-md hover:border-white">
                                <img src={youtube} alt="youtube"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#"
                                className="inline-flex cursor-pointer border border-gray-400 rounded-md hover:border-white">
                                <img src={linkedin} alt="linkedin"/>
                            </Link>
                        </li>
                    </ul>
                </ul>

                <div className="w-48 text-sm font-light text-neutral-400">
                    <Link to="#" className="inline-block text-center font-medium cursor-pointer border border-neutral-400 text-basic rounded-md py-2 px-4 hover:text-blue-500 hover:border-blue-500">подписать
                        NDA</Link>
                    <p className="mt-4">SO 9001:2015</p>
                    <p className="mt-4">ГОСТ РВ 0015-002-2015</p>
                    <p className="mt-4">ГОСТ Р 58876-2020</p>
                    <p className="mt-4">ГОСТ ISO 13485:2017</p>
                </div>

            </div>

        </div>

    </footer>
    )
}

export default Footer

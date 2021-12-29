import React from 'react';
import Hero from "../components/Hero";
import { heroContacts } from '../data/heroData';
import mapImage from '../assets/images/map.jpg'

import markerIcon from '../assets/images/marker-ico.svg';
import phoneIcon from '../assets/images/phone-ico.svg';
import mailIcon from '../assets/images/mail-ico.svg';

const Contacts = () => {
   
    return (
        <>
            <Hero image={heroContacts.image} titleSpan={heroContacts.titleSpan} title={heroContacts.title} subtitle={heroContacts.subtitle} />
            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div>
                        <h2 className="h2-title text-center">Свяжитесь с нами</h2>
                        <div className="grid lg:grid-cols-2 gap-6 mt-12">
                            <div>
                                <img className="w-full" src={mapImage} alt="map" />
                            </div>
                            <div>
                                <form action="" method="post">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6">
                                            <label htmlFor="name" className="block uppercase font-bold">Имя</label>
                                            <input id="name" type="text" name="name"
                                                className="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Введите имя" required />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email" className="block uppercase font-bold">E-mail</label>
                                            <input id="email" type="email" name="email"
                                                className="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Введите e-mail" required />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="phone" className="block uppercase font-bold">Телефон</label>
                                            <input id="phone" type="text" name="phone"
                                                className="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="+7 (_ _ _) - _ _ _ - _ _ - _ _" required />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="message" className="block uppercase font-bold">E-mail</label>
                                            <textarea id="message" name="message" rows="3"
                                                className="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Введите сообщение">

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="text-center mt-12">
                                        <button type="submit" className="btn-xl">Написать</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-16">
                        <h2 className="h2-title text-center">Контакты</h2>
                        <div className="mt-12 grid md:grid-cols-3 gap-6">
                            <div className="flex items-center">
                                <img className="w-8 h-8 md:w-10 md:h-10 mr-4" src={markerIcon} alt="marker" />
                                <p>Москва, ул. 1905 года, д.7с1</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-8 h-8 md:w-10 md:h-10 mr-4" src={mailIcon} alt="mail" />
                                <p>info@routek.tech</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-8 h-8 md:w-10 md:h-10 mr-4" src={phoneIcon} alt="phone" />
                                <p>+7(495) 374-82-46</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contacts

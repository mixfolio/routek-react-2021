import React from 'react';
import Hero from "../components/Hero";

import bg from '../assets/images/hero-bg/contacts-hero-bg.jpg'
import markerIcon from '../assets/images/marker-ico.svg';
import phoneIcon from '../assets/images/phone-ico.svg';
import mailIcon from '../assets/images/mail-ico.svg';

const Contacts = () => {
    const heroTitleSpan = 'Вместе открываем новые возможности '
    const heroTitle = 'цифрового производства'
    const heroSubtitle = 'Мы будем рады пообщаться и ответить на ваши вопросы! <br/> Введите свой номер телефона, тему и воспользуйтесь нашей услугой обратной связи'
    return (
        <>
            <Hero bg={bg} heroTitleSpan={heroTitleSpan} heroTitle={heroTitle} heroSubtitle={heroSubtitle}/>
            <section class="py-16">
                <div class="container mx-auto px-4">
                    <div>
                        <h2 class="text-5xl text-center">Свяжитесь с нами</h2>
                        <div class="grid lg:grid-cols-2 gap-6 mt-12">
                            <div>
                                <img class="w-full" src="./images/map.jpg" alt="map" />
                            </div>
                            <div>
                                <form action="" method="post">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6">
                                            <label for="name" class="block uppercase font-bold">Имя</label>
                                            <input id="name" type="text" name="name"
                                                class="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Введите имя" required />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="email" class="block uppercase font-bold">E-mail</label>
                                            <input id="email" type="email" name="email"
                                                class="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Введите e-mail" required />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="phone" class="block uppercase font-bold">Телефон</label>
                                            <input id="phone" type="text" name="phone"
                                                class="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="+7 (_ _ _) - _ _ _ - _ _ - _ _" required />
                                        </div>
                                        <div class="col-span-6">
                                            <label for="message" class="block uppercase font-bold">E-mail</label>
                                            <textarea id="message" name="message" rows="3"
                                                class="appearance-none w-full px-4 py-2 mt-2 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Введите сообщение">

                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="text-center mt-12">
                                        <button type="submit" class="btn-xl">Написать</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="mt-16">
                        <h2 class="text-5xl text-center">Контакты</h2>
                        <div class="mt-12 grid md:grid-cols-3 gap-6">
                            <div class="flex items-center">
                                <img class="w-10 h-10 mr-4" src={markerIcon} alt="marker" />
                                <p>Москва, ул. 1905 года, д.7с1</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-10 h-10 mr-4" src={mailIcon} alt="mail" />
                                <p>info@routek.tech</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-10 h-10 mr-4" src={phoneIcon} alt="phone" />
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

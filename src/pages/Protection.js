import React from 'react';
import Hero from "../components/Hero";

import bg from  '../assets/images/hero-bg/protection-hero-bg.jpg'

const Protection = () => {
    const heroTitleSpan = 'Защита '
    const heroTitle = 'интеллектуальной собственности'
    const heroSubtitle = 'Мы серьезно относимся к защите <br/> Вашей интеллектуальной собственности'
    return (
        <>
            <Hero bg={bg}  heroTitleSpan={heroTitleSpan} heroTitle={heroTitle} heroSubtitle={heroSubtitle}/>
            <section className="py-16">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-5xl">Конфиденциальность от начала до конца</h2>
                <div className="mt-12 text-basic font-light text-neutral-700">
                    <p>Routek работает с глобальной сетью производственных партнеров. Все наши партнеры должны пройти строгую процедуру проверки и регистрации, которая включает в себя заключение договорных обязательств по защите ваших данных.</p>
                    <p className="mt-4">Мы используем безопасные (зашифрованные) каналы для всех взаимодействий наших клиентов и производственных партнеров, т.е. когда передаются какие-либо файлы.</p>
                    <p className="mt-4">Наши производственные серверы расположены в Европе. Все цифровые модели и
                        чертежи хранятся на
                        серверах AWS. Мы гарантируем конфиденциальность во время работы на нашей платформе.&nbsp;Вы можете
                        ознакомиться с нашей <a href="legal.html" className="text-blue-500 cursor-pointer">политикой конфиденциальности</a> и <a href="legal.html" className="text-blue-500 cursor-pointer">соглашением о неразглашении данных</a>.&nbsp;
                    </p>
                    <p className="mt-4">Если вы хотите получить дополнительную информацию пожалуйста, свяжитесь с наши менеджером по работе с клиентами.</p>
                </div>

                <div className="mt-12 md:flex md:space-x-6">
                    <div className="w-2/5">
                        <img className="object-cover"  src="./images/privacy-img-01.jpg" width="513" height="276" alt="Шифрование и расположение сервера"/>
                    </div>

                    <div className="w-3/5">
                        <h3 className="text-3xl font-medium">Шифрование и расположение сервера</h3>
                        <div className="text-basic font-light text-neutral-700 mt-4">
                            <p>Мы используем безопасные (зашифрованные) соединения для всех взаимодействий наших клиентов и производственных партнеров, т.е. когда передаются какие-либо файлы.</p>
                            <p className="mt-4">Наши производственные серверы расположены в Европе; 
                                Все цифровые модели и чертежи хранятся на серверах AWS.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
            
        </>
    )
}

export default Protection

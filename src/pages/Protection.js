import React from 'react';
import Hero from "../components/Hero";
import { heroProtection} from '../data/heroData';

import privacyImage from '../assets/images/privacy-img-01.jpg'

const Protection = () => {
    
    return (
        <>
            <Hero image={heroProtection.image} titleSpan={heroProtection.titleSpan} title={heroProtection.title} subtitle={heroProtection.subtitle} />
            <section className="py-10 md:py-16">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="h2-title">Конфиденциальность от начала до конца</h2>
                <div className="mt-6 md:mt-12 text-basic font-light text-neutral-700">
                    <p>Routek работает с глобальной сетью производственных партнеров. Все наши партнеры должны пройти строгую процедуру проверки и регистрации, которая включает в себя заключение договорных обязательств по защите ваших данных.</p>
                    <p className="mt-4">Мы используем безопасные (зашифрованные) каналы для всех взаимодействий наших клиентов и производственных партнеров, т.е. когда передаются какие-либо файлы.</p>
                    <p className="mt-4">Наши производственные серверы расположены в Европе. Все цифровые модели и
                        чертежи хранятся на
                        серверах AWS. Мы гарантируем конфиденциальность во время работы на нашей платформе.&nbsp;Вы можете
                        ознакомиться с нашей <a href="legal.html" className="text-blue-500 cursor-pointer">политикой конфиденциальности</a> и <a href="legal.html" className="text-blue-500 cursor-pointer">соглашением о неразглашении данных</a>.&nbsp;
                    </p>
                    <p className="mt-4">Если вы хотите получить дополнительную информацию пожалуйста, свяжитесь с наши менеджером по работе с клиентами.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 mt-12">
                    <div className="relative col-span-1 h-48 md:h-auto">                     
                        <img className="absolute inset-0 w-full h-full object-cover "  src={privacyImage} alt="Шифрование и расположение сервера"/>
                    </div>

                    <div className="col-span-2 mt-6 md:mt-0">
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

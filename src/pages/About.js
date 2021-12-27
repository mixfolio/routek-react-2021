import React from 'react';
import Hero from '../components/Hero';

import bg from '../assets/images/hero-bg/about-hero-bg.jpg'

const About = () => {
    const heroTitleSpan = 'Открываем новые возможности '
    const heroTitle = 'цифрового производства'
    const heroSubtitle = <>Routek – это облачное производство, <br/>  обеспечивающее быстрый доступ заказчиков к производственным мощностям</>
    return (
        <>
            <Hero bg={bg} heroTitleSpan={heroTitleSpan} heroTitle={heroTitle} heroSubtitle={heroSubtitle} />

            {/* Start description-block */}
            <section className="py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="h2-title">Мы формируем будущее цифрового производства</h2>
                    <div className="mt-12 text-basic font-light text-neutral-600">
                        <p>Сегодня мир стоит на пороге развития экономики нового технологического поколения — цифровой экономики. Центральное место в цифровой экономике занимает высокотехнологичная промышленность, которая должна отвечать требованиям глобальной конкурентоспособности, эффективности и высокой производительности труда. </p>
                        <p>Мы верим в будущее цифрового производства и с помощью Routek формируем его вместе с вами. Routek – это платформа облачного производства, обеспечивающая доступ заказчиков к распределенной сети свободных производственных мощностей для оперативного производства деталей. Мы даем вам возможность производить изделия и детали, используя свободные производственные мощности наших партнеров. </p>
                    </div>
                </div>
            </section>
            {/* End description-block */}

            {/* Start facts-block */}
            <section className="py-16 bg-neutral-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="h2-title text-center">Факты о нас</h2>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-01.svg" alt="facts-ico-01" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold  block text-blue-500">8</span>сотрудников</p>
                        </li>
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-02.svg" alt="facts-ico-02" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold  block text-emerald-400">35 лет</span>средний возраст</p>
                        </li>
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-03.svg" alt="facts-ico-03" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold block text-blue-500">25%</span>кошек</p>
                        </li>
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-04.svg" alt="facts-ico-04" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold block text-emerald-400">75%</span>собак</p>
                        </li>
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-05.svg" alt="facts-ico-05" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold block text-emerald-400">15 000</span>миль на самолете</p>
                        </li>
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-06.svg" alt="facts-ico-06" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold block text-blue-500">8 000</span>км на поезде</p>
                        </li>
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-07.svg" alt="facts-ico-07" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold block text-emerald-400">1 250</span>литров кофе</p>
                        </li>
                        <li className="flex space-x-4">
                            <img src="./images/facts-ico-08.svg" alt="facts-ico-08" />
                            <p className="text-xl font-medium"><span className="text-4xl font-bold block text-blue-500">1 708</span>литров чая</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* End facts-block */}

            {/* Start Our Values block */}
            <section className="py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="h2-title text-center">Наши ценности</h2>

                    <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                        <li>
                            <div className="mb-4">
                                <img src="images/values-ico-01.svg" alt="values-ico-01" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-medium">Клиентоориентированность</h3>
                            <p className="text-basic font-light text-neutral-700 mt-2">Все наши действия и усилия направлены, прежде всего, на обеспечение наивысшего качества обслуживания Наших клиентов. Мы всегда стараемся сдержать свои обещания перед клиентом и решить все его задачи. Всегда!</p>
                        </li>
                        <li>
                            <div className="mb-4">
                                <img src="images/values-ico-02.svg" alt="values-ico-02.svg" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-medium">Профессионализм</h3>
                            <p className="text-basic font-light text-neutral-700 mt-2">В нашем мире невозможно без профессионализма, а он зависит от знаний и опыта. Профессионализм формирует доверие к нам и позволяет решать самые сложные и амбициозные задачи. Это так.</p>
                        </li>
                        <li>
                            <div className="mb-4">
                                <img src="images/values-ico-03.svg" alt="values-ico-03.svg" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-medium">Открытость</h3>
                            <p className="text-basic font-light text-neutral-700 mt-2">Открытость способствует обмену знаниями и опытом внутри команды, между нашими клиентами и партнерами. Открытость формирует инновации, которые мы реализуем в наших проектах и решениях.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>

    )
}

export default About

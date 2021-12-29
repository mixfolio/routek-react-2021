import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { heroWarranty } from '../data/heroData';

import warrIcon01 from '../assets/images/warr-ico-01.svg';
import warrIcon02 from '../assets/images/warr-ico-02.svg';
import warrIcon03 from '../assets/images/warr-ico-03.svg';
import warrIcon04 from '../assets/images/warr-ico-04.svg';

import qualityIcon from '../assets/images/quality-ico-01.svg';
import decisionIcon from '../assets/images/decision-ico.svg';

const Warranty = () => {
    return (
        <>
            <Hero image={heroWarranty.image} titleSpan={heroWarranty.titleSpan} title={heroWarranty.title} subtitle={heroWarranty.subtitle} />
            <section className="py-10 md:py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <ul className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
                        <li className="text-center">
                            <img className="mx-auto" src={warrIcon01} alt="warr-ico-01" />
                            <h3 className="text-xl mt-4 font-medium">Стандарты производства</h3>
                        </li>
                        <li className="text-center">
                            <img className="mx-auto" src={warrIcon02} alt="warr-ico-02" />
                            <h3 className="text-xl mt-4 font-medium">Оценка производственного партнера</h3>
                        </li>
                        <li className="text-center">
                            <img className="mx-auto" src={warrIcon03} alt="warr-ico-03" />
                            <h3 className="text-xl mt-4 font-medium">Отчеты о качестве и сертификаты</h3>
                        </li>
                        <li className="text-center">
                            <img className="mx-auto" src={warrIcon04} alt="warr-ico-04" />
                            <h3 className="text-xl mt-4 font-medium">Программа проверки дизайна</h3>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-10 md:py-16 bg-neutral-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="h2-title text-center">Оценка производственного партнера</h2>
                    <h4 className="text-sm md:text-basic font-light text-neutral-400 mt-4 uppercase text-center">Производственные
                        мощности
                        наших партнеров постоянно контролируются нашей командой,<br />что гарантирует качественное
                        выполнение заказов</h4>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-12">
                        <li className="flex space-x-4">
                            <p className="text-basic font-light text-neutral-400">
                                <span className="text-5xl font-bold block text-blue-500 mb-4">01. </span>
                                Предварительная проверка имеющихся мощностей и систем управления качеством
                            </p>
                        </li>
                        <li className="flex space-x-4">
                            <p className="text-basic font-light text-neutral-400">
                                <span className="text-5xl font-bold block text-emerald-400 mb-4">02. </span>
                                Выполнение нескольких тестовых заказов, которые отправляются в наш офис для оценки
                                качества
                            </p>
                        </li>
                        <li className="flex space-x-4">
                            <p className="text-basic font-light text-neutral-400">
                                <span className="text-5xl font-bold block text-blue-500 mb-4">03. </span>
                                Подписание соглашения о неразглашении с Routek для защиты конфиденциальной информации
                            </p>
                        </li>
                        <li className="flex space-x-4">
                            <p className="text-basic font-light text-neutral-400">
                                <span className="text-5xl font-bold block text-emerald-400 mb-4">04. </span>
                                Подписание договора оказания производственных услуг
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="h2-title text-center">Гарантия качества</h2>
                    <h4 className="text-sm md:text-basic font-light text-neutral-700 mt-4 uppercase text-center">Производственные
                        мощности
                        наших партнеров постоянно контролируются нашей командой, <br />
                        что гарантирует качественное выполнение заказов</h4>

                    <div className="mt-6 md:flex md:items-center md:space-x-4">
                        <img className="w-36 md:w-auto mx-auto" src={qualityIcon} alt="quality-ico" />
                        <div className='mt-6 md:mt-0'>
                            <h3 className="text-2xl font-medium">Стандартный отчет о проверке качества</h3>
                            <ul className="md:text-xl font-light text-neutral-700 list-disc list-inside mt-4">
                                <li>Критические размеры (габариты, диаметры / места отверстий, толщина и глубина)</li>
                                <li>Количество частей</li>
                                <li>Чистота поверхности</li>
                                <li>Удаление острых краев и заусенцев</li>
                                <li>Резьбы и допуски</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Link to="#" className="btn-xl">Скачать отчет</Link>
                    </div>

                    <div className="mt-10 md:mt-16 md:flex md:items-center md:space-x-4">
                        <img className="mx-auto hidden" src="./images/quality-ico-01.svg" alt="quality-ico" />
                        <div>
                            <h2 className="h2-title text-center">Программа проверки дизайна</h2>
                            <div className="mt-6 md:text-xl font-light text-neutral-700">
                                <p>Routek предоставляет Вам возможность воспользоваться Программой проверки дизайна для
                                    заказов с минимальной партией 50 шт. или стоимостью более 300 000 RUB c учетом НДС.
                                    Наша Программа позволит получить Вам комплект с двумя опытными образцами для их
                                    проверки и принятия решения о производстве нужной партии силами Routek.</p>
                            </div>
                            <h3 className="text-2xl font-medium mt-6">Преимущества</h3>
                            <ul className="md:text-xl font-light text-neutral-700 list-disc list-inside mt-4">
                                <li>Гарантия качества: программа снижает производственные риски, обеспечивая
                                    соответствие деталей Вашим требованиям, таким как материал, допуски или качество
                                    поверхности.</li>
                                <li className="mt-2">Изготовление опытных образцов по выгодным ценам: программа позволяет
                                    Вам получить опытные образцы по более выгодным ценам.</li>
                                <li className="mt-2">Ответственность: опытные образцы и производство партии с заданным
                                    количеством деталей производятся одним и тем же производственным партнером.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Link to="#" className="btn-xl">Подробнее</Link>
                    </div>
                    <div className="md:flex sm:items-center sm:space-x-4 mt-6">
                        <img className="mx-auto w-36 md:w-fit" src={decisionIcon} alt="decision" />
                        <div>
                            <h3 className="text-2xl mt-4 font-medium">Решение</h3>
                            <p className="mt-4 md:text-xl font-light text-neutral-700">Если ваш заказ не соответствует
                                спецификациям, Вы можете сообщить нам об этом в течении 5 рабочих дней. Наша Команда
                                решит Ваши проблемы как можно быстее.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Warranty

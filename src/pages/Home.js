import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { heroHome } from '../data/heroData';
import { techCards} from '../data/newData';

import stepOne from '../assets/images/step-1.svg';
import stepTwo from '../assets/images/step-2.svg';
import stepThree from '../assets/images/step-3.svg';

import barChartIcon from '../assets/images/bar-chart.svg';
import sandWatchIcon from '../assets/images/sand-watch.svg';
import lowPriceIcon from '../assets/images/low-price.svg';
import ecologyIcon02 from '../assets/images/ecology-2.svg';
import barChartIcon02 from '../assets/images/bar-chart-2.svg';
import lowPriceIcon02 from '../assets/images/low-price-2.svg';
import easyAccessIcon from '../assets/images/easy-access.svg';
import ecologyIcon from '../assets/images/ecology.svg';

import advtgIcon01 from '../assets/images/advtg-ico-01.svg';
import advtgIcon03 from '../assets/images/advtg-ico-03.svg';
import advtgIcon04 from '../assets/images/advtg-ico-04.svg';
import advtgIcon05 from '../assets/images/advtg-ico-05.svg';




const Home = () => {
   
    return (    
        <>
            <Hero image={heroHome.image} titleSpan={heroHome.titleSpan} title={heroHome.title} subtitle={heroHome.subtitle} />

            {/* Start Tech block */}
            <section className="top-8 md:top-[-64px] tech-sect relative z-10 min-h-[1480px] sm:min-h-[736px] md:min-h-[392px] xl:min-h-[calc(240px-88px)]">
                <div className="max-w-screen-xl mx-auto px-4 absolute top-0 left-0 right-0">
                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 text-white">
                        {techCards.map((card, index) =>
                            <li key={index} className="p-4 overflow-hidden h-56 rounded-lg text-center bg-neutral-800 hover:h-full shadow">
                                <div className="flex flex-col justify-between h-52">
                                    <h4 className="">{card.title}</h4>
                                    <img className="mb-2 mx-auto" src={card.img} width="128" height="128" alt="icon" />
                                </div>
                                <p className="text-sm font-light">{card.descr}</p>
                                <Link to="#" className="inline-block p-2 bg-primary rounded-sm mt-4 hover:bg-blue-700">Рассчитать
                                    заказ
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
            {/* End Tech block  */}

            {/* Start Our solutions */}
            <section className="py-10 md:py-16">
                <div className="max-w-screen-xl mx-auto md:px-4">
                    <h2 className="h2-title text-center">Наши решения</h2>

                    <ul className="grid lg:grid-cols-3 gap-6 mt-6 md:mt-12">
                        <li className="flex flex-col justify-between bg-white border rounded-md drop-shadow-md">
                            <div className="p-6">
                                <h3 className="h3-title text-blue-500">Быстрое прототипирование</h3>
                                <p className="test-basic font-light text-gray-600 mt-4 sm:mt-6">FDM - это наиболее широко доступный
                                    процесс 3D-печати,
                                    в основном используемый для создания недорогих прототипов и тестирования дизайна в
                                    очень короткие сроки.</p>

                            </div>
                            <div className="p-6 flex justify-between space-x-4">
                                <div>
                                    <img className="mx-auto" src={sandWatchIcon} width="64" height="64"
                                        alt="saving-times"/>
                                    <p className="text-sm mt-2">Saving Time</p>
                                </div>
                                <div>
                                    <img className="mx-auto" src={barChartIcon} width="64" height="64"
                                        alt="bar-chart"/>
                                    <p className="text-sm mt-2">Faster Time-to-Market</p>
                                </div>
                                <div>
                                    <img className="mx-auto mb-1" src={lowPriceIcon} width="64" height="64"
                                        alt="low-price"/>
                                    <p className="text-sm mt-2">Low Cost</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col justify-between bg-white border rounded-md drop-shadow-md">
                            <div className="p-6">
                                <h3 className="h3-title text-emerald-400">Виртуальный склад запчастей и деталей</h3>
                                <p className="test-basic font-light text-gray-600 mt-4 sm:mt-6">Быстрое изготовление деталей и
                                    запчастей
                                    в режиме «plug&play» из цифровых моделей, полностью готовых к производству.</p>
                            </div>
                            <div className="p-6 flex justify-between space-x-4">
                                <div>
                                    <img className="mx-auto" src={ecologyIcon02} width="64" height="64" alt="ecology"/>
                                    <p className="text-sm mt-2">Carbon Neutral</p>
                                </div>
                                <div>
                                    <img className="mx-auto" src={barChartIcon02} width="64" height="64"
                                        alt="bar-chart"/>
                                    <p className="text-sm mt-2">Faster Time-to-Market</p>
                                </div>
                                <div>
                                    <img className="mx-auto" src={lowPriceIcon02} width="64" height="64"
                                        alt="low-price"/>
                                    <p className="text-sm mt-2">Low Cost</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col justify-between bg-white border rounded-md drop-shadow-md">
                            <div className="p-6">
                                <h3 className="h3-title  text-blue-500">Производство по запросу</h3>
                                <p className="test-basic font-light text-gray-600 mt-4 md:mt-6">Распределённое производство
                                    необходимых
                                    деталей и конечных изделий из цифровых моделей.</p>

                            </div>
                            <div className="p-6 flex justify-between space-x-4">
                                <div>
                                    <img className="mx-auto" src={easyAccessIcon} width="64" height="64"
                                        alt="easy-access"/>
                                    <p className="text-sm mt-2">Easy Access</p>
                                </div>
                                <div>
                                    <img className="mx-auto" src={ecologyIcon} width="64" height="64" alt="bar-chart"/>
                                    <p className="text-sm mt-2">Carbon Neutral</p>
                                </div>
                                <div>
                                    <img className="mx-auto" src={sandWatchIcon} width="64" height="64"
                                        alt="sand-watch"/>
                                    <p className="text-sm mt-2">Saving Time</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* End Our solutions */}

            {/* Start workflow-block */}
            <section className="py-10 md:py-16 bg-neutral-900 text-white">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="h2-title text-center">Как мы работаем</h2>
                    <h4 className="md:text-xl font-light text-neutral-400 mt-4 uppercase text-center">Всего три шага. Быстро.
                        Эффективно.</h4>

                    <ul className="relative grid lg:grid-cols-3 gap-6 mt-12">
                        <li>
                            <img className="mx-auto" src={stepOne} alt="step-one" />
                            <div className="mt-6 md:mt-12">

                                <h3 className="text-3xl font-bold text-blue-500">Шаг 1.</h3>
                                <h4 className="text-2xl font-light mt-4">Загрузите свои детали онлайн</h4>
                                <p className="text-basic font-light text-neutral-400 mt-4">Загрузите файл САПР онлайн,
                                    укажите параметры заказа и отправьте нам для получения точной стоимости и сроков
                                    изготовления.</p>
                            </div>
                        </li>
                        <li>
                            <img className="mx-auto" src={stepTwo} alt="step-two" />
                            <div className="mt-6 md:mt-12">

                                <h3 className="text-3xl font-bold text-secondary">Шаг 2.</h3>
                                <h4 className="text-2xl font-light mt-4">Мы немедленно приступим к изготовлению ваших
                                    деталей
                                </h4>
                                <p className="text-basic font-light text-neutral-400 mt-4">Производство из нашей сети,
                                    прошедшее
                                    все этапы проверки, немедленно приступит к производству ваших деталей. На нашей
                                    платформе вы получаете возможность отслеживать статус изготовления Ваших деталей
                                    on-line.</p>
                            </div>
                        </li>
                        <li>
                            <img className="mx-auto" src={stepThree} alt="step-three" />
                            <div className="mt-6 md:mt-12">

                                <h3 className="text-3xl font-bold text-blue-500">Шаг 3.</h3>
                                <h4 className="text-2xl font-light mt-4">Ваши детали будут оперативно доставлены вам</h4>
                                <p className="text-basic font-light text-neutral-400 mt-4">Мы берем на себя все
                                    логистические
                                    вопросы по вашему заказу. Наши менеджеры проследят за тем, чтобы ваши детали были
                                    доставлены вовремя!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* End Our solutions */}

            {/* Start Advantage block */}
            <section className="py-10 md:py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="h2-title text-center">Преимущества работы с нами</h2>
                    <h4 className="md:text-xl font-light text-neutral-500 mt-4 uppercase text-center">Реализуйте свои
                        производственные задачи
                        быстро и легко</h4>
                    <ul className="grid md:grid-cols-2 gap-6 mt-6 md:mt-12">
                        <li>
                            <div className="mb-4">
                                <img className='mx-auto md:ml-0' src={advtgIcon01} alt="advtg-ico-01" />
                            </div>
                            <h3 className="h3-title">Контроль сроков</h3>
                            <p className="text-basic font-light text-neutral-500 mt-2">Наша платформа помогает комфортно
                                контролировать все
                                сроки работ,
                                позволяя вам сосредоточиться на более важных процессах.</p>
                        </li>
                        <li>
                            <div className="mb-4">
                                <img className='mx-auto md:ml-0' src={advtgIcon03} alt="advtg-ico-03" />
                            </div>
                            <h3 className="h3-title">Безопасность данных</h3>
                            <p className="text-basic font-light text-neutral-500 mt-2">Использование безопасных соединений,
                                строгая процедура
                                отбора
                                производственных партнеров и заключение с ними договорных обязательств по защите ваших
                                данных. Мы принимаем все меры для защиты вашей интеллектуальной собственности.</p>
                        </li>
                        <li>
                            <div className="mb-4">
                                <img className='mx-auto md:ml-0' src={advtgIcon04} alt="advtg-ico-04" />
                            </div>
                            <h3 className="h3-title">Гарантированное качество</h3>
                            <p className="text-basic font-light text-neutral-500 mt-2">От аудита производственных партнеров
                                до
                                проверки
                                изготовленных
                                деталей, мы строго следуем процедурам, чтобы ваши детали всегда соответствовали самым
                                высоким стандартам качества.</p>
                        </li>
                        <li>
                            <div className="mb-4">
                                <img className='mx-auto md:ml-0' src={advtgIcon05} alt="advtg-ico-05" />
                            </div>
                            <h3 className="h3-title">Прозрачное ценообразование</h3>
                            <p className="text-basic font-light text-neutral-500 mt-2">Мы предоставляем доступ к подробным
                                данным о стоимости
                                работ. При расчетах стоимости наш интеллектуальный помощник учитывает трудозатраты на
                                основные и вспомогательные операции, а также затраты на материалы.</p>
                        </li>
                    </ul>
                    <div className="text-center mt-12">
                        <Link to="#" className="btn-xl">
                            Заказать
                        </Link>
                    </div>
                </div>
            </section>
            {/* End Advantage block */}
            
        </>
    )
}

export default Home

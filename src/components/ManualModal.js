import React from 'react'

const ManualModal = ({visible, setVisible}) => {

    return (
        <div id="manual" className={visible ? "manual-modal overflow-y-auto fixed inset-0 bg-black bg-opacity-50 z-30" : "hidden overflow-y-auto fixed inset-0 bg-black bg-opacity-50 z-30"}>
            <div className="min-h-full flex items-center justify-center p-4">

                <div className="relative max-w-3xl bg-white p-6 rounded-lg">
                    <svg className="absolute top-4 right-4 cursor-pointer" onClick={() => setVisible(!visible)} width="36" height="36" viewBox="0 0 24 24"
                        fill="#2780eb" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.435 18.4353C18.0445 18.8258 17.4113 18.8258 17.0208 18.4353L5.70712 7.12161C5.31659 6.73109 5.31659 6.09792 5.70712 5.7074C6.09764 5.31687 6.73081 5.31687 7.12133 5.7074L18.435 17.0211C18.8256 17.4116 18.8256 18.0448 18.435 18.4353Z" />
                        <path
                            d="M5.70711 18.4351C5.31658 18.0446 5.31658 17.4114 5.70711 17.0209L17.0208 5.7072C17.4113 5.31668 18.0445 5.31668 18.435 5.7072C18.8256 6.09772 18.8256 6.73089 18.435 7.12141L7.12132 18.4351C6.7308 18.8256 6.09763 18.8256 5.70711 18.4351Z" />
                    </svg>

                    <div className="manual__slide">
                        <div className="sm:flex sm:space-x-6">
                            <div className="shrink-0 flex items-center">
                                <img className='mx-auto'  width="96" height="96" src="./images/manual/handshake.svg" alt="handshake"/>
                            </div>

                            <div>
                                <h2 className="text-3xl text-primary">Добро пожаловать на Routek.cloud</h2>
                                <p className="font-light text-gray-600 mt-4">Наше облачное производство обеспечит вам быстрый и удобный доступ
                                    к
                                    свободным производственным мощностям. Это лучший выбор, если вам нужно произвести макет,
                                    прототип или функциональную деталь. Сейчас мы за пару шагов покажем вам как легко
                                    сделать новый заказ.
                                </p>
                                <div className="flex justify-between mt-6">
                                    <button className="inline-block text-center bg-gray-400 border border-transparent rounded-md py-2 px-4 text-white hover:bg-gray-500 hover:shadow-sm transition" type='button'>Пропустить</button>
                                    <button  className="inline-block text-center bg-primary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type='button'>Начинаем</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="manual__slide hidden">
                        <div className="sm:flex sm:space-x-6">
                            <div className="shrink-0 flex items-center">
                                <img className='mx-auto' width="96" height="96" src="./images/manual/upload.svg" alt="upload"/>
                            </div>

                            <div>
                                <h2 className="text-3xl text-primary">Загрузка модели</h2>
                                <p className="font-light text-gray-600 mt-4">Загрузите файл с 3D-моделью, которую хотите произвести (STEP,
                                    STP,
                                    SLDPRT, STL, DFX, IPT, 3MF, 3DXML, PRT, SAT).
                                    Вы можете просто перенести файлы в область загрузки, либо указать их расположение на
                                    компьютере
                                </p>
                                <p className="text-sm font-light text-gray-600 mt-2">
                                    <span className="text-primary">(!)</span> Мы с уважением относимся к конфиденциальности
                                    информации
                                    и заците прав на
                                    интеллектуальную собственность и не используем данные файлов исключительно в рамках
                                    работы
                                    над
                                    Вашим заказом.
                                    Если необходимо, вы можете подписать с нами Соглашение о конфиденциальности прежде чем
                                    загрузите
                                    файлы на платформу.
                                </p>
                                <div className="flex justify-between items-center mt-6">
                                    <button className="inline-block text-center bg-gray-400 border border-transparent rounded-md py-2 px-4 text-white hover:bg-gray-500 hover:shadow-sm transition" type="button">Назад</button>
                                    <p className="font-light text-gray-600">1/4</p>
                                    <button className="inline-block text-center bg-primary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type="button">Далее</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="manual__slide hidden">
                        <div className="sm:flex sm:space-x-6">
                            <div className="shrink-0 flex items-center">
                                <img className='mx-auto' width="96" height="96" src="./images/manual/select-tech.svg" alt="select-tech"/>
                            </div>
                            <div>
                                <h2 className="text-3xl text-primary">Выбор технологии</h2>
                                <p className="font-light text-gray-600 mt-4">Далее выбираем необходимую технологию для производства детали:
                                </p>
                                <ul className="list-disc list-inside font-light text-gray-600 mt-4">
                                    <li >3D печать</li>
                                    <li >Обработка с ЧПУ</li>
                                    <li >Обработка листового металла</li>
                                    <li >Литье</li>
                                    <li >Вакуумная формовка</li>
                                </ul>
                                <div className="flex justify-between items-center mt-6">
                                    <button className="inline-block text-center bg-gray-400 border border-transparent rounded-md py-2 px-4 text-white hover:bg-gray-500 hover:shadow-sm transition" type="button">Назад</button>
                                    <p className="font-light text-gray-600">2/4</p>
                                    <button className="inline-block text-center bg-primary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type="button">Далее</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="manual__slide hidden">
                        <div className="sm:flex sm:space-x-6">
                            <div className="shrink-0 flex items-center">
                                <img className='mx-auto' width="96" height="96" src="./images/manual/check-list.svg" alt="check-list"/>
                            </div>
                            <div>
                                <h2 className="text-3xl text-primary">Выбор параметров</h2>
                                <p className="font-light text-gray-600 mt-4">Теперь, когда файл загружен, вы можете выбрать конкретные
                                    параметры
                                    производства и доставки.
                                    Стоимость изготовления будет предоставлена Вам в течении ближайших 24 часов.
                                </p>
                                <p className="text-sm font-light text-gray-600 mt-2">
                                    <span className="text-primary">(!)</span> Если в вашем изделии есть резьба или особые
                                    допуски,
                                    пожалуйста, приложите
                                    также CAD файл и/или конструкторскую документацию.
                                </p>
                                <div className="flex justify-between items-center mt-6">
                                    <button className="inline-block text-center bg-gray-400 border border-transparent rounded-md py-2 px-4 text-white hover:bg-gray-500 hover:shadow-sm transition" type="button">Назад</button>
                                    <p className="font-light text-gray-600">3/4</p>
                                    <button className="inline-block text-center bg-primary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type="button">Далее</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="manual__slide hidden">
                        <div className="sm:flex sm:space-x-6">
                            <div className="shrink-0 flex items-center">
                                <img className='mx-auto' width="96" height="96" src="./images/manual/3d-printing.svg" alt="3d-printing"/>
                            </div>
                            <div>
                                <h2 className="text-3xl text-primary">Начало производства</h2>
                                <p className="font-light text-gray-600 mt-4">После подтверждения заказа, мы отправляем данные на производство.</p>
                                <p className="font-light text-gray-600 mt-2">Наша команда будет отслеживать все этапы от начала изготовления до
                                    момента
                                    доставки.</p>
                                <p className="font-light text-gray-600 mt-2">С помощью чатов, емайлов, телефонных звонков – мы будем постоянно
                                    на
                                    связи с Вами и производством.</p>
                                <div className="flex justify-between items-center mt-6">
                                    <button className="inline-block text-center bg-gray-400 border border-transparent rounded-md py-2 px-4 text-white hover:bg-gray-500 hover:shadow-sm transition" type='button'>Назад</button>
                                    <p className="font-light text-gray-600">4/4</p>
                                    <button className="inline-block text-center bg-primary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type='button'>Далее</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="manual__slide hidden">
                        <div className="sm:flex sm:space-x-6">
                            <div className="shrink-0 flex items-center">
                                <img className='mx-auto' width="96" height="96" src="./images/manual/select-params.svg" alt="select-params"/>
                            </div>
                            <div>
                                <h2 className="text-3xl text-primary">Попробуйте сами</h2>
                                <p className="font-light text-gray-600 mt-4">Все очень просто! Routek.cloud делает производство простым и удобным.
                                </p>
                                <p className="font-light text-gray-600 mt-2">Загрузите модель и убедитесь в этом сами!</p>
                                <div className=" flex justify-between items-center mt-6">
                                    <button className="inline-block text-center bg-secondary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type="button">Зарегистрироваться</button>
                                    <button className="inline-block text-center bg-primary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type='button'>Загрузить файл</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManualModal

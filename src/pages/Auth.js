import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div className='mt-18 p-4 flex items-center justify-center min-h-[500px] bg-slate-900'>
            <div className='max-w-md w-full bg-white rounded-lg'>
                {/* <div className='bg-black h-24'></div> */}
                <div className='p-6'>
                    <h2 className='text-3xl text-center'>Авторизация</h2>
                    <form className='mt-4' action="#">
                        <div>
                            <label htmlFor="name" className="block text-small">Логин</label>
                            <input id="name" type="text" name="name"
                                className="appearance-none w-full px-4 py-2 mt-1 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Введите имя" required />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="password" className="block text-small">Пароль</label>
                            <input id="password" type="password" name="password"
                                className="appearance-none w-full px-4 py-2 mt-1 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Введите пароль" required />
                        </div>
                        <div className="flex justify-between mt-6">
                            {/* <Link to='/' className="appearance-none border border-blue-700" type='button'>Отмена</Link> */}
                            <Link to='/' className="appearance-none inline-block text-center bg-gray-400 border border-transparent rounded-md py-2 px-4 text-white hover:bg-gray-500 hover:shadow-sm transition" type='button'>Отмена</Link>
                            <button className="inline-block text-center bg-primary border border-transparent rounded-md py-2 px-4 text-white hover:bg-blue-600 hover:shadow-sm transition" type='button'>Войти</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Auth

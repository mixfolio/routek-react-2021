import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { publicRoutes } from '../routes';
// import { HOME_ROUTE } from '../utils/consts';


const AppRouter = () => {
    return (
        <main>
            <Routes>
                {publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={Component}/>
                )}
                
            </Routes>
        </main>
    )
}

export default AppRouter

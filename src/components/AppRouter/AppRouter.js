import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import { authRoutes, publicRoutes, adminRoutes } from '../../utils/routes'


const AppRouter = () => {
     const { admin, isAuth } = useAuth()
     

     let route;

     switch (isAuth) {
          case true: {
               if(admin){
                    route = <Routes>
                    {adminRoutes.map(({ path, element }) =>
                         <Route path={path} element={element} key={path} />
                    )
                    }
               </Routes>
               } else {
                    <Routes>
                    {authRoutes.map(({ path, element }) =>
                         <Route path={path} element={element} key={path} />
                    )
                    }
               </Routes>
               }
               break
          }
          case false: {
               route =  <Routes>
                    {publicRoutes.map(({ path, element }) =>
                         <Route path={path} element={element} key={path} />
                    )
                    }
               </Routes>
               break
          }
          default: console.log("ошибка");
     }

     return route
};

export default AppRouter;
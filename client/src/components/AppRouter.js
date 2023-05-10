import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import NoMatch from './NoMatch';
import { Context } from '../index';


const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {
        user.isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>}/>)
      }
      {
        publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />}/>)
      }
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default AppRouter;

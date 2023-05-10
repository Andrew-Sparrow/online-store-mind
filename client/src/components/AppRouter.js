import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../routes';
import NoMatch from './NoMatch';


const AppRouter = () => {

  return (
    <Routes>
      {
        publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact />
        )
      }
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default AppRouter;

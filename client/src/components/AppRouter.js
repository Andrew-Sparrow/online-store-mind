import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { publicRoutes } from '../routes';
import NoMatch from './NoMatch';


const AppRouter = () => {

  return (
    <Container>
      <Routes>
        {
          publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} exact />
          )
        }
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Container>
  )
}

export default AppRouter;

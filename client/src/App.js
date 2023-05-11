import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container';


const App = observer(() => {

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
      </Container>
        <AppRouter />
    </BrowserRouter>
  );
});

export default App;

import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Spinner } from "react-bootstrap";


const App = observer(() => {
  const [loading, setLoading] = useState(false);


  if (loading) {
    return <div className='mt-5'>
      <div style={{ width: 32 }} className='d-flex justify-content-between m-auto'>
        <Spinner animation={"grow"} />
      </div>
    </div>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;

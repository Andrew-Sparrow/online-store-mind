import React from 'react';
import { Spinner } from "react-bootstrap";


const Loader = () => {
  return (
    <div className='mt-5'>
      <div style={{ width: 32 }} className='d-flex justify-content-between m-auto'>
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  )
}

export default Loader;

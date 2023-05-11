import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

import { PRODUCT_ROUTE } from "../utils/consts";


const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Col className={"mt-3"} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
        <Card style={{ width: 150, cursor: 'pointer' }} border={"light"} className='product'>
          <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img} />
          <b>{product.title}</b>
          <p>{product.price} руб.</p>
        </Card>
    </Col>
  );
};

export default ProductItem;


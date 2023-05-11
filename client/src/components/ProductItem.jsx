import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

import { PRODUCT_ROUTE } from "../utils/consts";


const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className={"mt-3"} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
      <ListGroup.Item>
        item
        <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
          <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img} />
          <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          </div>
          <div>{product.title}</div>
        </Card>
      </ListGroup.Item>
    </Col>
  );
};

export default ProductItem;


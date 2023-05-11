import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

import { useParams } from 'react-router-dom';
import { fetchOneProduct } from "../http/productAPI";


const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data))
  }, [])


  return (
    <div>Product Page - {id}</div>
  )
};

export default Product;

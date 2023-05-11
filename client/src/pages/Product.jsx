import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import { fetchOneProduct } from "../http/productAPI";
import { createBasketProduct } from '../http/basketProductAPI';


const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const addToBasket = () => {
    try {
      createBasketProduct({ productId: Number(id) })
        .then((data) => {
          console.log('Product was added to basket!')
        })

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOneProduct(id)
      .then(data => setProduct(data))
      .finally(() => { setLoading(false) })
  }, []);

  if (loading) {
    return <Loader />
  }


  return (
    <Container className="mt-3">
      <Row >
        <Col className="d-flex flex-column align-items-center justify-content-around">
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img} />
          <h2 className='d-flex' style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{product.title}</h2>
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-between">
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>От: {product.price} руб.</h3>
            <Button variant={"outline-dark"} onClick={() => addToBasket()}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};

export default Product;

import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import ProductItem from '../components/ProductItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchProducts } from '../http/productAPI';


const Products = observer(() => {
  const { productsStore } = useContext(Context);
  console.log(productsStore);

  useEffect(() => {

    fetchProducts(1, 3).then(data => {
      productsStore.setProducts(data.rows);
      productsStore.setTotalCount(data.count);
    })
  }, [])

  useEffect(() => {
    fetchProducts(productsStore.page, 3).then(data => {
      productsStore.setProducts(data.rows);
      productsStore.setTotalCount(data.count);
    })
  }, [productsStore.page])

  return (
    <Row className="d-flex">
      <ListGroup className="list-group-flush">
        {productsStore.products.map(item =>
          <ProductItem key={item.id} product={item} />
        )}
      </ListGroup>
    </Row>
  )
});

export default Products;


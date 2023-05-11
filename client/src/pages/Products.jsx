import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";

import ProductItem from '../components/ProductItem';
import { fetchProducts } from '../http/productAPI';
import { Spinner } from "react-bootstrap";

import Pages from '../components/Pages';


const Products = observer(() => {
  const { productsStore } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(1, 3).then(data => {
      productsStore.setProducts(data.rows);
      productsStore.setTotalCount(data.count);
    }).finally(() => setLoading(false));

  }, []);

  useEffect(() => {
    fetchProducts(productsStore.page, 3).then(data => {
      productsStore.setProducts(data.rows);
      productsStore.setTotalCount(data.count);
    }).finally(() => setLoading(false));
  }, [productsStore.products, productsStore.page]);

  if (loading) {
    return <div className='mt-5'>
      <div style={{ width: 32 }} className='d-flex justify-content-between m-auto'>
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  }

  return (
    <Row className="mt-2">
      {productsStore.products.map(item =>
        <ProductItem key={item.id} product={item} />
      )}
      <Pages />
    </Row>
  )
});

export default Products;


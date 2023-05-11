import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";

import ProductItem from '../components/ProductItem';
import { fetchProducts } from '../http/productAPI';
import Loader from '../components/Loader';
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
  }, [productsStore.page]);


  if (loading) {
    return <Loader />
  }

  return (
    <Row className="mt-2">
      {productsStore.products.length === 0
        ?
        <b>Список товаров пуст</b>
        :
        productsStore.products.map(item =>
        <ProductItem key={item.id} product={item} />
      )}
      <Pages />
    </Row>
  )
});

export default Products;


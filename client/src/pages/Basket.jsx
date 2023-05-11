import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";

import ProductItem from '../components/ProductItem';
import { fetchProducts } from '../http/productAPI';
import Loader from '../components/Loader';
import Pages from '../components/Pages';


const Basket = observer(() => {
  const { basketProductStore } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(1, 3).then(data => {
      basketProductStore.setBasketProducts(data.rows);
      basketProductStore.setTotalCount(data.count);
    }).finally(() => setLoading(false));

  }, []);

  useEffect(() => {
    fetchProducts(basketProductStore.page, 3).then(data => {
      basketProductStore.setBasketProducts(data.rows);
      basketProductStore.setTotalCount(data.count);
    }).finally(() => setLoading(false));
  }, [basketProductStore.page]);


  if (loading) {
    return <Loader />
  }

  return (
    <Row className="mt-2">
      {basketProductStore.basketProducts.map(item =>
        <ProductItem key={item.id} product={item} />
      )}
      <Pages />
    </Row>
  )
});

export default Basket;



import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";

import ProductItem from '../components/ProductItem';
import { fetchBasketProduct } from '../http/basketProductAPI';
import Loader from '../components/Loader';


const Basket = observer(() => {
  const { basketProductStore } = useContext(Context);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchBasketProduct(1, 3).then(data => {
      console.log(data);
      basketProductStore.setBasketProducts(data.rows);
      basketProductStore.setTotalCount(data.count);
    }).finally(() => setLoading(false));

  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <Row className="mt-2">
      {basketProductStore.basketProducts.length === 0
        ?
        <b>В корзине нет товаров</b>
        :
        basketProductStore.basketProducts.map(item =>
          <ProductItem key={item.id} product={item} />
        )}
    </Row>
  )
});

export default Basket;



import { $host } from "./index";


export const createBasketProduct = async (productId, basketId) => {
  const { data } = await $host.post('api/basket-product', {
    params: {
      basketId, productId
    }
  });

  return data;
};

export const fetchBasketProduct = async (basketId, productId) => {
  const { data } = await $host.get('api/basket-product', {
    params: {
      basketId, productId
    }
  });

  return data;
};

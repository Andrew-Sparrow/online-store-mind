import { $host } from "./index";


export const createBasketProduct = async (productId) => {
  const { data } = await $host.post('api/basket-product', {
    params: {
      productId
    }
  });

  return data;
};

export const fetchBasketProduct = async () => {
  const { data } = await $host.get('api/basket-product');

  return data;
};

import { $host } from "./index";


export const createBasketProduct = async (product) => {
  const { data } = await $host.post('api/basket-product', product);

  return data;
};

export const fetchBasketProduct = async () => {
  const { data } = await $host.get('api/basket-product');

  return data;
};

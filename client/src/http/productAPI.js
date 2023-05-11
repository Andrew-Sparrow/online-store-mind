import { $host } from "./index";


export const createProduct = async (product) => {
  const { data } = await $host.post('api/product', product);

  return data;
}

export const fetchProducts = async (page, limit = 3) => {
  const { data } = await $host.get('api/products', {
    params: {
      page, limit
    }
  })

  return data;
}

export const fetchOneProduct = async (id) => {
  const { data } = await $host.get('api/product/' + id);

  return data;
}

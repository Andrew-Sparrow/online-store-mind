import { CREATE_ROUTE, BASKET_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Basket from "./pages/Basket";

import Product from "./pages/Product";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import Shop from "./pages/Shop";


export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: CREATE_ROUTE,
    Component: CreateProduct
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: PRODUCT_ROUTE + '/:id' ,
    Component: Product
  },
  {
    path: PRODUCTS_ROUTE,
    Component: Products
  },
];

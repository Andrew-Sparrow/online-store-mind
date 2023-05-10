import { CREATE_ROUTE, BASKET_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Basket from "./pages/Basket";

import Shop from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";


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
    path: PRODUCT_ROUTE,
    Component: Product
  },
];

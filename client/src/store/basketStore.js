import { makeAutoObservable } from "mobx";

export default class basketProductStore {
  constructor() {
    this._products = []
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }

  setBasketProducts(products) {
    this._products = products;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  get basketProducts() {
    return this._products;
  }

  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }
}

import axios from 'axios';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_BURGERS = 'GET_BURGERS';
export const GET_COMBOS = 'GET_COMBOS';
export const GET_BEVERAGES = 'GET_BEVERAGES';
export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_POTATOES = 'GET_POTATOES';
export const GET_VEGGIE = 'GET_VEGGIE';
export const SET_CATEGORY = 'SET_CATEGORY';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const DELETE_ONE_PRODUCT_CART = 'DELETE_ONE_PRODUCT_CART';
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
export const LOCAL_STORAGE = 'LOCAL_STORAGE';
export const GET_BURGER_BASE = 'GET_BURGER_BASE';

// export const CREATE_BURGER = "CREATE_BURGER"
// export const CREATE_COMBO = "CREATE_ COMBO"
// export const CREATE_BEVERAGE = "CREATE_BEVERAGE"

// https://vimeo.com/510792531/20d64d4a98

export function getProduct(
  category = '',
  order = '',
  name = '',
  isVeggie = ''
) {
  return async function (dispatch) {
    const json = await axios(
      `https://henrys-pf.herokuapp.com/products?category=${category}&order=${order}&name=${name}&isVeggie=${isVeggie}`
      /* `/products?category=${category}&order=${order}&name=${name}&isVeggie=${isVeggie}` */
    );
    try {
      return dispatch({
        type: GET_PRODUCT,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
}

export function addCartProduct(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}

export function deleteCart() {
  return {
    type: CLEAR_CART,
  };
}

export function productDelete(id) {
  return {
    type: DELETE_ONE_PRODUCT_CART,
    payload: id,
  };
}

export function allProductsDelete(id) {
  return {
    type: DELETE_PRODUCT_CART,
    payload: id,
  };
}

export function setLocalStorage(payload) {
  return {
    type: LOCAL_STORAGE,
    payload,
  };
}

/* export function getBurgers() {
  // eslint-disable-next-line func-names, consistent-return
  return async function (dispatch) {
    const json = await axios('http://pending...');

    try {
      return dispatch({
        type: GET_BURGERS,
        payload: json.data,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}

export function getCombos() {
  // eslint-disable-next-line func-names, consistent-return
  return async function (dispatch) {
    const json = await axios('http://pending...');

    try {
      return dispatch({
        type: GET_COMBOS,
        payload: json.data,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}

export function getBeverages() {
  // eslint-disable-next-line func-names, consistent-return
  return async function (dispatch) {
    const json = await axios('http://pending...');

    try {
      return dispatch({
        type: GET_BEVERAGES,
        payload: json.data,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
} */

export function getIngredients(name) {
  return async function (dispatch) {
    const json = await axios(
      // eslint-disable-next-line no-template-curly-in-string
      'https://henrys-pf.herokuapp.com/ingredients?name=${name}'
    );
    try {
      return dispatch({
        type: GET_INGREDIENTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getProductById(id) {
  return async function (dispatch) {
    const json = await axios('https://henrys-pf.herokuapp.com/products/' + id);
    try {
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBurgerBase() {
  return async function (dispatch) {
    const json = await axios(`/burgerBase`);
    try {
      return dispatch({
        type: GET_BURGER_BASE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function agregarCalificacion(payload) {
  return async function () {
    const json = await axios.post('pending...', payload);
    return json;
  };
}

// ACCIONES POST
export function createBurger(payload) {
  return async function () {
    const json = await axios.post('https://pending...', payload);
    return json;
  };
}

export function createCombo(payload) {
  return async function () {
    const json = await axios.post('https://pending...', payload);
    return json;
  };
}

export function createBeverage(payload) {
  return async function () {
    const json = await axios.post('https://pending...', payload);
    return json;
  };
}

export function createUser(payload) {
  return async function () {
    const json = await axios.post(`/register`, payload);
    console.log(json.data);
    return { json };
  };
}

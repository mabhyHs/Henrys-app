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
export const CLEAR_STATE = 'CLEAR_STATE';
export const DELETE_ONE_PRODUCT_CART = 'DELETE_ONE_PRODUCT_CART';
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
export const LOCAL_STORAGE = 'LOCAL_STORAGE';
export const GET_BURGER_BASE = 'GET_BURGER_BASE';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const ADD_TO_LOCAL = 'ADD_TO_LOCAL';
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export const ADD_BURGER_CUSTOM_TO_CART = 'ADD_BURGER_CUSTOM_TO_CART';
export const POST_MP = 'POST_MP';
export const GET_FAVORITES = 'GET_FAVORITES';
export const SET_DISCOUNT = 'SET_DISCOUNT';
export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_COUPONS = 'GET_COUPONS';

export function getProduct(
  category = '',
  order = '',
  name = '',
  isVeggie = ''
) {
  return async function (dispatch) {
    const json = await axios(
      `/products?category=${category}&order=${order}&name=${name}&isVeggie=${isVeggie}`
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

export function clearState(payload) {
  return {
    type: 'CLEAR_STATE',
    payload,
  };
}

export function addCartProductCustom(burgerCustom) {
  return {
    type: ADD_BURGER_CUSTOM_TO_CART,
    payload: burgerCustom,
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

export function getFavorites(userId, setLoading) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/users/favorites/${userId}`);
      dispatch({
        type: GET_FAVORITES,
        payload: response.data,
      });
      if (setLoading) return setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
}

export function addFavorites(userId, favorites, id) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/users/favorites/${userId}`, {
        favoritesList: [...favorites, id],
      });
      return dispatch({
        type: ADD_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFavorites(userId, favorites, id) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/users/favorites/${userId}`, {
        favoritesList: [...favorites.filter((e) => e !== id)],
      });
      return dispatch({
        type: REMOVE_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addLocalAState(payload) {
  return {
    type: ADD_TO_LOCAL,
    payload,
  };
}

export function getIngredients() {
  return async function (dispatch) {
    const json = await axios('/ingredients');
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
    const json = await axios('/products/' + id);
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

export function getCoupons() {
  return async function (dispatch) {
    try {
      const coupons = await axios('/coupons');
      dispatch({ type: GET_COUPONS, payload: coupons.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateCoupons(data, token) {
  return async function () {
    try {
      await axios.put('/coupons', data, {
        headers: { 'auth-token': token },
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

export function suscriptionNewsLetterEmail(payload) {
  return async function () {
    const json = await axios.post(`/newsletter`, payload);
    return json;
  };
}

export function setLoginState(payload) {
  return async function (dispatch) {
    return dispatch({
      type: SET_LOGIN_STATE,
      payload,
    });
  };
}

export function postMP(data, token) {
  return async function (dispatch) {
    const json = await axios.post(
      'http://localhost:3001/pay/mercadopago',
      {
        cart: data,
      },
      { headers: { 'auth-token': token } }
    );
    return dispatch({
      type: POST_MP,
      payload: json.data,
    });
  };
}

export function setDiscount(array) {
  return {
    type: SET_DISCOUNT,
    payload: array,
  };
}

export function getReviews() {
  return async function (dispatch) {
    const json = await axios.get('/reviews');
    try {
      return dispatch({
        type: 'GET_REVIEWS',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

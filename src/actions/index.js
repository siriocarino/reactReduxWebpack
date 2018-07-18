// import {
//      ADD_ARTICLE,
//      REMOVE_ARTICLE,
//      FETCH_PRODUCTS_BEGIN,
//      FETCH_PRODUCTS_SUCCESS,
//      FETCH_PRODUCTS_FAILURE
// } from "../constants/action-types";

import * as types from '../constants/action-types';


export const addArticle = article => ({
     type: types.ADD_ARTICLE, // ACNTION TYPE
     payload: article
});

export const removeArticle = article => ({
     type: types.REMOVE_ARTICLE,
     payload: article
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
     if (!response.ok) {
       throw Error(response.statusText);
     }
     return response;
   }

// example fetch
export function fetchProducts() {
     return dispatch => {
          dispatch(fetchProductsBegin());
          return fetch("https://www.reddit.com/r/reactjs.json")
               .then(handleErrors)
               .then(res => res.json())
               .then(json => {
                    console.log("json.data")

                    console.log(json.data)
                    dispatch(fetchProductsSuccess(json.data));
                    return json.data;
               })
               .catch(error => dispatch(fetchProductsError(error)));
     };
}
export const fetchProductsBegin = () => ({
     type: types.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
     type: types.FETCH_PRODUCTS_SUCCESS,
     payload: {
          products
     }
});

export const fetchProductsError = error => ({
     type: types.FETCH_PRODUCTS_FAILURE,
     payload: {
          error
     }
});

const addTodo = (text) => ({
     type: types.ADD_TODO,
     payload: {
          text
     }
});

const removeTodo = (id) => ({
     type: types.REMOVE_TODO,
     payload: {
          id
     }
});

const editTodo = (id, text) => ({
     type: types.EDIT_TODO,
     payload: {
          id,
          text
     }
});

const completeTodo = (id) => ({
     type: types.COMPLETE_TODO,
     payload: {
          id
     }
});

const completeAll = () => ({
     type: types.COMPLETE_ALL
});

const clearCompleted = () => ({
     type: types.CLEAR_COMPLETED
});


export const updateText = text => ({
     type: types.UPDATE_TEXT, // ACNTION TYPE
     payload: text
});
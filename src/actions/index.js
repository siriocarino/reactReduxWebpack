// src/js/actions/index.js
import {
     ADD_ARTICLE,
     REMOVE_ARTICLE,
     FETCH_PRODUCTS_BEGIN,
     FETCH_PRODUCTS_SUCCESS,
     FETCH_PRODUCTS_FAILURE
} from "../constants/action-types";



export const addArticle = article => ({
     type: ADD_ARTICLE, // ACNTION TYPE
     payload: article
});

export const removeArticle = article => ({
     type: REMOVE_ARTICLE,
     payload: article
});


// example fetch

export const fetchProductsBegin = () => ({
     type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
     type: FETCH_PRODUCTS_SUCCESS,
     payload: {
          products
     }
});

export const fetchProductsError = error => ({
     type: FETCH_PRODUCTS_FAILURE,
     payload: {
          error
     }
});
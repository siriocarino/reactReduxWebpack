import * as types from "../constants/action-types";
const initialState = {
  cats: [],
  hobbies: []
};


export default function catReducer(state = initialState.cats, action) {  
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action.cats
    default: 
      return state;
  }
}
import {
    GET_ALL_MUSEUMS,
    SEARCH_MUSEUMS
  } from '../actions/actionTypes';
  
  const initialState = {
    museums: [],
  }
  
  const museumReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MUSEUMS: {
        console.log(GET_ALL_MUSEUMS)
        return { ...state, museums: action.payload };
      }
      case SEARCH_MUSEUMS: {
        console.log(SEARCH_MUSEUMS)
        return { ...state, museums: action.payload };
      }
      default:
        return state;
    }
  };
  
  export default productReducer;
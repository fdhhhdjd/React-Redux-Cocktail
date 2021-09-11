import * as actionType from "./Action-Type";
const initialState = {
  cocktails: [],
  cocktail: [],
  loading: false,
  error: null,
};
const cocktailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.FETCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case actionType.FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: payload,
      };
    case actionType.FETCH_COCKTAIL_FAIL:
      return {
        ...state,
        launched: false,
        error: payload,
      };
    case actionType.GET_SINGLE_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_SINGLE_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktail: action.payload,
      };
    case actionType.GET_SINGLE_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cocktailReducer;

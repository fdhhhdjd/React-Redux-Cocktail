import axios from "axios";
import * as actionType from "./Action-Type";
const fetchCockTailStart = () => ({
  type: actionType.FETCH_COCKTAIL_START,
});
const fetchCockTailSuccess = (cocktails) => ({
  type: actionType.FETCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});
const fetchCockTailFail = (error) => ({
  type: actionType.FETCH_COCKTAIL_FAIL,
  payload: error,
});

const fetchSingleCockTailStart = () => ({
  type: actionType.GET_SINGLE_COCKTAIL_START,
});

const fetchSingleCockTailSuccess = (cocktail) => ({
  type: actionType.GET_SINGLE_COCKTAIL_SUCCESS,
  payload: cocktail,
});

const fetchSingleCockTailFail = (error) => ({
  type: actionType.GET_SINGLE_COCKTAIL_FAIL,
  payload: error,
});
export const fetchCocktail = () => {
  return function (dispatch) {
    dispatch(fetchCockTailStart());
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        const cocktail = response.data.drinks;
        dispatch(fetchCockTailSuccess(cocktail));
      })
      .catch((error) => {
        dispatch(fetchCockTailFail(error));
      });
  };
};
export function fetchSingleCocktail(id) {
  return function (dispatch) {
    dispatch(fetchSingleCockTailStart());
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        const cocktail = response.data.drinks;
        dispatch(fetchSingleCockTailSuccess(cocktail));
      })
      .catch((error) => {
        dispatch(fetchSingleCockTailFail(error));
      });
  };
}

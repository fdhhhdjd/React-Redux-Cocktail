import { combineReducers } from "redux";
import cocktailReducer from "./Reducer";

const rootReducer = combineReducers({
  data: cocktailReducer,
});

export default rootReducer;

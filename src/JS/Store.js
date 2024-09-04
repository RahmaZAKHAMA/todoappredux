import { createStore } from "redux";
import CountReducer from "./Reducers";
const store = createStore(CountReducer);
export default store;

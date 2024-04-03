import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);
export default store;

// store is created here, now we needs to provide this to our react app
// we use provide and pass a store prop in it.
// that will be done in app.js

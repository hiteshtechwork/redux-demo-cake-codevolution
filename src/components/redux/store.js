import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
export default store;

// store is created here, now we needs to provide this to our react app
// we use provide and pass a store prop in it.
// that will be done in app.js

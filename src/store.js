import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  loggedIn: false,
  username: "",
  firstName: "",
  profile: {},
  forks: [],
  pullRequests: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "CHANGE_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload
      };
    case "LOGIN":
      return {
        ...state,
        loggedIn: true
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        profile: {}
      };
    case "FORKS":
      return {
        ...state,
        forks: action.payload
      };
    case "PULL_REQUESTS":
      return {
        ...state,
        pullRequests: action.payload
      };
    case "PROFILE":
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
};

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

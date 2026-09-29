import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { counterReducer } from "./Reducers/counter";
import { thunk } from "redux-thunk";
import { fetchReducer } from "./Reducers/fetchapi";
import {persistReducer, persistStore} from "redux-persist";

 //default setting of local storage


 //reduxpersistant : it is a library that saves redux state into persistant storage
 //                  such as local , session , ect...

 //rehydration : the process of restoration of data from previously persisted state back to redux store
const rootReducer  = combineReducers({
    counter : counterReducer,
    fetchapi : fetchReducer
})

const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),

  setItem: (key, value) =>
    Promise.resolve(localStorage.setItem(key, value)),

  removeItem: (key) =>
    Promise.resolve(localStorage.removeItem(key)),
};

const config = {
    key : "redux",
    storage ,
}
const persistedReducer  = persistReducer(config,rootReducer)


const composer = compose(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const store = legacy_createStore(persistedReducer,composer)

export const persistedStorage = persistStore(store)

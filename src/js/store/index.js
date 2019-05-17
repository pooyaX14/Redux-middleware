import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";
// import logger from 'redux-logger';
// import { loadState, saveState }from '../../localStorage'
// const store = createStore(rootReducer);
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedState = loadState();
const store = createStore(
    rootReducer,
    // persistedState,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
    // applyMiddleware(forbiddenWordsMiddleware)
  );
  // store.subscribe(()=>{saveState(store.getState())})
// const initialiseSagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   storeEnhancers(
//     applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
//   )
// );
// initialiseSagaMiddleware.run(apiSaga);

  
export default store;
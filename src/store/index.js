import { applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

const dev =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    dev
    ));
  

export default store;
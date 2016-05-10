import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistState} from 'redux-devtools'
import reducer from '../reducers/reducer'

export function configStore(initialState) {
  let finalCreateStore;

  if (process.env.CLIENT) {
    finalCreateStore = compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),

      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
  } else {
    finalCreateStore = applyMiddleware(thunk)(createStore);
  }

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/reducer', () => {
      const nextReducer = require('../reducers/reducer');
      store.replaceReducer(nextReducer);
    });
  }
  return store
}

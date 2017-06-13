import createStore from './store/createStore';
import reducers from './reducers';


export const store = createStore(reducers, window._initialState);
export { Provider } from './provider/provider.jsx';
export * from './actions';
import createStore from './store/createStore';
import reducers from './reducers';


export const store = createStore(reducers);

export { Provider } from './provider/provider.jsx';

export { actions } from './actions';
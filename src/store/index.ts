import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';

export function configureStore(initialState?: any): Store<any> {
    let middleware = applyMiddleware(thunk);

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    return createStore(rootReducer as any, initialState as any, middleware) as Store<any>;
}

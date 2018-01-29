import 'babel-polyfill';
import { createStore, applyMiddleware, compose,  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const composeEnhancers = composeWithDevTools({
    enhancers
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer,composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

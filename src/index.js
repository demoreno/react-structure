import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './js/routes';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import  store  from './js/store';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppRoutes/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
 
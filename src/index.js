import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import  store  from './store';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppRoutes/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
 
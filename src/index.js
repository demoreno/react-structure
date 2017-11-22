import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import AppRoutes from './js/routes';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./js/layouts/Header";

ReactDOM.render(
    <MuiThemeProvider>
        <AppRoutes/>
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();

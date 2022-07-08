import {StoreType} from './Redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from './Redux/state';





    ReactDOM.render(
        <BrowserRouter>
            <App  store={store}/>
        </BrowserRouter>,

        document.getElementById('root')
    )



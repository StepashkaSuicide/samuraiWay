import state, {subscribe} from './Redux/state';
import {RootStateType} from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>,

        document.getElementById('root')
    )
}
renderTree(state)

subscribe(renderTree)
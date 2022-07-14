import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from './Redux/reduxStore';
import {RootStateType} from './Redux/reduxStore';
import {Provider} from 'react-redux';




let rerenderIntireTree = (state: RootStateType)=> {
    ReactDOM.render(
        <BrowserRouter >
            {/*<Provider  >*/}
                <App  store={store} state={state} dispatch={store.dispatch}/>
            {/*</Provider>*/}
        </BrowserRouter>,



        document.getElementById('root')
    )
}

rerenderIntireTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    rerenderIntireTree(state)
})



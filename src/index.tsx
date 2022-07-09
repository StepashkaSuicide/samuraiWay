import {StoreType} from './Redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from './Redux/state';
import {Provider} from 'react-redux';




let rerenderIntireTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            {/*<Provider store={()=>{}}>*/}
                <App  store={store}/>,
            {/*</Provider>*/}
        </BrowserRouter>,



        document.getElementById('root')
    )
}

rerenderIntireTree()

store.subscribe(()=> {
    rerenderIntireTree()
})



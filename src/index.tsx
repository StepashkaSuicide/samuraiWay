import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';
import {store} from './Redux/reduxStore';
import {Provider} from 'react-redux';


// let rerenderEntireTree = (store: any)=> {
    ReactDOM.render(
        <BrowserRouter >
            <Provider store={store} >
                <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )


// }

// rerenderEntireTree(store.getState())
//
// store.subscribe(()=> {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })



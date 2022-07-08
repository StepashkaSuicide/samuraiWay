import React from 'react';
import s from './App.module.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom'
import {StoreType} from './Redux/state'
// import {RootStateType, changeNewPostText} from './Redux/state';


type PropsType = {
    store: StoreType;
}

const App: React.FC<PropsType> = (props)=> {
    const state = props.store.getState()
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile' element={
                        <Profile
                            dispatch={props.store.dispatch.bind(props.store)}
                            profilePage={state.profilePage}
                            addPostCallBack={props.store.addPost.bind(props.store)}
                            changeNewPostTextCallBack={props.store.changeNewPostText.bind(props.store)}
                        />}/>
                    <Route path='/dialogs*' element={
                        <Dialogs dialogs={props.store._state.dialogsPage.dialogs}
                                 messages={props.store._state.dialogsPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;


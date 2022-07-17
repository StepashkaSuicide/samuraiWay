import React from 'react';
import s from './App.module.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom'
import {ActionsTypes, RootStateType, StoreType} from './Redux/reduxStore'
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';


type PropsType = {
    store: StoreType;
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile' element={
                        <Profile
                            store={props.store}
                            // dispatch={props.store.dispatch.bind(props.store)}
                            // addPostCallBack={props.store.addPost.bind(props.store)}
                            // changeNewPostTextCallBack={props.store.changeNewPostText.bind(props.store)}
                            // profilePage={state.profilePage}
                        />}/>
                    <Route path='/dialogs/*' element={
                        <DialogsContainer
                            store={props.store}
                            // addMessage={props.store.addMessage}
                            // onNewMessageChange={props.store.changeMessageBody}
                            // changeNewMessageBodyCallBack={props.store.changeMessageBody.bind(props.store)}
                            // dispatch={props.store.dispatch.bind(props.store)}
                            // newMessageBody={state.dialogsPage.newMessageBody}
                            // dialogs={props.store._state.dialogsPage.dialogs}
                            // messages={props.store._state.dialogsPage.messages}
                             />}
                        />
                </Routes>
            </div>
        </div>
    );
}


export default App;


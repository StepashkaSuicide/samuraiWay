import React from 'react';
import s from './App.module.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom'
import {addPost} from './Redux/state'
import {RootStateType, changeNewPostText} from './Redux/state';


type PropsType = {
    state: RootStateType;
}

function App(props: PropsType) {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile' element={
                        <Profile
                            profilePage={props.state.profilePage}
                            addPostCallBack={addPost}
                            changeNewPostTextCallBack={changeNewPostText}
                        />}/>
                    <Route path='/dialogs*' element={
                        <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                 messages={props.state.dialogsPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;


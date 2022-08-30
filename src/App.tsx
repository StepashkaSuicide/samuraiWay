import React from 'react';
import s from './App.module.css';
import NavBar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/Login/Login';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

const App = () => {
    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile/' element={<ProfileContainer/>}
                    />
                    <Route path='/profile/:userId/' element={<ProfileContainer/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}
                    />
                    <Route path='/users/*' element={<UsersContainer/>}
                    /> <Route path='/login/' element={<Login />}
                />
                </Routes>
            </div>
        </div>
    );
}

export default App;


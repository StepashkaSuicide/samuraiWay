import React from 'react';
import s from './App.module.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';


const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile/*' element={<ProfileContainer/>}
                    />
                    <Route path='/dialogs/*' element={<DialogsContainer/>}
                    />
                    <Route path='/users/*' element={<UsersContainer/>}
                    />
                </Routes>
            </div>
        </div>
    );
}


export default App;


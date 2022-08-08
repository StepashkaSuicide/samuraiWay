import React from 'react';
import s from './App.module.css';
import NavBar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';


const App = () => {
    return (
        <div className={s.appWrapper}>
            <HeaderContainer />
            <NavBar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path='/profile' element={<ProfileContainer/>}
                    />
                    <Route path='/profile/:userId/' element={<ProfileContainer/>}/>
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


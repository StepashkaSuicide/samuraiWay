import React from 'react';
import s from './App.module.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <Profile/>


        </div>
    );
}

export default App;

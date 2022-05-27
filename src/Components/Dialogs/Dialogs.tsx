import React from 'react';
import s from "./Dialogs.module.css";


const Dialogs = () => {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Jija
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> Hi </div>
                <div className={s.message}> Bye </div>
                <div className={s.message}> Helloy </div>
            </div>

        </div>

    );
};

export default Dialogs;
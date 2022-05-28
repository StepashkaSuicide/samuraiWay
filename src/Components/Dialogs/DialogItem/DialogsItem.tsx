import React from 'react';
import s from "./../Dialogs.module.css";
import {Link} from "react-router-dom";
import {DialogType} from "../../../Redux/state";


const DialogItem =  (props: DialogType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <Link to={path}> {props.name} </Link>
        </div>
    )
};

export default DialogItem

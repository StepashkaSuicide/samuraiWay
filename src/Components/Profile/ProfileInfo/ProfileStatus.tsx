import React, {ChangeEvent, useEffect, useState} from 'react';
import {ProfileType} from '../../../Redux/profileReducer';


export const ProfileStatus = (props: ProfileType) => {
    const [status, setStatus] = useState<string>(props.status)
    const [edit, setEdit] = useState<boolean>(true)


    useEffect(()=> {
        setStatus(props.status)
    },[props.status])

    const statusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const DoubleClickHandler = () => {
        setEdit(!edit)
        props.updateStatus(status)
    }
    return (
        <>
            {edit
                ? <span onDoubleClick={DoubleClickHandler}>{props.status}----- </span>
                : <input
                    onBlur={DoubleClickHandler}
                    value={status}
                    onChange={statusChangeHandler}
                    placeholder={'введите статус...'}
                    autoFocus
                />}
        </>
    );
}
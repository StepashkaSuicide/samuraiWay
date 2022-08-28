import React from 'react';
import {useForm} from 'react-hook-form';
import s from '../Login/ReactHookForm.module.css'
type FormTextAreaType = {
    onSubmit: (data: {textarea?: string}) => void

}


export const FormTextArea: React.FC<FormTextAreaType> = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'})
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>

            <textarea {...register('textarea', {minLength: 1, maxLength: 30,  required: 'ведите текст'})} />
            <div>
                <p className={s.red}>{errors.textarea?.type === 'maxLength' &&  'максимум 30 символов'} </p>
                <p className={s.red}>{errors.textarea?.message} </p>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
};

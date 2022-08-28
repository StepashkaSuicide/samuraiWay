import React from 'react';
import {useForm} from 'react-hook-form';
import s from '../Login/ReactHookForm.module.css'


type FormData = {
    email: string;
    password: string;
    errors: string
    checkbox: boolean
};


export const LoginReactHookForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({mode:'onChange'});
    const onSubmit = (data: FormData) => console.log(data);
    console.log(errors);
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>email:
                <div>
                    <input type="text" autoComplete="current-mail" placeholder="email"
                           {...register('email',
                               {
                                   required: 'Поле обязательно',
                                   max: 30,
                                   min: 6,
                                   pattern: /^\S+@\S+$/i
                               })} />
                    {errors.email && <p className={s.red}>{errors.email.message || 'Не верный емайл!'}</p>}
                </div>
            </label>

            <label>password:
                <div>
                    <input type="password" autoComplete="current-password"
                           placeholder="пароль" {...register('password',
                        {
                            required: 'Логин или пароль не верны', minLength: {
                                value: 5,
                                message: 'Минимум 5 символов'
                            }, max: 20, min: 30, maxLength: 80,
                        })} />
                    {errors.password &&
                    <p className={s.red}>{errors?.password.message || 'Введите хотя бы одну букву!'}</p>}
                </div>
            </label>
            <input type="checkbox"  {...register('checkbox',
                {required: false})} />
            <input type="submit" disabled={!isValid}/>
        </form>

    )
}
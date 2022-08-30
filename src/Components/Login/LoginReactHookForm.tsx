import React from 'react';
import {useForm} from 'react-hook-form';
import s from '../Login/ReactHookForm.module.css'



type LoginHookFormType = {
    onSubmit: (data: FormType) => void
}

export type FormType = {
    email: string;
    password: string;
    rememberMe: boolean
};
export type ff = {
    rememberMe: boolean
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;

};

export const LoginReactHookForm: React.FC<LoginHookFormType> = (props) => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormType>({mode: 'onChange'});

    // console.log(errors);
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
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

                <div>
                    <input type="password" autoComplete="current-password"
                           placeholder="password" {...register('password',
                        {
                            required: 'Логин или пароль не верны', minLength: {
                                value: 5,
                                message: 'Минимум 5 символов'
                            }, max: 20, min: 30, maxLength: 80,
                        })} />
                    {errors.password &&
                        <p className={s.red}>{errors?.password.message || 'Введите хотя бы одну букву!'}</p>}
                </div>
            <input type="checkbox"  {...register('rememberMe',
                {required: false})} />
            <input type="submit" disabled={!isValid}/>
        </form>
    )
}


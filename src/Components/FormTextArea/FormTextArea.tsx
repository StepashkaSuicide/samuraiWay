import React from 'react';
import {useForm} from 'react-hook-form';

type FormTextAreaType = {
    onSubmit: (data: {textarea?: string}) => void

}

export const FormTextArea: React.FC<FormTextAreaType> = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <textarea {...register('textarea', {})} />
            <div>
                <input type="submit" />
            </div>
        </form>
    );
};

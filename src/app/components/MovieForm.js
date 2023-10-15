'use client'
import React, {useState} from 'react';


const MovieForm = ({addMovie}) => {
    const [value,setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();

        addMovie(value);
        setValue("")
    }
    return (
        <form className={'TodoForm'} onSubmit={handleSubmit}>
            <input type={'text'} className={'todo-input'} placeholder={'Nombre película'} onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type={'submit'} className={'todo-btn'}>Agregar</button>
        </form>
    );
};

export default MovieForm;

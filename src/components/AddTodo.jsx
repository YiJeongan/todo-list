import React, { useState } from 'react';
import styles from './style/AddTodo.module.css'

export default function AddTodo({Add}) {
    const [text, setText] = useState('');
    const handleChange=(e)=>{setText(e.target.value)}
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(text.trim().length===0){
            return;
        }
        Add(text)
        setText('')
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                type='text'
                placeholder='Add Todo'
                value={text}
                onChange={handleChange}
                >
            </input>
            <button className={styles.button}>Add</button>
        </form>
    );
}


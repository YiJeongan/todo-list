import React from 'react';
import { IoTrashBin } from "react-icons/io5";
import styles from './style/Todo.module.css'

export default function Todo({todo, onUpdate, onDelete}) {
    const handleChange=(e)=>{
        const status = e.target.checked ? 'completed': 'active';
        onUpdate({...todo, status})
    }
    const handleDelete=()=>{
        onDelete(todo)
    }
    return (
        <li className={styles.todo}> 
            <input 
                className={styles.checkbox}
                type='checkbox' 
                id='checkbox'
                checked={todo.status === 'completed'}
                onChange={handleChange}
                />
            <label htmlFor='checkbox' className={styles.text}>{todo.text}</label>
            <span className={styles.icon}>
            <button className={styles.button}onClick={handleDelete}><IoTrashBin /></button>
            </span>
        </li>
    );
}


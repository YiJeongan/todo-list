import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import styles from './style/TodoList.module.css'



export default function TodoList({filter}) {

    const [todos,setTodos] = useState(readTodosFromLocalStorage())

    const handleAdd=(todo)=>{
        setTodos([...todos,{id:uuidv4(), text: todo, status:'active'}])
    }
    const handleUpdate=(updated)=> //status 변경을 위해
        setTodos(todos.map((t)=>(t.id=== updated.id ? updated: t)))
    const handleDelete=(deleted)=>{
        setTodos(todos.filter((t)=> t.id !== deleted.id))
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    const filtered =  getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item)=>(
                    <Todo 
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}/>

                ))}
            </ul>
            <AddTodo Add={handleAdd}/>               
        </section>
    );
}
function readTodosFromLocalStorage(){
    const todos= localStorage.getItem('todos');
    return todos ? JSON.parse(todos):[];
}

function getFilteredItems(todos, filter){
    if(filter === 'all'){
        return todos;
    }
    return todos.filter((todo)=> todo.status === filter);
}

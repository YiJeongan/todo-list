import React, { useState } from 'react';
import styles from './style/Filter.module.css'
import { useDarkMode } from './context/DarkModeContext';
import {HiMoon, HiSun} from 'react-icons/hi'

export default function Filter({filters, filter, onFilterChange}){
    const {darkMode, toggleDarkMode}= useDarkMode();

    return (
        <header className={styles.header}>
            <button className={styles.toggle}
            onClick={toggleDarkMode}>
                {!darkMode ? <HiMoon/>: <HiSun/>}
            </button>
            <ul className={styles.filters}>
                {filters.map((value, index)=>(
                    <li key={index}>
                        <button className={`${styles.filter} ${
                            filter===value && styles.selected
                        }`} 
                        onClick={()=>onFilterChange(value)}>
                            {value}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}


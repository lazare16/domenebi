import React, { useState, ChangeEvent } from 'react';
import styles from '../styles/dropDown.module.scss'

export default function DropDown() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
            <select value={selectedOption} onChange={handleOptionChange} className={styles.dropDown}>
                <option value="" className={styles.option}> Kancha Co. </option>
            </select>
    )
}
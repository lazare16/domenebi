import React, { useState } from 'react';
import styles from '../styles/SymbolRange.module.scss'; // adding style
import CustomSlider from './Slider'; //implementing cutom slider component

export default function SymbolRange() {
    const [minSymbolRange, setMinSymbolRange] = useState<number>(0); // Seting minimal  value for character range to 0
    const [maxSymbolRange, setMaxSymbolRange] = useState<number>(26); // Setting maximal value for character range to 50000

    // function for handling the input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setMinSymbolRange(newValue);
    };
    
    // function for handling the slider change
    const handleSliderChange = (newRange: number | number[]) => {
        if (Array.isArray(newRange)) {
            const [min, max] = newRange;
            setMinSymbolRange(min);
            setMaxSymbolRange(max);
        }
    };

    return (

        // symbol range container
        <div className={styles.symbolRangeContainer}>
            <form className={styles.symbolRangeInput}>
                <label htmlFor="minSymbolRange">სიმბოლოების რაოდონობა</label>

                {/* inputs container */}
                <div className={styles.moneyInputGroup}>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            id="minSymbolRange"
                            name="minSymbolRange"
                            min="0"
                            max="26"
                            step="100"
                            value={minSymbolRange}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.inputGroup} style={{ marginLeft: '15px' }}>
                        <input
                            type="number"
                            id="maxMoneyRange"
                            name="maxMoneyRange"
                            min="0"
                            max="26"
                            step="100"
                            value={maxSymbolRange}
                            onChange={(event) => {
                                setMaxSymbolRange(parseFloat(event.target.value));
                            }}
                        />
                    </div>
                </div>
            </form>
         
            {/* slider for character range */}
            <CustomSlider
                onChange={handleSliderChange}
                min={0} 
                max={26}
                minDistance={10} />
        </div>
    );
}
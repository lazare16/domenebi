import React, { useState } from 'react';
import styles from '../styles/PriceRange.module.scss'; //adding styiling
import CustomSlider from './Slider'; //slider component implementation 

export default function PriceRange() {
    const [minMoneyRange, setMinMoneyRange] = useState<number>(0); // Set minimal price range value to 0
    const [maxMoneyRange, setMaxMoneyRange] = useState<number>(50000); // Set maximal price range  value to 50000

    // function for changing the minimal price range
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setMinMoneyRange(newValue);
    };

    // function for managing slider position
    const handleSliderChange = (newRange: number | number[]) => {
        if (Array.isArray(newRange)) {
            const [min, max] = newRange;
            setMinMoneyRange(min);
            setMaxMoneyRange(max);
        }
    };

    return (

        // container for money range 
        <div className={styles.moneyRangeContainer}>
            <form className={styles.moneyRangeInput}>
                <label htmlFor="minMoneyRange">ფასი</label>
                
                 {/* money input container */}
                <div className={styles.moneyInputGroup}>

                    {/* container for adding GEL signs to the inputs */}
                    <div className={styles.inputGroup}>
                        <span className={styles.inputGroupAddon}>₾</span>
                        <input
                            type="number"
                            id="minMoneyRange"
                            name="minMoneyRange"
                            min="0"
                            max="1000000"
                            step="100"
                            value={minMoneyRange}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={styles.inputGroup} style={{ marginLeft: '15px' }}>
                        <span className={styles.inputGroupAddon}>₾</span>
                        <input
                            type="number"
                            id="maxMoneyRange"
                            name="maxMoneyRange"
                            min="0"
                            max="1000000"
                            step="100"
                            value={maxMoneyRange}
                            onChange={(event) => {
                                setMaxMoneyRange(parseFloat(event.target.value));
                            }}
                        />
                    </div>
                </div>
            </form>
            
            {/* custom slider component */}
            <CustomSlider
                onChange={handleSliderChange}
                min={0} // Pass min prop here
                max={50000}
                minDistance={10} />
        </div>
    );
}



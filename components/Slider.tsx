import React from 'react';
import Slider from 'rc-slider'; //importing react slider library for importing slider
import 'rc-slider/assets/index.css'; // Import the default rc-slider styles
import styles from '../styles/Slider.module.scss'; // Importing  custom styles

interface CustomSliderProps {
    onChange: (newRange: number | number[]) => void;
    minDistance: number;
    min: number; // Adding the min prop
    max: number; // Adding the max prop
}

export default function CustomSlider(props: CustomSliderProps) {
    const { min, max } = props; 

    const [range, setRange] = React.useState<number | number[]>([min, max]); 

    // function for handling the slider range
    const handleSliderChange = (newRange: number | number[]) => {
        if (Array.isArray(newRange)) {
            const [minValue, maxValue] = newRange;
            if (minValue >= min && maxValue <= max) { 
                setRange(newRange);
                props.onChange(newRange);
            }
        }
    };

    return (

        // custom slider container
        <div className={styles['custom-slider-container']}>

            {/* slider component */}
            <Slider
                className={styles['custom-slider-horizontal']}
                range
                value={range as number[]}
                onChange={handleSliderChange}
                min={min} // Use min from props
                max={max} // Use max from props
                step={100}
                trackStyle={{ background: '#99CC66', position: 'relative', height: '2px' }} //styling for slider component
                handleStyle={{
                    backgroundColor: 'white',
                    border: '2px solid #99CC66',
                    width: '25px',
                    height: '25px',
                    position: 'absolute',
                    bottom: '-5px',
                }}
                railStyle={{ background: '#E5E5ED', height: '2px' }}
            />
        </div>
    );
}






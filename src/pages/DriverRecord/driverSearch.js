import * as React from 'react'
import { useState } from 'react'

const DriverSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form>
            <label>Driver's Name:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <p>Has signed?</p>
            <p>--add confirmation here-- {inputValue}</p>
        </form>
    )
};

export default DriverSearch;
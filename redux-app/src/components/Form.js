import React, { useState } from 'react';
import { getData } from '../actions/dataActions';

const Form = () => {
    const [year, setYear] = useState('')
    const [round, setRound] = useState('')
    
    const handleYear = (event) => {
        setYear(event.target.value);
    }

    const handleRound = (event) => {
        setRound(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getData(year, round);
    }

    return (
        <form onSubmit={getData(year, round)}>
            <label>Year:</label>
            <select
                value={value}
                onChange={handleYear}
            >
                <option value=''></option>
            </select>
            <label for='round'>Round:</label>
            <select
                value={value}
                onChange={handleRound}
            >
                <option value=''></option>
            </select>
            
            <button type='submit'>Get Results</button>
        </form>
    )
}

export default Form;
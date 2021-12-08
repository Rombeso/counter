import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Counter";

type datePropsType = {
    data: number
}

function App() {
    let [date, setDate] = useState(1)


    const changeDate = (value: number)=> {
        let inc = value
        if (inc !== 0) {
            date = date + inc
        } else {
         date = 1
        }
        return (
            setDate(date)
        )

    }

    return (
        <div className="App">
            <header className='App-header'>
                    <Counter
                        date={date}
                        changeDate={changeDate}
                    />
            </header>
        </div>
    );
}

export default App;

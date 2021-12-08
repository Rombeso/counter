import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

type datePropsType = {
    data: number
}

function App() {
    let [date, setDate] = useState(1)


    const changeDate = (value: number)=> {
        let inc = value
        setDate(inc !== 0 ? date = date + inc : date = 1)
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

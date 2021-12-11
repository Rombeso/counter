import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";


function App() {
    let [date, setDate] = useState(0)
    let [minValue, setMinValue] = useState(0)
    const changeDate = (minValue: number)=> {
        setDate(date === minValue ? date = date + 1 : date = minValue)
    }

    return (
        <div className="App">
            <header className='App-header'>
                <Settings changeDate={changeDate}
                          minValue={minValue}
                          setMinValue={setMinValue}
                />
                <Counter
                        date={date}
                        setDate={setDate}
                        changeDate={changeDate}
                        minValue={minValue}

                    />
            </header>
        </div>
    );
}

export default App;

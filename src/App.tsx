import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import classes from "./App.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {changeData} from "./redux/counter-reducer";

function App() {
    // let [date, setDate] = useState(0)
    // let [minValue, setMinValue] = useState(0)
    // let [maxValue, setMaxValue] = useState(0)
    // let [errorSettings, setErrorSettings] = useState<string | null>(null)
    // let [error, setError] = useState<string | null>(null)
    // let [pressSet, setPressSet] = useState<string | null>(null)

    // const data = useSelector<AppStateType, number>(state => state.counter.data)
    // const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    // const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    //
    // const dispatch = useDispatch()
    //
    // const changeDate = (minValue: number) => {
    //     dispatch(changeData(minValue))
    //     // setDate(date === minValue ? date : date = minValue)
    // }

    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])
    //
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    // }, [minValue])

    return (
        <div className={classes.app}>
            <header className={classes.appHeader}>
                <Settings
                    // changeDate={changeDate}
                    //       minValue={minValue}
                    //       setMinValue={setMinValue}
                    //       setMaxValue={setMaxValue}
                    //       maxValue={maxValue}
                    //       setErrorSettings={setErrorSettings}
                    //       errorSettings={errorSettings}
                    //       setPressSet={setPressSet}
                    //       pressSet={pressSet}
                />
                <Counter
                    // date={data}
                    // setDate={setDate}
                    // changeDate={changeDate}
                    // minValue={minValue}
                    // maxValue={maxValue}
                    // setError={setError}
                    // error={error}
                    // errorSettings={errorSettings}
                    // pressSet={pressSet}
                />
            </header>
        </div>
    );
}

export default App;

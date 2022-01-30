import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";
import classes from "./Settings.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {changeData, setError, setErrorSettings, setMaxValue, setMinValue, setPressSet} from "./redux/counter-reducer";

type datePropsType = {
    // changeDate: (minValue: number) => void
    // minValue: any
    // setMinValue: (minValue: any) => void
    // setMaxValue: (minValue: any) => void
    // maxValue: any
    // setErrorSettings: (value: string | null) => void
    // errorSettings: string | null
    // pressSet: string | null
    // setPressSet: (value: string | null) => void
}

export const Settings = (props: datePropsType) => {
    // const data = useSelector<AppStateType, number>(state => state.counter.data)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const errorSettings = useSelector<AppStateType, string | null>(state => state.counter.errorSettings)
    // const pressSet = useSelector<AppStateType, string | null>(state => state.counter.pressSet)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     let tMaxValue = localStorage.getItem('maxValue');
    //     if (tMaxValue) {
    //         let lsMaxValue = JSON.parse(tMaxValue)
    //         props.setMaxValue(lsMaxValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let tMinValue = localStorage.getItem('minValue');
    //     if (tMinValue) {
    //         let lsMinValue = JSON.parse(tMinValue)
    //         props.setMinValue(lsMinValue)
    //     }
    // }, [])

    const onClickButton = (minValue: any, maxValue: any) => {
        dispatch(changeData(minValue))
        dispatch(setMaxValue(maxValue))
        // props.changeDate(minValue)
        // props.setMaxValue(maxValue)
        pressSetClear()
    }
    const onChangeHandlerMin = (minValue: number) => {
        dispatch(setMinValue(minValue))
        // props.setMinValue(value)
        setPressSettings()
    }
    const onChangeHandlerMax = (maxValue: number) => {
        dispatch(setMaxValue(maxValue))
        // props.setMaxValue(value)
        setPressSettings()
    }

    if (minValue >= maxValue || minValue < 0) {
        dispatch(setErrorSettings("Incorrect value!"))
    } else {
        dispatch(setErrorSettings(null))
    }

    // if (props.minValue >= props.maxValue || props.minValue < 0) {
    //     props.setErrorSettings("Incorrect value!");
    // } else {
    //     props.setErrorSettings(null);
    // }

    const setPressSettings = () => {
        dispatch(setPressSet('enter values and press "set"'))
        // props.setPressSet('enter values and press "set"')
    }

    const pressSetClear = () => {
        dispatch(setPressSet(null))
        dispatch(setError(null))
        // props.setPressSet(null)
        // console.log(pressSet)
    }

    return (
        <div className={classes.square}>
            <div className={classes.squareMin + " " + classes.squareMinTop}>
                <div className={classes.divSettings}>
                    <span className={classes.spanSettings}>max value:</span>
                    <Input onChangeHandler={onChangeHandlerMax} value={maxValue} className={classes.inputSettings} />
                </div>
                <div className={classes.divSettings}>
                    <span className={classes.spanSettings}>min value:</span>
                    <Input onChangeHandler={onChangeHandlerMin} value={minValue} className={errorSettings ? classes.errorSettings: classes.inputSettings} />
                </div>
            </div>
            <div className={classes.squareMin}>
                <Button className={classes.buttonSettings} error={errorSettings} name='set'
                        callBack={() => onClickButton(minValue, maxValue)}/>
            </div>
        </div>
    )
}
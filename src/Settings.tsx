import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";
import classes from "./Settings.module.css"

type datePropsType = {
    changeDate: (minValue: number) => void
    minValue: any
    setMinValue: (minValue: any) => void
    setMaxValue: (minValue: any) => void
    maxValue: any
    setErrorSettings: (value: string | null) => void
    errorSettings: string | null
    pressSet: string | null
    setPressSet: (value: string | null) => void

}

export const Settings = (props: datePropsType) => {

    useEffect(() => {
        let tMaxValue = localStorage.getItem('maxValue');
        if (tMaxValue) {
            let lsMaxValue = JSON.parse(tMaxValue)
            props.setMaxValue(lsMaxValue)
        }
    }, [])

    useEffect(() => {
        let tMinValue = localStorage.getItem('minValue');
        if (tMinValue) {
            let lsMinValue = JSON.parse(tMinValue)
            props.setMinValue(lsMinValue)
        }
    }, [])

    const onClickButton = (minValue: any, maxValue: any) => {
        props.changeDate(minValue)
        props.setMaxValue(maxValue)
        pressSetClear()
    }
    const onChangeHandlerMin = (value: number) => {
        props.setMinValue(value)
        pressSet()
    }
    const onChangeHandlerMax = (value: number) => {
        props.setMaxValue(value)
        pressSet()
    }

    if (props.minValue >= props.maxValue || props.minValue < 0) {
        props.setErrorSettings("Incorrect value!");
    } else {
        props.setErrorSettings(null);
    }

    const pressSet = () => {
        props.setPressSet('enter values and press "set"')
    }

    const pressSetClear = () => {
        props.setPressSet(null)
    }


    return (
        <div className={classes.square}>
            <div className={classes.squareMin + " " + classes.squareMinTop}>
                <div className={classes.divSettings}>
                    <span className={classes.spanSettings}>max value:</span>
                    <Input onChangeHandler={onChangeHandlerMax} value={props.maxValue} className={classes.inputSettings} />
                </div>
                <div className={classes.divSettings}>
                    <span className={classes.spanSettings}>min value:</span>
                    <Input onChangeHandler={onChangeHandlerMin} value={props.minValue} className={props.errorSettings ? classes.errorSettings: classes.inputSettings} />
                </div>
            </div>
            <div className={classes.squareMin}>
                <Button className={classes.buttonSettings} error={props.errorSettings} name='set'
                        callBack={() => onClickButton(props.minValue, props.maxValue)}/>
            </div>
        </div>
    )
}
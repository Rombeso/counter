import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Components/Button";

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
    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
        pressSet()
    }
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
        pressSet()
    }

    if (props.minValue >= props.maxValue) {
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
        <div className='Square'>
            <div className='SquareMin, SquareMinTop'>
                <div className='divSettings'>
                    <span className='SpanSettings'>max value:</span>
                    <input className='InputSettings' type='number'
                           onChange={onChangeHandlerMax}
                           value={props.maxValue}
                    />
                </div>
                <div className='divSettings'>
                    <span className='SpanSettings'>min value:</span>
                    <input className='InputSettings' type='number'
                           onChange={onChangeHandlerMin}
                           value={props.minValue}
                    />
                </div>
            </div>
            <div className='SquareMin'>
                <Button error={props.errorSettings} name='set'
                        callBack={() => onClickButton(props.minValue, props.maxValue)}/>
            </div>
        </div>
    )
}
import React, {ChangeEvent, useState} from "react";
import {Button} from "./Components/Button";

type datePropsType = {
    changeDate:(minValue: number) => void
    minValue: any
    setMinValue:(minValue: any)=> void
}

export const Settings = (props:datePropsType) => {


    let [maxValue, setMaxValue] = useState('0')

    const onClickButton = (minValue:any) => {
        props.changeDate(+minValue)
    }

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value) {
            props.setMinValue(e.currentTarget.value)
        }
       }
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value) {
            setMaxValue(e.currentTarget.value)
        }
    }

    return (
        <div className='Square'>
            <div className='SquareMin, SquareMinTop'>
                <div className='divSettings'>
                    <span className='SpanSettings'>max value:</span>
                    <input className='InputSettings' type='number'
                           onChange={onChangeHandlerMax}
                    />
                </div>
                <div className='divSettings'>
                    <span className='SpanSettings'>min value:</span>
                    <input className='InputSettings' type='number'
                           onChange={onChangeHandlerMin}
                    />
                </div>
            </div>
            <div className='SquareMin'>
                <Button name='set' callBack={()=>onClickButton(props.minValue)} />
            </div>
        </div>
    )
}
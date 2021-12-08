import React from "react";
import {Button} from "./Components/Button";

export const Settings = () => {
    const onClickHandler = () => {
        console.log('Settings!')
    }

    return (
        <div className='Square'>
            <div className='SquareMin, SquareMinTop'>
                <div className='divSettings'>
                    <span className='SpanSettings'>max value:</span>
                    <input className='InputSettings' type='number'/>
                </div>
                <div className='divSettings'>
                    <span className='SpanSettings'>min value:</span>
                    <input className='InputSettings' type='number'/>
                </div>
            </div>
            <div className='SquareMin'>
                <Button name='set' callBack={onClickHandler}/>
            </div>
        </div>
    )
}
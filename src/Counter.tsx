import React, {useState} from "react";
import {Button} from "./Components/Button";

type DateTypeProps = {
    date:number
    setDate:(value:number)=>void
    changeDate: (minValue: any)=>void
    minValue: any
}
export const Counter =(props: DateTypeProps)=> {

    const onClickHandler = ()=> {
        let newDate = props.date + 1;
        props.setDate(newDate)
    }

    const onClickReset = () => {
        props.changeDate(+props.minValue)
        console.log(props.minValue)

    }

    return (
        <div className='Square'>
            <div className='SquareMin, SquareMinTop'>
                <span className={props.date === 5 ? 'error' : ''}>{props.date}</span>
            </div>
            <div className='SquareMin'>
                <Button callBack={onClickHandler} name='inc' date={props.date} />
                <Button name='reset' callBack={()=>onClickReset()}/>
            </div>
        </div>
    )
}
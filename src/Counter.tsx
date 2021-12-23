import React, {useState} from "react";
import {Button} from "./Components/Button";
import classes from "./Counter.module.css"

type DateTypeProps = {
    date:number
    setDate:(value:number)=>void
    changeDate: (minValue: any)=>void
    minValue: any
    maxValue: any
    setError: (value:string | null)=>void
    error: string | null
    errorSettings: string | null
    pressSet: string | null
}
export const Counter =(props: DateTypeProps)=> {
    let newDate = props.date + 1;

    const onClickHandler = ()=> {
        props.setDate(newDate)
        checkError()
    }

    const onClickReset = () => {
        props.changeDate(+props.minValue)
        console.log(props.minValue)
        checkError()
    }

    const checkError =()=> {
        if (newDate === props.maxValue) {
            props.setError("error");
        } else {
            props.setError(null);
        }

    }

    console.log(props.date)
    console.log(props.pressSet)
    console.log(props.errorSettings)

    return (
        <div className={classes.square}>
            <div className={classes.squareMin + " " + classes.squareMinTop}>
                <span className={props.date === props.maxValue ? classes.error : '' || props.errorSettings ? classes.errorSettings : '' || props.pressSet ? classes.pressSet : ''}>
                    {!props.pressSet && !props.errorSettings ? props.date : props.pressSet && !props.errorSettings ? props.pressSet : props.date || props.errorSettings ? props.errorSettings : props.date}
                </span>
            </div>
            <div className={classes.squareMin}>
                <Button className={classes.buttonSettings} error={props.error || props.pressSet} callBack={onClickHandler} name='inc' date={props.date} />
                <Button className={classes.buttonSettings} error={props.pressSet} name='reset' callBack={()=>onClickReset()}/>
            </div>
        </div>
    )
}
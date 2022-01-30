import React, {useState} from "react";
import {Button} from "./Components/Button";
import classes from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {changeData, setData, setError, setErrorSettings, setPressSet} from "./redux/counter-reducer";

type DateTypeProps = {
    // date:number
    // setDate:(value:number)=>void
    // changeDate: (minValue: any)=>void
    // minValue: any
    // maxValue: any
    // setError: (value:string | null)=>void
    // error: string | null
    // errorSettings: string | null
    // pressSet: string | null
}
export const Counter =(props: DateTypeProps)=> {
    const data = useSelector<AppStateType, number>(state => state.counter.data)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const errorSettings = useSelector<AppStateType, string | null>(state => state.counter.errorSettings)
    const pressSet = useSelector<AppStateType, string | null>(state => state.counter.pressSet)
    const error = useSelector<AppStateType, string | null>(state => state.counter.error)

    const dispatch = useDispatch()

    let newDate = data + 1;

    const onClickHandler = ()=> {
        dispatch(setData(newDate))
        // props.setDate(newDate)
        checkError()
    }

    const onClickReset = () => {
        dispatch(changeData(minValue))
        // props.changeDate(+props.minValue)
        // console.log(props.minValue)
        checkError()
    }

    const checkError =()=> {
        if (newDate === maxValue) {
            dispatch(setError("error"));
            // props.setError("error");
        } else {
            dispatch(setError(null))
            // props.setError(null);
        }

    }

    // console.log(props.date)
    // console.log(props.pressSet)
    // console.log(props.errorSettings)

    return (
        <div className={classes.square}>
            <div className={classes.squareMin + " " + classes.squareMinTop}>
                <span className={data === maxValue ? classes.error : '' || errorSettings ? classes.errorSettings : '' || pressSet ? classes.pressSet : ''}>
                    {!pressSet && !errorSettings ? data : pressSet && !errorSettings ? pressSet : data || errorSettings ? errorSettings : data}
                    {/*<span className={props.date === props.maxValue ? classes.error : '' || props.errorSettings ? classes.errorSettings : '' || props.pressSet ? classes.pressSet : ''}>*/}
                    {/*{!props.pressSet && !props.errorSettings ? props.date : props.pressSet && !props.errorSettings ? props.pressSet : props.date || props.errorSettings ? props.errorSettings : props.date}*/}
                </span>
            </div>
            <div className={classes.squareMin}>
                <Button className={classes.buttonSettings} error={error || pressSet} callBack={onClickHandler} name='inc' date={data} />
                <Button className={classes.buttonSettings} error={pressSet} name='reset' callBack={()=>onClickReset()}/>
                {/*<Button className={classes.buttonSettings} error={props.error || props.pressSet} callBack={onClickHandler} name='inc' date={props.date} />*/}
                {/*<Button className={classes.buttonSettings} error={props.pressSet} name='reset' callBack={()=>onClickReset()}/>*/}
            </div>
        </div>
    )
}
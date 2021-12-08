import React, {useState} from "react";

type dateTypeProps = {
    date:number;
    changeDate:(value: number) => void

}
export const Counter =(props: dateTypeProps)=> {

    const onClickIncHandler = ()=> {
        props.changeDate(1)
    }

    const onClickResetHandler = ()=> {
        props.changeDate(0)
    }

    return (
        <div className='Square'>
            <div className='SquareMin, SquareMinTop'>
                <span className={props.date === 5 ? 'error' : ''}>{props.date}</span>
            </div>
            <div className='SquareMin'>
                <button disabled={props.date === 5} onClick={()=>{onClickIncHandler()} }>inc</button>
                <button onClick={()=>{onClickResetHandler()}}>reset</button>
            </div>
        </div>
    )
}
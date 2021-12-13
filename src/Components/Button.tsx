import React from "react";

type PropsType = {
    callBack: ()=>void
    name: string
    date?: number
    maxValue?: any
    error?: string | null
}

export const Button = (props: PropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={!!props.error} onClick={onClickHandler}>{props.name}</button>
    )
}
// <button disabled={props.date ? props.date == props.maxValue : false} onClick={onClickHandler}>{props.name}</button>

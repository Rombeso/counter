import React from "react";

type PropsType = {
    callBack: ()=>void
    name: string
    date?: number
}

export const Button = (props: PropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.date ? props.date === 5 : false} onClick={onClickHandler}>{props.name}</button>
    )
}
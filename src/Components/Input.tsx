import React, {ChangeEvent} from "react";

type PropsType = {
    onChangeHandler: (value:number) => void
    value: any
    className?: any
}

export const Input = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandler(+e.currentTarget.value)
    }
    return (
        <input className={props.className} type='number'
               onChange={onChangeHandler}
               value={props.value}
        />
    )

}
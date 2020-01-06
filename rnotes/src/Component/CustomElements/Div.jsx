import React from "react"
import classes from "../AddNote/AddNote.module.css";

export const Div = ({meta, input}) => {
    if (input.value.length > 20)
        return (
            <div className={classes.errorContainer}>
                <input className={classes.formInput} placeholder={"Введите заметку"} {...input}/>
                <span className={classes.error}>{console.log(input.value.length)}</span>
            </div>
        )
    return  <div {...input}> TECT</div>
}

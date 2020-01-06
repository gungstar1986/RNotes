import React from "react"
import classes from "../AddNote/AddNote.module.css"

export const Button = ({input}) => {
    if (input.value.length > 55 ) return <button className={classes.buttonDisabled} disabled={true}>Добавить</button>;
    if (input.value) return <button className={classes.button} disabled={false}>Добавить</button>;
    return <button className={classes.buttonDisabled} disabled={true}>Добавить</button>
};

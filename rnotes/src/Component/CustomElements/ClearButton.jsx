import React from "react"
import classes from "../AddNote/AddNote.module.css"

export const ClearButton = ({input, notes}) => {
    console.log(notes)
    if (notes) return <button  onClick={console.log(notes)} disabled={false}>Очистить</button>;
    return <button className={classes.clear} disabled={true}>Очистить</button>
};

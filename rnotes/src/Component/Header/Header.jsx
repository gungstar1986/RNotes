import React from "react";
import classes from "./Header.module.css"


const Header = (props) => {
    const unDone = props.list.filter(item => !item.done).length;
    const done = props.list.filter(item => item.done).length;
    return (
        <header className={classes.headerContainer}>
            <div className={classes.logo}><h3>React Notes</h3></div>
            <div className={classes.activities}>Всего: {props.list.length}, Выполнено: {unDone}, Осталось: {done} </div>
        </header>
    )
};
export default Header

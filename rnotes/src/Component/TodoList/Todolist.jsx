import React from 'react'
import classes from "./Todolist.module.css"


const TodoList = ({list, ...props}) => {

    const markAsDone = (id, bool) => props.setDoneLabel(id, bool);
    const setImportant = (bool, id) => props.setImportantLabel(bool, id);
    const delNote = (id) => props.deleteLabel(id);

    const todoList = list.map(item => item.important
        ? <li className={classes.important} key={item.id}> {
            item.done
                ? <span className={classes.done} onClick={() => markAsDone(item.id, false)}>{item.label}</span>
                : <span className={classes.notDone} onClick={() => markAsDone(item.id, true)}>{item.label}</span>
        }
            <button onClick={() => delNote(item.id)}>Delete</button>
            <button onClick={() => setImportant(false, item.id)}>Important</button>
        </li>
        : <li className={classes.notImportant} key={item.id}> {
            item.done
                ? <span className={classes.done} onClick={() => markAsDone(item.id, false)}>{item.label}</span>
                : <span className={classes.notDone} onClick={() => markAsDone(item.id, true)}>{item.label}</span>
        }
            <button onClick={() => delNote(item.id)}>Delete</button>
            <button onClick={() => setImportant(true, item.id)}>Important</button>
        </li>);

    return <div>{todoList}</div>
};


export default TodoList

import React from 'react'
import classes from "./Todolist.module.css"
import del from "../../Img/recycle.png"
import important from "../../Img/important.png"
import edit from "../../Img/edit.png"




const TodoList = props => {

    const {list, tempText} = props;
    const setEditMode = (id, bool, text) => {
        props.editLabel(id, bool);
        props.editModeOn(text)
    };
    const newTextNote = (e) => {
        props.editModeOn(e.target.value)
    };
    const markAsDone = (id, bool) => props.setDoneLabel(id, bool);
    const setImportant = (id, bool) => props.setImportantLabel(id, bool);
    const setEditedNote = (id) => {
        props.editedMode(tempText, id)
    };
    const delNote = (id) => props.deleteLabel(id);

    const todoList = list.map((item, id) => {
        if (item.edit) {
            return <div key={id} className={classes.container}>
                <div className={classes.important}>
                    <div className={classes.editArea}><input type="text"
                                                             onChange={newTextNote}
                                                             value={tempText}
                                                             onBlur={() => setEditedNote(item.id)}
                                                             autoFocus={true}/></div>
                    <div className={classes.buttons}>
                        <div className={classes.editNoteDiv}><img src={edit} alt=""/></div>
                        <button className={classes.deleteNote} onClick={() => delNote(item.id)}><img src={del} alt=""/>
                        </button>
                        <button className={classes.buttImport} onClick={() => setImportant(false, item.id)}><img
                            src={important} alt=""/></button>
                    </div>
                </div>
            </div>
        }
        if (!item.important) {
            return <div className={classes.container} key={id}>
                <span className={item.done ? classes.done : classes.notDone}
                      onClick={() => markAsDone(item.id, !item.done)}>{item.label}</span>
                <div className={classes.buttons}>
                    <button className={classes.editNote} onClick={() => setEditMode(item.id, true, item.label)}><img
                        src={edit} alt=""/></button>
                    <button className={classes.deleteNote} onClick={() => delNote(item.id)}><img src={del} alt=""/>
                    </button>
                    <button className={classes.buttImport} onClick={() => setImportant(true, item.id)}><img
                        src={important} alt=""/></button>
                </div>
            </div>
        }
        if (item.important) {
            return <div key={id} className={classes.container}>
                <div className={classes.important}>
                    <div className={item.done ? classes.done : classes.notDone}
                         onClick={() => markAsDone(item.id, !item.done)}>{item.label}</div>
                    <div className={classes.buttons}>
                        <button className={classes.editNote}
                                onClick={() => setEditMode(item.id, !item.edit, item.label)}><img src={edit} alt=""/>
                        </button>
                        <button className={classes.deleteNote} onClick={() => delNote(item.id)}><img src={del} alt=""/>
                        </button>
                        <button className={classes.buttImport} onClick={() => setImportant(false, item.id)}><img
                            src={important} alt=""/></button>
                    </div>
                </div>
            </div>
        }
    });
    return <div>{todoList}</div>
};

export default TodoList;




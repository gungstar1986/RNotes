import React from 'react'
import classes from "./Todolist.module.css"


export default class TodoList extends React.Component {
    markAsDone = (id, bool) => this.props.setDoneLabel(id, bool);
    setImportant = (bool, id) => this.props.setImportantLabel(bool, id);
    delNote = (id) => this.props.deleteLabel(id);

    render() {
        const {list} = this.props;
        const todoList = list.map(item => item.important
            ? <div className={classes.container}>
                <div className={classes.important} key={item.id}> {
                    item.done
                        ? <div className={classes.done}
                                onClick={() => this.markAsDone(item.id, false)}>{item.label}
                            </div>
                        : <div className={classes.notDone}
                                onClick={() => this.markAsDone(item.id, true)}>{item.label}</div>
                }
                    <div className={classes.buttons}>
                        <button className={"btn btn-danger"} onClick={() => this.delNote(item.id)}>Удалить</button>
                        <button className={classes.buttImport} onClick={() => this.setImportant(false, item.id)}>Неважно</button>
                    </div>
                </div>
            </div>
            : <div className={classes.container} key={item.id}> {
                item.done
                    ? <span className={classes.done} onClick={() => this.markAsDone(item.id, false)}>{item.label}</span>
                    :
                    <span className={classes.notDone} onClick={() => this.markAsDone(item.id, true)}>{item.label}</span>
            }
                <div className={classes.buttons}>
                    <button className={"btn btn-danger"} onClick={() => this.delNote(item.id)}>Удалить</button>
                    <button className={classes.buttImport} onClick={() => this.setImportant(true, item.id)}>Важно
                    </button>
                </div>
            </div>);

        return <div>{todoList}</div>
    }

};




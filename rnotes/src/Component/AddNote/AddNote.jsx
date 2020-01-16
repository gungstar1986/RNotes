import React from "react";
import {Field, reduxForm} from "redux-form";
import {Button} from "../CustomElements/Button";
import classes from "./AddNote.module.css";



const AddNoteForm = ({tempNote, notes, clear, ...props}) => {
    return (
        <div className={classes.formContainer}>
            <form onSubmit={props.handleSubmit}>
                <Field className={classes.formInput} placeholder={"Введите заметку"} name='label' component="input"/>
                <Field name='label' component={Button}/>
            </form>
            <button className={classes.clear} onClick={clear}>Удалить все заметки</button>
        </div>
    )
};

const AddNoteReduxForm = reduxForm({form: "addnote"})(AddNoteForm);


const AddNote = props => {

    const submit = note => {
        props.postDataToTheServer(note.label);
        note.label = ""
    };
    return (
        <AddNoteReduxForm clear={props.deleteAllNotes} notes={props.notes} isActive={props.isActive} onSubmit={submit}/>
    )
};


export default AddNote

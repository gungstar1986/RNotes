import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addLabel} from "../../Redux/todolist-reducer";
import {Button} from "../CustomElements/Button";
import classes from "./AddNote.module.css";


const AddNoteForm = ({tempNote, ...props}) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field className={classes.formInput} placeholder={"Введите заметку"} name='label' component="input"/>
            <Field name='label' component={Button}/>
        </form>
    )
};
const AddNoteReduxForm = reduxForm({form: "addnote"})(AddNoteForm);
const AddNote = props => {
    const submit = note => {
        props.addLabel(note.label);
        note.label = ""
    };
    return (
        <AddNoteReduxForm isActive={props.isActive} onSubmit={submit}/>
    )
};
const mapDispatchToProps = {
    addLabel
};

export default connect(null, mapDispatchToProps)(AddNote)

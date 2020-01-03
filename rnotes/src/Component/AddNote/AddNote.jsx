import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addLabel} from "../../Redux/todolist-reducer";


const AddNoteForm = ({tempNote, ...props}) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='label' placeholder="Add item" component={'input'}/>
            <button>Add</button>
        </form>
    )
};
const AddNoteReduxForm = reduxForm({form: "addnote"})(AddNoteForm);
const AddNote = props => {
    const submit = note => {
        props.addLabel(note.label);
        note.label =''
    };
    return (
        <AddNoteReduxForm onSubmit={submit}/>
    )
};
const mapDispatchToProps = {
    addLabel
}
export default connect(null, mapDispatchToProps)(AddNote)

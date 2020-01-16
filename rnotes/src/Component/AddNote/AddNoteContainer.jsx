import React from "react";
import AddNote from "./AddNote";
import {connect} from "react-redux";
import {deleteAllNotes, postDataToTheServer} from "../../Redux/todolist-reducer";


const AddNoteContainer = props => {
    return (
        <div>
            <AddNote {...props}/>
        </div>
    )
};

const mapStateToProps = state => ({
    list: state.todoList.list,
    notes: state.todoList.list.length
});
const mapDispatchToProps = {
    postDataToTheServer,
    deleteAllNotes
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNoteContainer)


import React from "react";
import AddNote from "./AddNote";
import {connect} from "react-redux";
import {addLabel} from "../../Redux/todolist-reducer";


const AddNoteContainer = props => {
    return (
        <div>
            <AddNote {...props}/>
        </div>
    )
};
const mapDispatchToProps = {
    addLabel,
}
export default connect(null, mapDispatchToProps)(AddNoteContainer)


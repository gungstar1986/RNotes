import React from 'react'
import {connect} from "react-redux";
import {deleteLabel, setDoneLabel, setImportantLabel} from "../../Redux/todolist-reducer";
import TodoList from "./Todolist";


const TodoListContainer = props => {
    return (
        <div>
            <ul>
                <TodoList {...props}/>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        list: state.todoList.list
    }
};
const mapDispatchToProps = {
    deleteLabel,
    setImportantLabel,
    setDoneLabel
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

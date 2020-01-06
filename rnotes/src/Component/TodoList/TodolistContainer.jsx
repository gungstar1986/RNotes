import React from 'react'
import {connect} from "react-redux";
import {deleteLabel, setDoneLabel, setImportantLabel} from "../../Redux/todolist-reducer";
import TodoList from "./Todolist";
import withFilter from "../Filter/withFilter";


class TodoListContainer extends React.Component {

    render() {
        return (
            <div>
                <TodoList {...this.props}/>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        list: state.todoList.list,
        filtered: state.todoList.filtered,
        search: state.todoList.search
    }
};
const mapDispatchToProps = {
    deleteLabel,
    setImportantLabel,
    setDoneLabel
};
export default connect(mapStateToProps, mapDispatchToProps)(withFilter(TodoListContainer))

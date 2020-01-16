import React from 'react'
import {connect} from "react-redux";
import {
    deleteItemFromServer,
    deleteLabel,
    editNote,
    editLabel,
    editModeOn, getDataFromServer,
    setDoneNote,
    markAsImportant
} from "../../Redux/todolist-reducer";
import TodoList from "./Todolist";
import withFilter from "../Filter/withFilter";


class TodoListContainer extends React.Component {
    componentDidMount() {
        this.props.getDataFromServer()
    }

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
        search: state.todoList.search,
        tempText: state.todoList.tempText
    }
};
const mapDispatchToProps = {
    deleteLabel,
    markAsImportant,
    setDoneNote,
    editLabel,
    editModeOn,
    editNote,
    getDataFromServer,
    deleteItemFromServer,
};
export default connect(mapStateToProps, mapDispatchToProps)(withFilter(TodoListContainer))

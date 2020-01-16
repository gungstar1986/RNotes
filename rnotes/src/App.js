import React from 'react';
import HeaderContainer from "./Component/Header/HeaderContainer";
import TodoListContainer from "./Component/TodoList/TodolistContainer";
import SearchContainer from "./Component/Search/SearchContainer";
import AddNoteContainer from "./Component/AddNote/AddNoteContainer";
import classes from "./App.module.css"


const App = () => {
    return (
        <div className={classes.appContainer}>
            <div className={classes.headerContainer}>
                <div><HeaderContainer/></div>
                <div><SearchContainer/></div>
            </div>
            <div className={classes.app}>
                <div className={classes.noteList}>
                    <TodoListContainer/>
                </div>
            </div>
            <div className={classes.addContainer}>
                <AddNoteContainer/>
            </div>
        </div>
    );
};

export default App;

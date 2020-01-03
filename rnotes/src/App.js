import React from 'react';
import HeaderContainer from "./Component/Header/HeaderContainer";
import TodoListContainer from "./Component/TodoList/TodolistContainer";
import SearchContainer from "./Component/Search/SearchContainer";
import AddNoteContainer from "./Component/AddNote/AddNoteContainer";


const App = (props) => {
    return (
        <div>
            <HeaderContainer/>
            <SearchContainer/>
            <TodoListContainer/>
            <AddNoteContainer/>
        </div>
    );
};

export default App;

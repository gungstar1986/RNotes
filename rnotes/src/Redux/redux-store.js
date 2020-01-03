import {combineReducers, createStore} from "redux"
import todolistReducer from "./todolist-reducer";
import {reducer as formReducer} from "redux-form"

const reducers = combineReducers({
    todoList : todolistReducer,
    form: formReducer
});

const store = createStore(reducers);
window.store = store;
export default store

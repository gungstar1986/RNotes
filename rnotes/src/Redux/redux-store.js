import {applyMiddleware, combineReducers, createStore} from "redux"
import todolistReducer from "./todolist-reducer";
import {reducer as formReducer} from "redux-form"
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    todoList : todolistReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store

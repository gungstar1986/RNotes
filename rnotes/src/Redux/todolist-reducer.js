import {dataAPI} from "../Api/Api";

const ADD_LABEL_ITEM = "ADD_LABEL_ITEM";
const DELETE_LABEL_ITEM = "DELETE_LABEL_ITEM";
const SET_IMPORTANT_LABEL = "SET_IMPORTANT_LABEL";
const SET_DONE_LABEL = "SET_DONE_LABEL";
const SEARCH_NOTES = "SEARCH_NOTES";
const SET_FILTERED_NOTES = "SET_FILTERED_NOTES";
const CLEAR_TODO_LIST = "CLEAR_TODO_LIST";
const EDIT_LABEL_ITEM = "EDIT_LABEL_ITEM";
const EDIT_MODE_ON = "EDIT_MODE_ON";
const EDITED_NOTE = "EDITED_NOTE";
const ADD_DATA_FROM_SERVER = "ADD_DATA_FROM_SERVER";

let id = 0;
const initialState = {
    list: [
        // {id: ++id, label: 'Это Ваша первая заметка, добавьте еще одну в поле ниже', important: true, done: false, edit: false}
    ],
    filtered: "all",
    search: "",
    tempText: ""
};

const todolistReducer = (state = initialState, action) => {

    if (action.type === ADD_LABEL_ITEM) {
        return {
            ...state,
            list: [...state.list, {id: ++id, label: action.label, important: false, done: false, edit: false}]
        }
    }
    if (action.type === ADD_DATA_FROM_SERVER) {
        return {
            ...state,
            list: [...state.list, action.data]
        }
    }
    if (action.type === SET_IMPORTANT_LABEL) {
        return {
            ...state,
            list: state.list.map(item => item.id === action.id
                ? {...item, important: action.boolean}
                : item),
        }
    }
    if (action.type === DELETE_LABEL_ITEM) {
        return {
            ...state,
            list: state.list.filter(item => item.id !== action.id && {...item})
        }
    }
    if (action.type === SET_DONE_LABEL) {
        return {
            ...state,
            list: state.list.map(item => item.id === action.id
                ? {...item, done: action.boolean}
                : item),
        }
    }
    if (action.type === SEARCH_NOTES) {
        return {
            ...state,
            search: action.text
        }
    }
    if (action.type === SET_FILTERED_NOTES) {
        return {
            ...state,
            filtered: action.status
        }
    }
    if (action.type === CLEAR_TODO_LIST) {
        return {
            ...state,
            list: []
        }
    }
    if (action.type === EDIT_LABEL_ITEM) {
        return {
            ...state,
            list: state.list.map(elem => elem.id === action.id
                ? {...elem, edit: action.boolean}
                : elem)
        }
    }
    if (action.type === EDIT_MODE_ON) {
        return {
            ...state,
            tempText: action.text
        }
    }
    if (action.type === EDITED_NOTE) {
        return {
            ...state,
            list: state.list.map(item => item.id === action.id
                ? {...item, label: action.text, edit: false}
                : item)
        }
    }
    return state
};

export const addLabel = (label) => ({type: "ADD_LABEL_ITEM", label});
export const deleteLabel = (id) => ({type: "DELETE_LABEL_ITEM", id});
export const editLabel = (id, boolean) => ({type: "EDIT_LABEL_ITEM", id, boolean});
export const editModeOn = (text) => ({type: "EDIT_MODE_ON", text});
export const editedMode = (text, id) => ({type: "EDITED_NOTE", text, id});
export const setImportantLabel = (boolean, id) => ({type: "SET_IMPORTANT_LABEL", boolean, id});
export const setDoneLabel = (id, boolean) => ({type: "SET_DONE_LABEL", id, boolean});
export const setFilter = (status) => ({type: "SET_FILTERED_NOTES", status});
export const liveSearch = (text) => ({type: "SEARCH_NOTES", text});
export const clearTodoList = () => ({type: "CLEAR_TODO_LIST"});
export const addDataFromServer = (data) => ({type: "ADD_DATA_FROM_SERVER", data});


export const getDataFromServer = () => (dispatch) => dataAPI.getData()
    .then(resp => resp.data && resp.data.map(list => {
        if (list) {
            id = list.id;
            list && dispatch(addDataFromServer(list))
        }
    }));
export const postDataToTheServer = data => (dispatch, getState) => {
    dispatch(addLabel(data));
    dataAPI.sendNote(getState().todoList.list)
};
export const deleteItemFromServer = id => (dispatch, getState) => {
    dispatch(deleteLabel(id));
    dataAPI.sendNote(getState().todoList.list)
};
export const markAsImportant = (boolean, id) => (dispatch, getState) => {
    dispatch(setImportantLabel(boolean, id));
    dataAPI.sendNote(getState().todoList.list)
};
export const deleteAllNotes = () => (dispatch) => {
    dataAPI.clearNoteList().then(resp => resp.status === 200 && dispatch(clearTodoList()))
};
export const editNote = (text, id) => (dispatch, getState) => {
    dispatch(editedMode(text, id));
    dataAPI.sendNote(getState().todoList.list)
};
export const setDoneNote = (id, boolean) => (dispatch, getState) => {
    dispatch(setDoneLabel(id, boolean));
    dataAPI.sendNote(getState().todoList.list)
};

export default todolistReducer



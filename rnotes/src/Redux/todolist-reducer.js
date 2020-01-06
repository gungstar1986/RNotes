const ADD_LABEL_ITEM = "ADD_LABEL_ITEM";
const DELETE_LABEL_ITEM = "DELETE_LABEL_ITEM";
const SET_IMPORTANT_LABEL = "SET_IMPORTANT_LABEL";
const SET_DONE_LABEL = "SET_DONE_LABEL";
const SEARCH_NOTES = "SEARCH_NOTES";
const SET_FILTERED_NOTES = "SET_FILTERED_NOTES";


let id = 0;
const initialState = {
    list: [
        {id: ++id, label: 'Добавьте Вашу первую заметку', important: false, done: true},
        {id: ++id, label: 'Добавьте  первую заметку', important: true, done: false},
        {id: ++id, label: 'Добавьте Вашу  заметку', important: false, done: false},
        {id: ++id, label: 'Доб Вашу первую заметку', important: false, done: false},
        {id: ++id, label: 'Добавьте Вашу первую ', important: false, done: false},
    ],
    filtered: "all",
    search: "",
};

const todolistReducer = (state = initialState, action) => {
    if (action.type === ADD_LABEL_ITEM) {
        return {
            ...state,
            list: [...state.list, {id: ++id, label: action.label, important: false, done: false}]
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
    return state
};


export const addLabel = (label) => ({type: "ADD_LABEL_ITEM", label});
export const deleteLabel = (id) => ({type: "DELETE_LABEL_ITEM", id});
export const setImportantLabel = (boolean, id) => ({type: "SET_IMPORTANT_LABEL", boolean, id});
export const setDoneLabel = (id, boolean) => ({type: "SET_DONE_LABEL", id, boolean});
export const setFilter = (status) => ({type: "SET_FILTERED_NOTES", status});
export const liveSearch = (text) => ({type: "SEARCH_NOTES", text});

export default todolistReducer

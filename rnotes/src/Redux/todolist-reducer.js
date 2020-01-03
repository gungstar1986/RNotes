const ADD_LABEL_ITEM = "ADD_LABEL_ITEM";
const DELETE_LABEL_ITEM = "DELETE_LABEL_ITEM";
const SET_IMPORTANT_LABEL = "SET_IMPORTANT_LABEL";
const SET_DONE_LABEL = "SET_DONE_LABEL";


let id = 0;
const initialState = {
    list: [
        {id: ++id, label: 'Написать React приложение', important: false, done: false},
        {id: ++id, label: 'Отослать резюме', important: false, done: false},
        {id: ++id, label: 'Пройти собеседование', important: false, done: false},
        {id: ++id, label: 'Устроиться на работу', important: true, done: false}
    ],
    searchNote: ""
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
                : item)
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
                : item)
        }
    }
    return state
};

export const addLabel = (label) => ({type: "ADD_LABEL_ITEM", label});
export const deleteLabel = (id) => ({type: "DELETE_LABEL_ITEM", id});
export const setImportantLabel = (boolean, id) => ({type: "SET_IMPORTANT_LABEL", boolean, id});
export const setDoneLabel = (id, boolean) => ({type: "SET_DONE_LABEL", id, boolean});

export default todolistReducer

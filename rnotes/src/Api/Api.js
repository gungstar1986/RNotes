import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-notes-app-52300.firebaseio.com/"
});

export const dataAPI  = {
    getData: () => instance.get("todoList.json"),
    sendNote: (list) => instance.put("todoList.json", list),
    clearNoteList : () => instance.delete("todoList.json"),
};




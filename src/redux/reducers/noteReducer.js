import uuid from "uuid/v1";
import { REMOVE_CATEGORY } from "./categoriesReducer";
const ADD_NOTE = 'notes/ADD_NOTE';
const REMOVE_NOTE = 'notes/REMOVE_NOTE';
const UPDATE_NOTE = 'notes/UPDATE_NOTE';

const defaultState = [];

export default function reducer(state = defaultState,action) {  

    switch (action.type) {
        case ADD_NOTE:
          return [...state, { ...action.note, id: uuid(), created: new Date()}];
          
        case REMOVE_NOTE:
          return state.filter(note => note.id !== action.noteID);

        case UPDATE_NOTE:
          const updateIndex = state.findIndex(note => note.id === action.note.id);
          const newState = Object.assign(state.slice(), {
            [updateIndex]: action.note
          });
          return newState;

        // Necesario para borrar categoria de las notas donde se este utilizando
        case REMOVE_CATEGORY:
          return state.map(note =>
            note.category && note.category.id === action.categoryId
              ? { ...note, category: null }
              : note
          );
        default:
          return state;
      }

};

export function addNote(note) {
  return {
    type: ADD_NOTE,
    note,
  };
}
export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function removeNote(noteID) {
  return {
    type: REMOVE_NOTE,
    noteID,
  };
}

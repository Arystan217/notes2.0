import { nanoid } from "nanoid";

const ADD_NOTE = "ADD_NOTE"
const UPDATE_NEW_NOTE_TITLE_TEXT = "UPDATE_NEW_NOTE_TITLE_TEXT" 
const UPDATE_NEW_NOTE_BODY_TEXT = "UPDATE_NEW_NOTE_BODY_TEXT" 
const DELETE_NOTE = "DELETE_NOTE"
const UPDATE_NOTE_TITLE_TEXT = "UPDATE_NOTE_TITLE_TEXT" 
const UPDATE_NOTE_BODY_TEXT = "UPDATE_NOTE_BODY_TEXT"

export const addNoteActionCreator = () => ( {type: ADD_NOTE} )


const store = {
  _state: {
    createNotePage: {
      newNoteTitleText: "",
      newNoteBodyText: "",
    },
    mainPage: [
      {
        id: nanoid(),
        title: "My note",
        body: "smth"
      },
      {
        id: nanoid(),
        title: "My note2",
        body: "smth2"
      },
    ],
    notePage: [
      {
        title: "blablabla",
        body: "some text"
      }
    ]
  },
  _callSubscriber() {},

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    switch (action.type) {
      case asdf:
    }
  }
}

window.store = store
window.state = store.getState()

export default store
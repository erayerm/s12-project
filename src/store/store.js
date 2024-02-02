
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";


export const GlobalActionTypes = {
  changeLanguage: "CHANGE_LANG",
  toggleDarkMode: "DARK_MODE",
  setData: "SET_DATA"
};

const localKey = "darkMode"
const localDarkMode = localStorage.getItem(localKey);
const initialState = {
  lang: "en",
  darkMode: localDarkMode === null ? false : JSON.parse(localDarkMode),
  data: {},
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GlobalActionTypes.changeLanguage:
        return {
          ...state,
          lang: state.lang === "en" ? "tr" : "en"
        };
      case GlobalActionTypes.toggleDarkMode:
        localStorage.setItem(localKey, !state.darkMode);
        return {
          ...state,
          darkMode: !state.darkMode,
        };
      case GlobalActionTypes.setData:
        console.log(action.payload)
        return {
          ...state,
          data: {...action.payload},
        };
      default:
        return state;
    }
};

export const store = createStore(reducer, applyMiddleware(thunk));

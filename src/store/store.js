import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

export const GlobalActionTypes = {
  changeLanguage: "CHANGE_LANG",
  toggleDarkMode: "DARK_MODE",
  setData: "SET_DATA"
};
const browserDefaultDark = window.matchMedia("(prefers-color-scheme: dark)");
const localDarkMode = localStorage.getItem("darkMode");
const localLanguage = localStorage.getItem("language");

const initialState = {
  lang:
    localLanguage === null
      ? (navigator.language || navigator.userLanguage) === "tr-TR" ||
        (navigator.language || navigator.userLanguage) === "tr"
        ? "tr"
        : "en"
      : localLanguage,
  darkMode:
    localDarkMode === null
      ? browserDefaultDark.matches
      : JSON.parse(localDarkMode),
  data: [],
  currentData: [],
};
let newLang;
const reducer = (state = initialState, action) => {

  switch (action.type) {

    case GlobalActionTypes.changeLanguage:
      newLang = state.lang === "en" ? "tr" : "en";
      localStorage.setItem("language", newLang);
      return {
        ...state,
        lang: newLang,
        currentData: { ...state.data[newLang] },
      };
    case GlobalActionTypes.toggleDarkMode:
      localStorage.setItem("darkMode", !state.darkMode);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case GlobalActionTypes.setData:
      return {
        ...state,
        data: { ...action.payload },
        currentData: { ...action.payload[state.lang] },
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));

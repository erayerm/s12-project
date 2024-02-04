import { GlobalActionTypes } from "../store";

export const changeLanguage = () =>{
    return {type: GlobalActionTypes.changeLanguage}
}

export const toggleDarkMode = () =>{
    return { type: GlobalActionTypes.toggleDarkMode };
};

export const setData = (data) =>{
    console.log(data);
    return { type: GlobalActionTypes.setData, payload: data}
}

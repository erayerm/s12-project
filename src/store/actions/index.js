import axios from "axios";
import { GlobalActionTypes } from "../store";

export const changeLanguageAction = () => {
    return { type: GlobalActionTypes.changeLanguage }
}

export const toggleDarkModeAction = () => {
    return { type: GlobalActionTypes.toggleDarkMode };
};

export const setDataAction = (data) => {
    console.log(data);
    return { type: GlobalActionTypes.setData, payload: data }
}

export const setLoadingAction = (boolean) => {
    return { type: GlobalActionTypes.setLoading, payload: boolean }
}

export const fetchData = () => async (dispatch, getState) => {
    axios
        .get("https://65bb8f5a52189914b5bc8029.mockapi.io/api/data/data")
        .then((res) => dispatch(setDataAction(res.data[0])))
        .then(()=> dispatch(setLoadingAction(false)))
        .catch((err) => console.error(err));
};
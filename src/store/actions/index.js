import axios from "axios";
import { GlobalActionTypes } from "../store";

export const changeLanguage = () => {
    return {type: GlobalActionTypes.changeLanguage}
}

export const toggleDarkMode = () => {
    return { type: GlobalActionTypes.toggleDarkMode };
};

export const setData = (data) => {
    console.log(data);
    return { type: GlobalActionTypes.setData, payload: data}
}

export const fetchData = () => async (dispatch) => {
  axios
    .get("https://65bb8f5a52189914b5bc8029.mockapi.io/api/data/data")
    .then((res) => {console.log(res.data[0]);dispatch(setData(res.data[0]))})
    .catch((err) => console.error(err));
};
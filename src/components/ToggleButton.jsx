import { useDispatch, useSelector } from "react-redux";
import "./ToggleButton.css"
import { toggleDarkMode } from "../store/actions";

export default function ToggleButton() {
    const darkMode = useSelector((store) => store.darkMode);
    const data = useSelector((store) => store.currentData);
    const dispatch = useDispatch();
    const handleChange = () =>
    {
      dispatch(toggleDarkMode());
    }
    return (
      <div className="flex items-center gap-2.5">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={handleChange} />
          <span className="slider" />
        </label>
        {data.navBar[(darkMode ? "darkModeOn" : "darkModeOff")]}
      </div>
    );

}
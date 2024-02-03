import { useEffect } from "react";
import Greetings from "./components/Greetings"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import "./reset.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((store)=>store.darkMode);
  useEffect(()=>{
    dispatch(fetchData());
  },[])
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Greetings />
      <Skills />
      <Profile />
      <Projects />
    </div>
  )
}

export default App

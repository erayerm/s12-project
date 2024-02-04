import { useEffect, useState } from "react";
import Greetings from "./components/Greetings"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import "./reset.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setData } from "./store/actions";

function App() {
  
  const darkMode = useSelector((store)=>store.darkMode);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
     axios
       .get("https://65bb8f5a52189914b5bc8029.mockapi.io/api/data/data")
       .then((res) => dispatch(setData(res.data[0])))
       .then(()=>setLoading(false))
       .catch((err) => console.error(err));
  }, [])
  if(loading){
    return ""
  }
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

import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {/* */}

      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
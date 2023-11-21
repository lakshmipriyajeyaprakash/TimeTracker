import './App.css';
import {React,useState} from 'react';
import Header from "./Components/Layout/Header";
//import Timer from "./Components/Schedule/Timer";
import TaskList from './Components/Schedule/TaskList';
import { ArrContext } from './Components/DataProvider/ContextCreate';



function App() {
  
  const [InputValues,setInputValues] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <ArrContext.Provider value={{InputValues,setInputValues}}>
      <TaskList></TaskList>
      </ArrContext.Provider>
    </div>
  );
}

export default App;

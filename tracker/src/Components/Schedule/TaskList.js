import {React,useState,useRef} from 'react';
import Task from './Task.js'
import {TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
const TaskList = () => {
  const intervalRef = useRef(0);
  const initialValue = {
    id:1,
    title: '',
    dueDate: '',
    timerDuration:intervalRef.current,
    currentTime:''
  }
  const [newTaskMemo, setNewTaskMemo] = useState(initialValue);
  const handleInputChange = event => {
      const { name, value } = event.target;
      setNewTaskMemo({...newTaskMemo, [name]: value});
    };
    
    const clearFields = () =>{
      setNewTaskMemo((prevMemo) => ({
        ...prevMemo,
        title: prevMemo.title || '', // Retain title if already set
        dueDate: prevMemo.dueDate || '', // Retain due date if already set
      }));
    }
  return (
      <div className="task-list">
        <div className="task-form">
          <TextField
            type="text"
            name="title"
            placeholder="Task"
            value={newTaskMemo.title}
            onChange={handleInputChange}
            helperText="Please enter the task"
          />
          <TextField
            type="date"
            name="dueDate"
            value={newTaskMemo.dueDate}
            onChange={handleInputChange}
            helperText="Please enter the date"
          />
        </div>
        <Task newTaskMemo={newTaskMemo} clearFields={clearFields}/>
      </div>
    );
  };
  
  export default TaskList;
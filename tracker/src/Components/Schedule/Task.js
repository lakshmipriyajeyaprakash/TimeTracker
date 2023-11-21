import {React,useState,useRef} from 'react';
//import {Button} from 'react-bootstrap';
import Button from '@mui/material/Button';
import CustomModal from './CustomModal';
import classes from '../Layout/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Task = ({newTaskMemo, clearFields}) => {

  const {title, timerDuration, dueDate} = newTaskMemo;
  const date = new Date().toLocaleTimeString();
  const[id,setId] = useState(1);
  const [completed,setCompleted] = useState([]);
  const [remainingTime, setRemainingTime] = useState(timerDuration);
  const [isstartTimer,setIsstartTimer] = useState(true);
  const [isInProgress,setIsInProgress] = useState(true);
  const intervalRef = useRef(null);
    
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    const Time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const handleStartTimer = (taskDetails) => {
      if (title.trim() !== '' && dueDate.trim() !== ''){
          setIsstartTimer(true);
            if(isstartTimer){
              if(isInProgress){
                intervalRef.current = setInterval(() => {
                setRemainingTime(prevTime => prevTime+1);
              },10);
              }
              setIsstartTimer(false);
            }
            else{
              setIsInProgress(false);
              const tasks = {
                  id: id,
                  CompletedTitle: title,
                  CompletedDate: dueDate,
                  CompletedTime: Time,
                  CompletedCurrentTime: date
                };
                setCompleted(prevCompleted => [...prevCompleted, tasks]);
                clearInterval(intervalRef.current);
                clearTask();
                setIsInProgress(true);
                setIsstartTimer(true);
              }
            }
        else{
            alert('Task Description and Date should not be empty');
            setIsstartTimer(true);
        }
    };
  
   /* const handleStopTimer = () =>{
      setIsInProgress(false);
      clearInterval(intervalRef.current);
      setCompleted(prevCompleted => [...prevCompleted, tasks]);
      clearTask();
      setIsInProgress(true);
    }*/
    
    const clearTask = () =>{
      setRemainingTime(timerDuration);
      setIsInProgress(true);
      clearFields();
      setId(prevId=>prevId+1);
    }
    const handleDelete = (taskToDelete) =>{
      setCompleted(prevCompleted =>
        prevCompleted.filter(comp => comp !== taskToDelete));
    }
    const restartTimer = (taskToRun) =>{
      handleStartTimer({
        title: taskToRun.CompletedTitle,
        dueDate: taskToRun.CompletedDate
      });
    }
    const sortedTasks = completed.sort((a, b) => new Date(b.CompletedDate) - new Date(a.CompletedDate));
    console.log(sortedTasks);
    return (
      <div className={classes.task}>
        <h3>{title}</h3>
        <p>{dueDate}</p>
        <div>{Time}</div>
       
          <>
            <Button className={classes.runbutton} variant="contained" onClick={handleStartTimer}>
            {isstartTimer?"Start":"Stop"}
            </Button>
            
          </>
         {completed.map((comp,index) =><CustomModal comp={comp} index={index} onDelete={handleDelete} reRun={restartTimer} ></CustomModal>)}
      </div>
    );
  };
  
  export default Task; 
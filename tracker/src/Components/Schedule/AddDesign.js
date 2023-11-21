import React , {useState,useContext} from 'react';
import classes from '../Layout/Header.module.css';
import { ArrContext } from '../DataProvider/ContextCreate';
import { StringContext } from '../DataProvider/ContextCreate';
const dateObj = new Date();
const currDate = dateObj.getDate();
const days = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
const time = dateObj.getHours();
   
const AddDesign = ()=>{
return(
    <div>
        <div className={classes.day}>{days[dateObj.getDay()]}</div>
        <div></div>
    </div>
    )
}
export default AddDesign;
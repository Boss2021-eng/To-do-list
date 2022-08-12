import './App.css';
import React, {useState}from 'react';
import Work from './Work';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


library.add(faTrash);

function App() {

  const [taskName,setTaskName] = useState("")
  const [taskList,setTaskList] = useState([])

  const addTask = () => {
    setTaskList([...taskList,{task: taskName}])
    setTaskName('')
 };
   
    
    return(
      <div className='App'>

        <h1> TO DO LIST APP </h1>
        <input type="text" id="task" placeholder='What do you want to do today' onChange={(e)=> {
          setTaskName(e.target.value)
        }}/>

        <button onClick={addTask}> add</button>

        {taskList.map((task) => 
        { return <div className='task'>
        <Work taskName={task.task}/>

        </div>

        })}
       
      </div>
      );

};
export default App; 
import React from 'react';
// import logo from './logo.svg';
import './App.css';
const taskList = [
  {
     name: ['Humber', 'Mern', 'Java'],
     humberTask: [
       {
         name: 'task-1',
       },
        {
         name: 'task-2',
       },
       {
         name: 'task-3',
       },
     ],
     mernTask: [
       {
         name: 'Lab',
       },
       {
         name: 'Project',
       },
       {
         name: 'Quiz',
       },
     ],
     javaTask: [
       {
         name: 'Group Discussion',
       },
       {
         name: 'Exam',
       },
       {
         name: 'Assignment',
       },
     ]
   }
 ];
class App extends React.Component{
  render(){
    var humTaskList = taskList[0].humberTask.length;
    var mernList = taskList[0].mernTask.length;
    var javaList = taskList[0].javaTask.length;
    var totaltask = javaList + mernList + humTaskList;
    return (
      <div>
        <h1>TASk LIST</h1>
        <h2>Total Task : {totaltask}</h2>
        <span>{this.props.taskList[0].name[0]}</span>
        {<ul>
          {this.props.taskList[0].humberTask.map((g) => (
            <li> {g.name}</li>
          ))}
        </ul>}
        <span>{this.props.taskList[0].name[1]}</span>
        {<ul>
          {this.props.taskList[0].mernTask.map((g) => (
            <li> {g.name}</li>
          ))}
        </ul>}
        <span>{this.props.taskList[0].name[2]}</span>
        {<ul>
          {this.props.taskList[0].javaTask.map((g) => (
            <li> {g.name}</li>
          ))}
        </ul>}
      </div>
    );
  }
   
}
export default App;


import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks:[
        // {title:"Task1", isDone: false, id:Math.random()},
        // {title:"Task2", isDone: true, id:Math.random()}

      ],
      livetext:""
    }
    
    
  }

  addTask=()=>this.setState({tasks:[...this.state.tasks,{title:this.state.livetext, isDone:false, id:Math.random()}],livetext:""})
  switchDone=(a)=>this.setState({tasks:this.state.tasks.map((el,i,t)=>el.id===a?{...el,isDone:!el.isDone}:el)})
  deleteTask=(a)=>this.setState({tasks:this.state.tasks.filter((el,i,t)=>el.id!==a)})
 

  render(){
    return(
      <div>
      <h1>ToDo List</h1>
      {this.state.tasks.map((el,i,t)=><div>
        <h3 className={el.isDone && "cross"}>{el.title}</h3>
        {/* <h4>{el.isDone? "TRUE":"FALSE"}</h4> */}
        <button onClick={()=>this.switchDone(el.id)}>Done</button>
        <button onClick={()=>this.deleteTask(el.id)}>delete</button>
        </div>)}

        <br/>
        <br/>
        <input type='text' value={this.state.livetext} onChange={(e)=>this.setState({livetext:e.target.value})}></input>
        <button onClick={this.addTask}>add</button>
      </div>
    )
  }
}
 



export default App;

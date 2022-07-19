import React from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";

function App() {
    const tasks: Array<TaskType> = [
        {id:1, title: "html", isDone: true },
        {id:2, title: "css", isDone: true},
        {id:3, title: "js/ts", isDone: false}
    ]
    return (
        <div className="App">
            <ToDoList
                tasks={tasks}
                title={"What to learn"}/>
            {/*<ToDoList title={"What to buy"}/>
                <ToDoList title={"What to read"}/> */}
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";

function App() {
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS" isDone: false}
    ]

    return (
        <div className="App">
            <ToDoList tasks={TaskType} title={"What to learn"}/>
            {/*<ToDoList title={"What to buy"}/>
                <ToDoList title={"What to read"}/> */}
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const toDoListTitle = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "html", isDone: true},
        {id: 2, title: "css", isDone: true},
        {id: 3, title: "js/ts", isDone: false},
    ])
    const [filter, setFilter] = React.useState<FilterValuesType>("all")

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID))
        console.log(tasks)
    }
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    let tasksForRender;
    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(task => task.isDone === true)
            break
        case "active":
            tasksForRender = tasks.filter(task => task.isDone === false)
            break
        default:
            tasksForRender = tasks
    }
    return (
        <div className="App">
            <ToDoList
                title={toDoListTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;

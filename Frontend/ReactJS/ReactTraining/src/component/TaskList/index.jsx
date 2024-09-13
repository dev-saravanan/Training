import { useState } from "react"

const TaskItem = ({ id, taskName, deleteTask }) => {
    return (
        <div className="bg-slate-100 rounded-xl p-5 m-2 flex items-center justify-between">
            <p>{taskName}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-xl" type="button" onClick={() => deleteTask(id)}>Delete</button>
        </div>
    )
}

const TaskList = () => {
    const [newTask, setNewTask] = useState("")
    const [allTasks, setAllTasks] = useState([])
    const [showError, setShowError] = useState(false)

    const addNewTask = () => {
        if (newTask.trim() === "") {
            setShowError(true)
        } else {
            setShowError(false)
            setAllTasks(prevTask => [...prevTask, newTask])
            setNewTask("")
        }
    }

    const deleteTask = (id) => {
        setAllTasks(prevTask => prevTask.filter((eachTask, index) => index !== id))
    }




    return (
        <div className="w-9/12 h-[700px] bg-white rounded-xl">
            <h1 className="text-xl text-center my-5">Tasks</h1>

            <hr />

            <div className="flex items-start p-10">
                <div className=" w-1/2">
                    <input className=" h-10 rounded-xl border px-3 outline-none border-black w-full" type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
                    {showError ? <p className="text-xs text-red-500 mt-2">Type something to add</p> : null}
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-xl mx-3" onClick={addNewTask}>Add</button>
            </div>

            <div className="p-5 h-[500px] overflow-auto">
                {
                    allTasks.map((eachTask, index) => <TaskItem deleteTask={deleteTask} id={index} taskName={eachTask} key={index} />)
                }
            </div>
        </div>
    )
}

export default TaskList
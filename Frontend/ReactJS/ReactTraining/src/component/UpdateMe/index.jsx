import { useState } from "react"

const UpdateMe = () => {
    const [showUpdated, setShowUpdated] = useState(false)

    const handleUpdateBtn = () => {
        setShowUpdated((prev) => !prev)
    }

    return (
        <div className="m-2 p-4 flex flex-col justify-evenly items-center w-96 h-60 bg-blue-300 rounded-2xl">
            <p className="text-xl">{
                showUpdated ? "I'm learning React and Hooks as well" : "I'm learning React"
            }</p>

            <button className="bg-orange-400 p-4 rounded-xl text-white" onClick={handleUpdateBtn}>Click Me To Update Text</button>
        </div>
    )
}

export default UpdateMe
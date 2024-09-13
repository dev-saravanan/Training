import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(prev => ((prev + 1) <= 25) ? prev + 1 : prev)
    }

    const decreaseCount = () => {
        setCount(prev => ((prev - 1) >= 0) ? prev - 1 : prev)
    }
    return (
        <div className="m-2 p-4 flex flex-col justify-evenly items-center w-96 h-60 bg-blue-300 rounded-2xl">
            <div className="w-20 h-20 border border-blue-800 rounded-full flex justify-center items-center">
                <p className="text-2xl">{count}</p>
            </div>

            <div className="flex">
                <button className="m-2 text-white bg-orange-400 p-4 rounded-xl" onClick={increaseCount}>Increase</button>
                <button className="m-2 text-white bg-orange-400 p-4 rounded-xl" onClick={decreaseCount}>Decrease</button>
            </div>
        </div>
    )
}

export default Counter
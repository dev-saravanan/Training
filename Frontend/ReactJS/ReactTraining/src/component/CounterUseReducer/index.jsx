import { useReducer, useState } from "react"

const counterFn = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 > 25 ? state.count : state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 < 0 ? state.count : state.count - 1 }
        default:
            return state;
    }
}

const CounterUseReducer = () => {
    const [state, dispatch] = useReducer(counterFn, { count: 0 })


    return (
        <div className="m-2 p-4 flex flex-col justify-evenly items-center w-96 h-60 bg-blue-300 rounded-2xl">
            <h1 className="mb-4">Counter - useReducer()</h1>
            <div className="w-20 h-20 border border-blue-800 rounded-full flex justify-center items-center">
                <p className="text-2xl">{state.count}</p>
            </div>

            <div className="flex">
                <button className="m-2 text-white bg-orange-400 p-4 rounded-xl" onClick={() => dispatch({ type: "INCREMENT" })} >Increase</button>
                <button className="m-2 text-white bg-orange-400 p-4 rounded-xl" onClick={() => dispatch({ type: "DECREMENT" })}  >Decrease</button>
            </div>
        </div>
    )
}

export default CounterUseReducer
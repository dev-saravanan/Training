import ContactForm from "../ContactForm"
import Counter from "../Counter"
import CounterUseReducer from "../CounterUseReducer"

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-center m-3">This is a Contact Page</h1>

            <div className="flex items-start justify-evenly">
                <Counter />
                <CounterUseReducer />
            </div>

            <ContactForm />
        </div>
    )
}

export default Contact
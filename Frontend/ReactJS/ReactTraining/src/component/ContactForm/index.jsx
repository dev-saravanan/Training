import { useState } from "react"

const ContactForm = () => {
    const [fullName, setFullName] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [companyName, setCompanyName] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(fullName, jobTitle, companyName);
        setFullName("")
        setJobTitle("")
        setCompanyName("")
    }


    return (
        <div className="m-2 p-4 flex flex-col justify-evenly items-center w-96 h-full bg-blue-300 rounded-2xl">
            <form onSubmit={handleFormSubmit} className=" w-full">
                <div className="w-full flex flex-col justify-start items-start mb-4">
                    <label className="text-xs mb-1" htmlFor="fullName">Full Name</label>
                    <input className="w-full h-8 outline-none px-2 rounded" id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>

                <div className="w-full flex flex-col justify-start items-start mb-4">
                    <label className="text-xs mb-1" htmlFor="jobTitle">Job Title</label>
                    <input className="w-full h-8 outline-none px-2 rounded" id="jobTitle" type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                </div>

                <div className="w-full flex flex-col justify-start items-start mb-4">
                    <label className="text-xs mb-1" htmlFor="companyName">Company Name</label>
                    <input className="w-full h-8 outline-none px-2 rounded" id="companyName" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>

                <button className="bg-orange-400 text-white px-3 py-2 rounded" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
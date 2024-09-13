const SkillsList = (props) => {
    const { skills } = props

    return (
        <div className="p-4 flex flex-col justify-start items-center w-96 h-full bg-blue-300 rounded-2xl">
            <h1 className="text-xl mb-12">Skills</h1>

            <ul className="flex justify-center items-center flex-wrap">
                {
                    skills.map((eachSkill, index) => (
                        <li key={index} className="w-24 h-24 flex justify-center items-center rounded-xl text-white bg-slate-800 m-2">
                            <p>{eachSkill}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SkillsList
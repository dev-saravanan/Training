import SkillsList from "../SkillsList"

const Blog = () => {
    const skills = ["ReactJS", "NodeJS", "ExpressJS", "SQL", "Python"]


    return (
        <div>
            <h1 className="text-center m-3">This is a Blog Page</h1>

            <SkillsList skills={skills} />
        </div>
    )
}

export default Blog
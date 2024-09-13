import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="flex justify-evenly w-6/12 p-16">
            <li className="underline">
                <Link to="/">Home</Link>
            </li>

            <li className="underline">
                <Link to="/blog">Blog</Link>
            </li>

            <li className="underline">
                <Link to="/contact">Contact</Link>
            </li>

            <li className="underline">
                <Link to="/tasks">Task</Link>
            </li>
        </ul>
    )
}

export default NavBar
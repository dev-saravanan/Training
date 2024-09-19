import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex bg-white flex-row justify-center items-center h-24 w-full">
            <ul className="flex flex-row justify-between items-center w-6/12 md:w-1/5">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
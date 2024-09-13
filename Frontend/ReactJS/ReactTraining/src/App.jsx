import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./component/Home"
import Blog from "./component/Blog"
import Contact from "./component/Contact"
import NavBar from "./component/NavBar"
import TaskList from "./component/TaskList"

const App = () => {
  return (
    <div className="min-h-screen h-full flex flex-col bg-slate-200 justify-start items-center">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </div>
  )
}

export default App
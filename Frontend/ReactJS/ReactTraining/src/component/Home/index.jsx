import SimpleComponent from "../SimpleComponent"
import UpdateMe from "../UpdateMe"

const Home = () => {
    return (
        <div>
            <h1 className="text-center m-3">This is a Home Page</h1>

            <SimpleComponent />
            <UpdateMe />
        </div>
    )
}

export default Home
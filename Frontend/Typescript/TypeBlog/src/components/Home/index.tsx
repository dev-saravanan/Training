import BlogItem from '../BlogItem'
import { type blogs } from '../../App'

type HomeProps = { blogsList: blogs[] }

const Home = ({ blogsList }: HomeProps) => {
    return (
        <div>
            <ul className='flex flex-row justify-center items-start flex-wrap'>
                {blogsList.map((eachBlog) => (
                    <BlogItem key={eachBlog.id} {...eachBlog} />
                ))}
            </ul>
        </div>
    )
}

export default Home

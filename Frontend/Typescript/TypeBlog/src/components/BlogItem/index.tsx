import { Link } from 'react-router-dom'
import BlogImage from '../BlogImage'
import BlogText from '../BlogText'
import BlogAndAuthorDetails from '../BlogAndAuthorDetails'
import { blogs } from '../../App'

const BlogItem = (props: blogs) => {
    const {
        id,
        blogTitle,
        blogCategory,
        authorName,
        authorImageUrl,
        publishedDate,
        blogImageUrl,
    } = props

    return (
        <li className='p-4 w-full md:w-[400px]'>
            <Link to={`/blog/${id}`}>
                <BlogImage
                    className='hover:scale-105 duration-100 w-full rounded-xl'
                    src={blogImageUrl}
                    alt={blogTitle}
                />

                <div className='flex items-center'>
                    {blogCategory.map((eachCategory, index) => (
                        <BlogText
                            key={index}
                            className='mt-6 mr-2 font-nroboto text-sm text-blue-500'
                        >
                            {eachCategory.toUpperCase()}
                        </BlogText>
                    ))}
                </div>

                <BlogText className='mt-4 font-nroboto text-lg font-medium'>
                    {blogTitle}
                </BlogText>

                <BlogAndAuthorDetails
                    avatarImage={authorImageUrl}
                    authorName={authorName}
                    publishDate={publishedDate}
                    className='mt-6 flex flex-row justify-between items-center'
                />
            </Link>
        </li>
    )
}

export default BlogItem

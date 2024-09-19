import BlogAndAuthorDetails from '../BlogAndAuthorDetails'
import BlogImage from '../BlogImage'
import BlogText from '../BlogText'
import MainPara from '../MainPara'
import { type blogs } from '../../App'
import { useParams } from 'react-router-dom'

type DetailedBlogProps = { blogsList: blogs[] }

const DetailedBlog = ({ blogsList }: DetailedBlogProps) => {
    const params = useParams()
    const blogId = params.id

    if (!blogId) {
        return null
    }
    const blogDetails: blogs = blogsList.find(
        (eachBlog) => eachBlog.id === parseInt(blogId)
    )!

    const {
        blogTitle,
        blogCategory,
        authorName,
        authorImageUrl,
        publishedDate,
        blogImageUrl,
    } = blogDetails

    return (
        <div className='m-auto w-full md:w-9/12 text-center flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                {blogCategory.map((eachCategory, index) => (
                    <BlogText
                        key={index}
                        className='mt-6 mr-2 font-nroboto text-xs md:text-sm text-blue-500'
                    >
                        {eachCategory.toUpperCase()}
                    </BlogText>
                ))}
            </div>

            <BlogText className='mt-4 font-broboto text-2xl md:text-4xl'>
                {blogTitle}
            </BlogText>

            <BlogAndAuthorDetails
                avatarImage={authorImageUrl}
                authorName={authorName}
                publishDate={publishedDate}
                className='mt-6 flex flex-row justify-start items-center'
            />

            <BlogImage
                className='mt-10 w-full rounded-xl'
                src={blogImageUrl}
                alt='blog-name'
            />

            <div className=' w-11/12 md:w-9/12'>
                <MainPara className='mt-4 text-center font-lroboto text-sm leading-6 md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse at turpis a lacus posuere tincidunt. Curabitur
                    consectetur turpis in arcu lobortis, sed tincidunt odio
                    tincidunt. Donec ac quam suscipit, ultricies metus ac,
                    pellentesque lorem. Nam ac gravida magna, non posuere lacus.
                    Duis euismod felis ut ex tristique, nec lobortis justo
                    posuere. Morbi ac bibendum nulla. Nullam rhoncus ante neque,
                    ac vestibulum sapien vestibulum ac. Quisque tristique
                    scelerisque augue, vitae varius quam sodales eget. Cras quis
                    eros orci. In facilisis enim id lib ero varius consectetur.
                    Donec pharetra fringilla felis. Sed viverra dolor id tellus
                    fringilla egestas. Phasellus ultricies lacus vitae enim
                    porttitor, id sollicitudin orci aliquam. Integer feugiat
                    nulla vitae metus faucibus, vitae tincidunt enim vestibulum.
                    Donec cursus mauris quis magna gravida viverra. Etiam sed
                    nisl libero. Pellentesque quis enim sed purus condimentum
                    luctus. Vivamus rutrum urna sed lacus rutrum, in consectetur
                    arcu volutpat. Cras fringilla metus in feugiat efficitur. Ut
                    et lectus auctor, interdum est et, bibendum eros. Vestibulum
                    pharetra nisl vel ligula ultricies fermentum. Curabitur sit
                    amet sapien ac augue porttitor auctor. Integer sodales metus
                    ac ipsum viverra pharetra. Proin tempor justo vel arcu
                    egestas laoreet. Suspendisse gravida, tortor id lobortis
                    scelerisque, nulla nisi interdum tortor, at laoreet sem nisi
                    a lacus. Proin hendrerit aliquet ex non egestas. Nulla sit
                    amet tortor a mi ultrices bibendum. Sed dictum justo nec
                    nisl sollicitudin fermentum. Etiam feugiat, tortor id
                    malesuada iaculis, erat odio consectetur ipsum, at fermentum
                    nisl nisi sed ex. Praesent vestibulum sapien quis tempor
                    lobortis. Integer et leo sed purus congue consectetur vel at
                    ipsum. Nulla ac condimentum nibh. Pellentesque non odio vel
                    arcu auctor dignissim. Donec sed felis nisi. Duis vehicula
                    pretium leo, vitae sollicitudin nisi facilisis id.
                    Pellentesque et nibh vel nunc venenatis rhoncus. In aliquet
                    est vitae mauris facilisis ultrices. Sed scelerisque ornare
                    justo, ut aliquet neque condimentum vitae. Maecenas nec
                    vehicula justo. Vestibulum congue auctor eros, ut
                    ullamcorper metus. Pellentesque sed tincidunt dui.
                    Vestibulum in mi ut dolor elementum suscipit non at sapien.
                    Nulla et tincidunt nisi. Curabitur faucibus, justo vel
                    vestibulum rutrum, turpis lacus tincidunt est, eget
                    venenatis mauris metus eget leo.
                </MainPara>
            </div>
        </div>
    )
}

export default DetailedBlog

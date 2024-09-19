import { type ComponentPropsWithRef } from 'react'

type BlogAndAuthorDetailsProps = {
    avatarImage: string
    authorName: string
    publishDate: string
} & ComponentPropsWithRef<'div'>

const BlogAndAuthorDetails = ({
    avatarImage,
    authorName,
    publishDate,
    ...otherProps
}: BlogAndAuthorDetailsProps) => {
    return (
        <div
            className='mt-6 flex flex-row justify-between items-center'
            {...otherProps}
        >
            <div className='mr-4 flex flex-row items-center'>
                <img
                    className='mr-2 w-5 rounded-full'
                    src={avatarImage}
                    alt={authorName}
                />
                <p className='font-lroboto text-base text-slate-500 font-light'>
                    {authorName}
                </p>
            </div>
            <p className='text-base font-lroboto text-slate-500 font-light'>
                {publishDate}
            </p>
        </div>
    )
}

export default BlogAndAuthorDetails

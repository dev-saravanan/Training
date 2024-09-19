import type { ComponentPropsWithRef, PropsWithChildren } from "react"

type BlogTextProps = PropsWithChildren & ComponentPropsWithRef<"p">

const BlogText = ({ children, ...otherProps }: BlogTextProps) => {
    return (
        <p {...otherProps}>
            {children}
        </p>
    )
}

export default BlogText
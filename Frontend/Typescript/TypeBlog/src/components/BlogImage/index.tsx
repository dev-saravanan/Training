import { type ComponentPropsWithRef } from "react";

type BlogImageProps = {
    src: string;
    alt: string;
} & ComponentPropsWithRef<"img">

const BlogImage = (props: BlogImageProps) => {
    return (
        <img {...props} />
    )
}

export default BlogImage
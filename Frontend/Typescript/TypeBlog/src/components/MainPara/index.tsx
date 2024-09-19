import { ComponentPropsWithRef, type ReactNode } from 'react'

type MainParaProps = {
    children: ReactNode
} & ComponentPropsWithRef<'p'>

const MainPara = ({ children, ...otherProps }: MainParaProps) => {
    return (
        <div className='my-4 flex justify-center items-center'>
            <div className='w-full'>
                <p {...otherProps}>{children}</p>
            </div>
        </div>
    )
}

export default MainPara

import MainPara from '../MainPara'
import TitleSection from '../TitleSection'

const Contact = () => {
    return (
        <div className='flex flex-col items-center'>
            <TitleSection
                title='Contact'
                description='We are a here to help.'
            />

            <MainPara className='text-center font-lroboto text-sm md:text-lg'>
                Have something to say? We are here to help. Send email or call
                phone.
            </MainPara>

            <MainPara className='text-left font-lroboto text-sm md:text-lg'>
                1234 Texas, US{' '}
                <span className='text-3xl text-slate-400'>|</span>{' '}
                hello@knackforge.com{' '}
                <span className='text-3xl text-slate-400'>|</span> +1 (987) 4587
                899
            </MainPara>
        </div>
    )
}

export default Contact

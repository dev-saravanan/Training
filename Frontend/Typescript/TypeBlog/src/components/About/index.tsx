import MainPara from '../MainPara'
import TitleSection from '../TitleSection'

const About = () => {
    return (
        <div className='flex flex-col items-center'>
            <TitleSection
                title='About'
                description='We are a small passionate team.'
            />

            <div className='w-full md:w-9/12 mt-4 grid grid-cols-3 gap-5 md:gap-14'>
                <img
                    className='w-full rounded-md'
                    src='https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75'
                    alt='member1'
                />
                <img
                    className='w-full -translate-y-6 md:-translate-y-14 rounded-md'
                    src='https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75'
                    alt='member2'
                />
                <img
                    className='w-full rounded-md'
                    src='https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75'
                    alt='member3'
                />
            </div>

            <div className='w-11/12 md:w-6/12'>
                <MainPara className='mt-4 text-center font-lroboto text-sm leading-6 md:text-lg'>
                    We provide real-time connectivity to enable software
                    providers and financial institutions to build integrated
                    products for their small business customers.
                    <br />
                    <br />
                    Our API infrastructure is leveraged by clients ranging from
                    lenders to corporate card providers and business forecasting
                    tools, with use cases including automatic reconciliation,
                    business dashboarding, and loan decisioning.
                </MainPara>
            </div>
        </div>
    )
}

export default About

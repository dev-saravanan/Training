type TitleSectionProps = {
    title: string;
    description: string;
}

const TitleSection = ({ title, description }: TitleSectionProps) => {
    return (
        <div className="mb-24 flex flex-col justify-center items-center">
            <h1 className="font-nroboto font-semibold text-4xl">{title}</h1>
            <p className="font-lroboto mt-4 font-light text-xl">{description}</p>
        </div>
    )
}

export default TitleSection
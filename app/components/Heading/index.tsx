
const Heading = ({ heading, subHeading }: { heading: string, subHeading: string }) => {
    return (
        <div className="py-14 flex items-center justify-center flex-col gap-8">
            <h1 className="capitalize text-5xl text-black">{heading}</h1>
            <h2 className="text-3xl capitalize text-redishMain">{subHeading}</h2>
        </div>
    )
}

export default Heading;
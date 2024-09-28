export default function PagesHeading({heading,text}){
    return(
        <>
            <h1 className="text-greenbg text-center text-4xl md:text-5xl font-normal">
                {heading}
            </h1>
            <p className="text-md lg:text-lg leading-7 md:leading-8 text-textcolor text-center mt-6">{text}</p>
        </>
    )
}
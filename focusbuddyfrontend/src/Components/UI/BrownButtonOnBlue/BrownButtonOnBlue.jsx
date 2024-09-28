export default function BrownButtonOnBlue({text, style }){
    return(
        <>
            <button className="bg-white py-2.5 px-3.5 text-textcolor font-medium rounded-md transition-all duration-500 ease-in-out" style={style}>{text}</button>
        </>
    ) 
}


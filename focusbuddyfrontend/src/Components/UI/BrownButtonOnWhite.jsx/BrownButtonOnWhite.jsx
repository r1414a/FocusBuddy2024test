export default function BrownButtonOnWhite({text, style }){
    return(
        <>
            <button id="BrownButtonOnWhite" className="bg-greenbg py-2.5 px-3.5 text-white font-medium rounded-md -translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out" style={style}>{text}</button>
        </>
    ) 
}


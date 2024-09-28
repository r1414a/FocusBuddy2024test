import { Link } from "react-router-dom"

export default function SessionEnded() {
    return(
        <div  className='px-6 py-60 flex flex-col items-center min-h-screen'>
                <h1 className="text-2xl md:text-4xl pb-4 md:pb-10 text-darkbrown text-center">Your Session has Ended.</h1>
                <div className='mt-6 flex gap-2'>
            <Link to={'/dashboard'} type='button' className='bg-textcolor pt-2.5 pb-3.5 px-8 text-white rounded-md text-md xl:text-lg border-2 border-textcolor hover:text-formgray hover:bg-white hover:border-2 hover:border-greenbg'>Return to dashboard</Link>
          </div>
        </div>
    )
}
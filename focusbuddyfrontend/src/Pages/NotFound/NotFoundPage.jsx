import {Link} from 'react-router-dom';
import BrownButtonOnBlue from "../../Components/UI/BrownButtonOnBlue/BrownButtonOnBlue.jsx";


export default function NotFoundPage(){
    return(
        <div className="min-w-screen min-h-screen flex flex-col lg:flex-row">
            <div className="flex justify-center items-center w-full lg:w-1/2 bg-greenbg relative p-10">
                <Link to={'/'} className='absolute left-5 top-5 lg:left-10 lg:top-10'>
                    <BrownButtonOnBlue text={'Home'} />
                </Link>
                <p className="mt-20 lg:mt-0 text-white text-[7rem] lg:text-[8rem] font-medium text-center">404</p>
            </div>
            <div className="w-full lg:w-1/2 my-auto p-10">
                <p className="text-greenbg mb-2 text-center text-[5rem] lg:text-[6rem] font-light">Oops!</p>
                <p className="text-textcolor text-center text-xl lg:text-2xl font-normal ">The page you were looking for doesn't exists!.</p>
            </div>
        </div>
    )
}
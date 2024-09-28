import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return(
        <div className="min-w-screen min-h-screen flex">
            <div className="w-1/2 bg-greenbg relative p-10">
                <p className="text-white text-2xl">There is something wrong in website code. Please contact Owner of website ASAP!!!!.</p>
            </div>
            <div className="w-1/2 py-32"></div>
        </div>
    )
}
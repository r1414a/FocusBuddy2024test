import BrownButtonOnWhite from "../UI/BrownButtonOnWhite.jsx/BrownButtonOnWhite";
import { Link } from "react-router-dom";

export default function FooterJoinButton(){
    return(
        <div className="mt-40 text-center mx-auto max-w-screen-md">
            <h1 className="text-2xl my-10 text-greenbg leading-10"><span className="text-errorred text-3xl">Virtual coworking:</span><br/> Where productivity meets accomplishment.</h1>
            <Link to={'/signup'}>
                <BrownButtonOnWhite text={'Start Free Now!'} style={{width: '70%', fontSize: '20px', borderRadius: '8px', padding: '18px'}}/>
            </Link>
        </div>
    )
}
import MainPagesNavbar from '../Components/navbar/MainPagesNavbar';
import Footer from "../Components/footer/Footer";
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return(
        <>
            <MainPagesNavbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
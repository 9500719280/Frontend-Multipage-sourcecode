import { Outlet } from "react-router-dom";
import Footercomp from "../components/Footer";
import Headercom from "../components/Header";
import Maincomp from "../components/Main";

function Templatepage(){
    return(
        <>
        <Headercom/>
        <Maincomp/>
        <Outlet/>
        <Footercomp/>
        </>
    )
}

export default Templatepage;
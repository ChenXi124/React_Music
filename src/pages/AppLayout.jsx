
import {Outlet} from "react-router-dom";
import ContainerMain from  '../components/ContainerMain/ContainerMain'

export default function AppLayout() {
    return (
        <div>


            <ContainerMain></ContainerMain>
            <Outlet/>


        </div>
    )

}
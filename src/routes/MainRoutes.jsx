import { Routes, Route } from "react-router-dom"
import Heroes from "../components/Heroes"
import Home from "../components/Home"
import Info from "../components/Info"
import Sobre from "../components/Sobre"

function MainRoutes() {
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/heroes"} element={<Heroes/>}/>
                <Route path={"/info"} element={<Info/>}/>
                <Route path={"/sobre"} element={<Sobre/>}/>
            </Routes>
        </>
    )
}

export default MainRoutes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/page";
import PaginaPrincipal from "./pages/categories";


export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/categories" Component={PaginaPrincipal}/>
            </Routes>
        </BrowserRouter>
    )
}
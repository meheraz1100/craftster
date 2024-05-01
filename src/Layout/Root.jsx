import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Headers/Headers";

const Root = () => {
    return (
        <div>
            <div>
            <div className="max-w-6xl mx-auto">
                <Headers></Headers>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;
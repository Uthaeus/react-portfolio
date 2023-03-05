import { Outlet } from "react-router-dom";

import NavigationComponent from "../component/navigation/navigation-container";

const RootLayout = () => {
    return (
        <div className="container">
            <NavigationComponent />
            <main>
                <Outlet />
            </main>
        </div>
    );
};


export default RootLayout;
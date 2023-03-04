import { Outlet } from "react-router-dom";

import NavigationComponent from "../component/navigation/navigation-container";

const RootLayout = () => {
    return (
        <>
            <NavigationComponent />
            <main>
                <Outlet />
            </main>
        </>
    );
};


export default RootLayout;
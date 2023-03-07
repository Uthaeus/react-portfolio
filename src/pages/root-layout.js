import { Outlet } from "react-router-dom";

import NavigationComponent from "../component/navigation/navigation-container";

const RootLayout = (props) => {
    return (
        <div className="container">
            <NavigationComponent 
                loggedInStatus={props.loggedInStatus} 
                handleSuccessfulLogout={props.handleSuccessfulLogout}
            />
            <Outlet />
        </div>
    );
};


export default RootLayout;
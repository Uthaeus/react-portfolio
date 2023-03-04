import { Link } from "react-router-dom";

import NavigationComponent from "../component/navigation/navigation-container";

const NoMatch = () => {
    return (
        <>
            <NavigationComponent />
            <h1>We couldn't find that page</h1>
            <Link to='/'>Return to Home Page</Link>
        </>
    );
};


export default NoMatch;

import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
    return (
        <div>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Blog</NavLink>
            {true ? <NavLink>Add Blog</NavLink> : null}
        </div>
    );
};


export default NavigationComponent;
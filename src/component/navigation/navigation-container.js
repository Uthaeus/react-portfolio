
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
    return (
        <div>
            <NavLink to='/' end>Home</NavLink>
            <NavLink to='about-me'>About</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Blog</NavLink>
            {true ? <NavLink>Add Blog</NavLink> : null}
        </div>
    );
};


export default NavigationComponent;
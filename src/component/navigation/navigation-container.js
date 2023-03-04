
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
    return (
        <div>
            <NavLink to='/' className={({ isActive }) =>
                isActive ? 'nav-link-active' : undefined
              } end>
                Home
            </NavLink>
            <NavLink to='/about-me' className={({ isActive }) =>
                isActive ? 'nav-link-active' : undefined
              }>
                About
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) =>
                isActive ? 'nav-link-active' : undefined
              }>
                Contact
            </NavLink>
            <NavLink to='/blog' className={({ isActive }) =>
                isActive ? 'nav-link-active' : undefined
              }>
                Blog
            </NavLink>
            {true ? <NavLink>Add Blog</NavLink> : null}
        </div>
    );
};


export default NavigationComponent;
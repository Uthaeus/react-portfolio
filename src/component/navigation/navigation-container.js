
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? 'nav-link-active' : undefined
                    } end>
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to='/about-me' className={({ isActive }) =>
                        isActive ? 'nav-link-active' : undefined
                    }>
                        About
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive ? 'nav-link-active' : undefined
                    }>
                        Contact
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to='/blog' className={({ isActive }) =>
                        isActive ? 'nav-link-active' : undefined
                    }>
                        Blog
                    </NavLink>
                </div>
            </div>

            <div className="right-side">
                Homer Simpson
            </div>
        </div>
    );
};


export default NavigationComponent;
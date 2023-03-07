import { NavLink, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = (props) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.handleSuccessfulLogout();
          navigate("/");
        }
        return response.data;
      })
      .catch((error) => {
        console.log("error signing out", error);
      });
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : undefined
            }
            end
          >
            Home
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : undefined
            }
          >
            About
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : undefined
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : undefined
            }
          >
            Blog
          </NavLink>
        </div>
        {props.loggedInStatus === "LOGGED_IN" && (
          <div className="nav-link-wrapper">
            <NavLink
              to="/portfolio-manager"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : undefined
              }
            >
              Portfolio Manager
            </NavLink>
          </div>
        )}
      </div>

      <div className="right-side">
        Homer Simpson
        {props.loggedInStatus === "LOGGED_IN" && (
          <Link onClick={handleSignOut}>
            <FontAwesomeIcon icon='sign-out-alt' />
          </Link>
        )}
      </div>
    </div>
  );
};

// withRouter(NavigationComponent)
export default NavigationComponent;

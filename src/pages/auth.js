import { useNavigate } from 'react-router-dom';

import loginImage from '../assets/images/auth/login.jpg';
import Login from '../component/auth/login';

const Auth = (props) => {
    const navigate = useNavigate();

    const handleSuccessfulAuth = () => {
        props.handleSuccessfulLogin();
        navigate('/');
    }

    const handleUnsuccessfulAuth = () => {
        props.handleUnsuccessfulLogin();
    }

    return (
        <div className="auth-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    backgroundImage: `url(${loginImage})`
                }}
            />
                
            <div className="right-column">
                <Login handleSuccessfulAuth={handleSuccessfulAuth} handleUnsuccessfulAuth={handleUnsuccessfulAuth} />
            </div>
        </div>
    );
}


export default Auth;
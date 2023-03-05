

import loginImage from '../../public/assets/images/auth/login.jpg';
import Login from '../component/auth/login';

const Auth = () => {
    return (
        <div className="auth-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    backgroundImage: `url(${loginImage})`
                }}
            />
                
            <div className="right-column">
                <Login />
            </div>
        </div>
    );
}


export default Auth;
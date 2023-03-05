

import loginImage from '../../public/assets/images/auth/login.jpg';

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
                <h2>login...</h2>
            </div>
        </div>
    );
}


export default Auth;
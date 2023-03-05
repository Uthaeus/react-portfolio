import { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <h1>Login to access your dashboard</h1>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type='email' 
                    name='email'
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input 
                    type='password' 
                    name='password'
                    placeholder="Your password"
                    value={password}
                    onChange={handlePasswordChange}
                 />

                 <div>
                    <button type='submit'>Login</button>
                 </div>
            </form>
        </div>
    );
};


export default Login;
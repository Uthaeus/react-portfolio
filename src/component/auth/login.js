import { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleSubmit = event => {
        axios.post('https://api.devcamp.space/sessions',
        {
            client: {
                email: email,
                password: password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                props.handleSuccessfulAuth();
            } else {
                setErrorText('Wrong email or password');
                props.handleUnsuccessfulAuth();
            }
        }).catch(error => {
            setErrorText('An error occurred');
            props.handleUnsuccessfulAuth();
        })
        event.preventDefault();

    }

    const handleEmailChange = event => {
        if (errorText !== '') {
            setErrorText('');
        }
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        if (errorText !== '') {
            setErrorText('');
        }
        setPassword(event.target.value);
    }

    return (
        <div>
            <h1>Login to access your dashboard</h1>
            <p>{errorText}</p>

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
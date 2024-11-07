import { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LogIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => { console.log(userCredencial) })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={LogIn}>
                <h1>Login Page</h1>
                <input type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login

import { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredencial) => { console.log(userCredencial) })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <form onSubmit={createAccount}>
        <h1>Create a new account</h1>
        <input type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Create account</button>
      </form>
    </div>
  )
}

export default Registration

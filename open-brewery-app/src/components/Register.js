
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Registration.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Make sure you have a firebase.js file that initializes Firebase

export default function Registration() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess("Account Created Successfully");
    } catch (err) {
        setError(err.message);
    }
};

return (
    <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <label htmlFor="email">
                Email:
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Sign Up</button><br />
            <p>Already Registered? <Link to="/login">Login</Link></p>
        </form>
    </div>
);
};

import React, { useState } from 'react';
import axios from 'axios';

function Signup({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                username,
                password,
            });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
                window.location.href = '/chat';
            }
        } catch (error) {
            console.error('Signup error:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Signup</button>
        </form>
    );
}

export default Signup;

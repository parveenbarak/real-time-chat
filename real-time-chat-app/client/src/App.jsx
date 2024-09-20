import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from '../src/components/chat';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/signup" element={<Signup setToken={setToken} />} />
                <Route path="/chat" element={<Chat token={token} />} />
            </Routes>
        </Router>
    );
}

export default App;

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat({ token }) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });
        return () => {
            socket.off();
        };
    }, []);

    const handleSend = () => {
        socket.emit('message', { text: message, token });
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg.text}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default Chat;

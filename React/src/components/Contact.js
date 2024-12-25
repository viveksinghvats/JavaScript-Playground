import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [serverMessage, setServerMessage] = useState('');
    const [connectionStatus, setConnectionStatus] = useState('Disconnected');
    const [count, setCount] = useState(1);
    const socket = new WebSocket('ws://localhost:6007'); // Parcel dev server will proxy to 

    useEffect(() => {
        // Create a WebSocket connection to the server

        // Handle WebSocket connection open
        socket.onopen = () => {
            console.log('Connected to the server');
            // Send a message to the server
        };

        // Handle messages received from the server
        socket.onmessage = (event) => {
            console.log(`Received from server: ${event.data}`);
            setServerMessage(event.data);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
            setConnectionStatus('Connection Error');
        };

        // Handle WebSocket closure
        socket.onclose = () => {
            console.log('Disconnected from the server');
        };

        // Cleanup when component unmounts
        return () => {
            socket.close();
        };
    }, []);

    function sendMessageToServer(){
        socket.send(count);
         // Handle messages received from the server
         socket.onmessage = (event) => {
            console.log(`Received from server: ${event.data}`);
            setCount(event.data);
            setServerMessage(event.data);
        };
    }

    return (
        <div>
            <h1>WebSocket Client</h1>
            <p>Message from server: {serverMessage}</p>
            <button onClick={sendMessageToServer}>button</button>
        </div>
    );
};

export default Contact;

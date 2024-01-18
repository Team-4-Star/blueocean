import React, { useState, useEffect } from 'react';
import './Commands.css'

const Commands = () => {
    const [commands, setCommands] = useState([]);

    const fetchCommands = async () => {
        try {
            const response = await fetch('https://blue-ocean-back-end.onrender.com/commands');
            if (!response.ok) {
                throw new Error(`something went wrong! ${response.status}`);
            }
            const data = await response.json();
            setCommands(data);
            console.log(data);
            } catch {
                console.log('error');
        }
    }

    useEffect(() => {
        fetchCommands();
    }, [])

    return (
        <div className="commands-container">
            <h1>Commands</h1>
            <ul>
                {commands.map((commands) => 
                    <li key={commands.id}>
                        <h2>{commands.command}</h2>
                        <p>{commands.description}</p>
                    </li>
                )}
            </ul>
        </div>
        
    )
}

export default Commands;

// [{"id":1,"command":"createdb <database_name>","description":"Create a PostgreSQL database"},
// {"id":2,"command":"dropdb <database_name>","description":"Drop a PostgreSQL database"}]
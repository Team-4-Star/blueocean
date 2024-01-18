import React, { useState, useEffect } from 'react';
import { FaCopy } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import './Commands.css'

const Commands = () => {
    const [commands, setCommands] = useState([]);
    const [copiedCommandId, setCopiedCommandId] = useState(null);

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

    const copyCommand = (command, id) => {
        navigator.clipboard.writeText(command);
        setCopiedCommandId(id);
        setTimeout(() => setCopiedCommandId(null), 1000);
    }

    return (
        <div className="commands-container">
            <h1>Common Commands <FaCopy /></h1>
            <ul className="commands-list">
                {commands.map((commands) => 
                    <ul key={commands.id} className="command-list-item">
                        <h2>
                            {commands.command} <LuCopy id="copyButton" onClick={() => copyCommand(commands.command, commands.id)} />
                            {copiedCommandId === commands.id && <span className={`copied-message ${copiedCommandId === commands.id ? 'visible' : ''}`}>Copied!</span>}
                        </h2>
                        <p>{commands.description}</p>
                    </ul>
                )}
            </ul>
        </div>
    )
}

export default Commands;

// [{"id":1,"command":"createdb <database_name>","description":"Create a PostgreSQL database"},
// {"id":2,"command":"dropdb <database_name>","description":"Drop a PostgreSQL database"}]
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
        console.log("Copied!")
    }

    return (
        <div className="commands-container">
            <h1>Common Commands <FaCopy /></h1>
            <ul className="commands-list">
                {commands.map((command) => 
                    <ul key={command.id} className="command-list-item">
                        <h2>
                            {command.command} <LuCopy className="copyButton" onClick={() => copyCommand(command.command, command.id)} />
                            {copiedCommandId === command.id && <span className={`copied-message ${copiedCommandId === command.id}`}>Copied!</span>}
                        </h2>
                        <p>{command.description}</p>
                    </ul>
                )}
            </ul>
        </div>
    )
}

export default Commands;

// [{"id":1,"command":"createdb <database_name>","description":"Create a PostgreSQL database"},
// {"id":2,"command":"dropdb <database_name>","description":"Drop a PostgreSQL database"}]
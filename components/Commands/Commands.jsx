import React, { useState, useEffect } from 'react';
import { FaCopy } from 'react-icons/fa';
import { LuCopy } from 'react-icons/lu';
import './Commands.css';

const Commands = () => {
  const [commands, setCommands] = useState([]);
  const [copiedCommandId, setCopiedCommandId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fuzzySearch = (searchTerm, target) => {
    let searchIndex = 0;
    for (let i = 0; i < target.length; i++) {
      if (target[i].toLowerCase() === searchTerm[searchIndex]) {
        searchIndex++;
      }
      if (searchIndex === searchTerm.length) {
        return true;
      }
    }
    return false;
  };

  const searchCommands = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
    } else {
      const results = commands.filter((command) =>
        fuzzySearch(searchTerm.toLowerCase(), command.command.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const fetchCommands = async () => {
    try {
      const response = await fetch('https://solidfy.onrender.com/commands');
      if (!response.ok) {
        throw new Error(`something went wrong! ${response.status}`);
      }
      const data = await response.json();
      setCommands(data);
      console.log(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // added searchTerm to dependency array to fix empty array bug
  useEffect(() => {
    fetchCommands();
    searchCommands();
  }, [searchTerm]);

  const copyCommand = (command, id) => {
    navigator.clipboard.writeText(command);
    setCopiedCommandId(id);
    setTimeout(() => setCopiedCommandId(null), 1500);
    console.log('Copied!');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    searchCommands();
  };

  return (

    <div className="commands-container">
      <h1 className="commands-header">
        Common Commands <FaCopy />
      </h1>
      <div id="search-container">
        <input
          id="command-search"
          value={searchTerm}
          placeholder="search commands"
          onChange={handleInputChange}
        />
        {/* Remove the button as it's not needed anymore */}
      </div>

      <ul className="commands-list">
        {(searchResults.length > 0 ? searchResults : commands).map((command) => (
          <div className="command-list-item" key={command.id}>
            <ul className="command-list-text">
              <h2>"{command.command}"</h2>
              <p>{command.description}</p>
            </ul>
            <div className="command-list-copy">
            <span
                className={`copied-message ${copiedCommandId === command.id ? 'visible' : 'hidden'}`}
              >
                Copied!
              </span>
              <LuCopy
                className="copyButton"
                onClick={() => copyCommand(command.command, command.id)}
              />
             
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Commands;
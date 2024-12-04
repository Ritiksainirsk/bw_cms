import React, { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';

const Search = ({ itemList, setItemList, componentList }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = (searchTerm) => {
        if (searchTerm.length > 0) {
            const filteredSuggestions = componentList.filter(component =>
                component.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchTerm(searchTerm);
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
            setSearchTerm('');
        }
    };
    const handleAddItem = (item) => {
        if (!itemList.includes(item)) {
            setItemList([...itemList, item]);
        }
        setSearchTerm('');
        setSuggestions([]);
    };
    return (
        <>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for components..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            {suggestions.length > 0 && (
                <ul className="list-group">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {suggestion.name}
                            <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleAddItem(suggestion)}
                            >
                                <HiPlus />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Search;
import React, { useState, ChangeEvent } from 'react';

type Search = {
    searchKeyword(keyword: string): void;
}

export const SearchBar: React.FC<Search> = ({searchKeyword}) => {

    const [word, setWord] = useState('');

    const updateWord = (event:ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    }

    const callSearch = () => {
        searchKeyword(word);
        setWord('');
    }

    return (
        <div id="navbar-container">
            <div className="input-group">
                <button onClick={callSearch}>Buscar</button>
                <input onChange={updateWord} type="text" name="search-box" />                
            </div>
        </div>
    )
}
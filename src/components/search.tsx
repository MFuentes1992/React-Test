import React, { useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import $ from "jquery";
import { FormControl, InputGroup } from 'react-bootstrap';
type Search = {
    searchKeyword(keyword: string): void,
    removeKeyword(keyword: string): void
}

export const SearchBar: React.FC<Search> = ({searchKeyword, removeKeyword}) => {

    const [word, setWord] = useState('');

    const updateWord = (event:ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    }

    const quitSearch = () => {
        removeKeyword('');
        setWord('');
        $('input').val('');
    }

    const callSearch = () => {
        searchKeyword(word);
        setWord('');
    }

    return (
        <div id="navbar-container">
            <div className="input-group">                
                <a href="#" onClick={callSearch} className="button6">Ok</a>
                <input onChange={updateWord} type="text" name="search-box" /> 
                <a href="#" onClick={quitSearch} className="button6" style={{backgroundColor:"#668fff"}}>Cancel</a>                              
            </div>
        </div>
    )
}
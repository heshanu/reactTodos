import React from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';
import './compoent.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>
            <HighlightIcon />
            TodoList</h1>
        </div>
    );
}

export default Header;

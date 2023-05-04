import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props)=>{
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <DeleteIcon />
        </div>
    );
}

export default Note;

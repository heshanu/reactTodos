import React, { useState } from 'react';
//import { Fab,AddIcon } from '@material-ui/icons';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"

//import delete component
import Note from './Note';

const CreateArea = (props) => {

    //props to pass the note to the app.jsx
    const [note, setNote] = useState({
        title: '', content: ''
    })

    const [error, setError] = useState();

    const submitHandler = (event) => {
        const { name, value } = event.target;
        event.preventDefault();
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        });


    }

    const submitNodeHandler = (event) => {
        //pass the note to the app.jsx
        props.onAdd(note);
        setNote({
            title: '', content: ''
        });
        //prevent the page from refreshing
        event.preventDefault();
    }



    return (
        <div>
            <form className='create-note'>
                <input name='title' value={note.title} placeholder='Title' onChange={submitHandler} />
                <textarea name='content' rows="3" value={note.content} placeholder='Take a note...' onChange={submitHandler} />


                <Fab onClick={submitNodeHandler}>
                    <AddIcon />
                </Fab>

                <p>{error}</p>
            </form>
        </div>
    );
}

export default CreateArea;

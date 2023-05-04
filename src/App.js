import React from 'react';
import './App.css';

import DeleteIcon from "@material-ui/icons/Delete";


//import Header 
import Header from '././compoents/Header';
import CreateArea from './compoents/CreateArea';

import { Note } from '@material-ui/icons';
import Footer from './compoents/Footer';

function App() {
  const [notes, setNotes] = React.useState([]);

  const addNote = (newNote) => {
    if (notes.title != " " && notes.content != " ") {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />

      {
        notes.map((noteItem, index) => {
          return (
            <div key={index}>
              <h1>{noteItem.title}</h1>
              <p>{noteItem.content}</p>
              <button onClick={deleteNote}><DeleteIcon /></button>
              <hr />
            </div>
          )
        })
      }
      <Footer />

    </div>
  );
}

export default App;

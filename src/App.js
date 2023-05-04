import React from 'react';
import './App.css';

import DeleteIcon from "@material-ui/icons/Delete";

//import Header 
import Header from '././compoents/Header';
import CreateArea from './compoents/CreateArea';

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

  //delete note function by using filter method 
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />

      {
        notes.length>0 && notes.map((noteItem, index) => {
          return (
            <div key={index}>
              <h1>{noteItem.title}</h1>
              <p>{noteItem.content}</p>
              <button  onClick={deleteNote(index)}><DeleteIcon /></button>
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

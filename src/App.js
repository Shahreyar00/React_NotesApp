import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		},
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app1-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem(
      'react-notes-app1-data', 
      JSON.stringify(notes)
    );
  },[notes]);

  
  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note)=>
            note.text.toLowerCase().includes(searchText.toLowerCase())  
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} 
        />
      </div>
    </div>
  );
}

export default App;

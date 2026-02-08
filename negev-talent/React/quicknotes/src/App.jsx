import { useState } from 'react'
import './App.css'
import InputForm from './components/inputForm.jsx'
import Notes from './components/notes.jsx'

function App() {
  const [notesList, setNotesList] = useState([])
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);

  let addNote = (note, title = "") => {
    let date = formatter.format(new Date());
    setNotesList([...notesList, { title, note, date }])
    console.log(notesList)
  }

  let deletNote = (index) => {
    // let newarr = [...notesList]
    // newarr.splice(index, 1);
    // setNotesList(newarr); this also works
    const result = confirm("Are you sure you want to delete your note?")
    if (result) {
      let newArr = notesList.filter((item, i) => i != index)
      setNotesList(newArr)
    }
  }
  return (
    <>
      <InputForm addNote={addNote} />
      <Notes notes={notesList} deletNote={deletNote} />
    </>

  )
}

export default App

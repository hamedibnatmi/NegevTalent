import { useState, useEffect } from 'react'
import './App.css'
import InputForm from './components/inputForm.jsx'
import Notes from './components/notes.jsx'
import NoteModal from './components/noteModal.jsx'

function App() {
  const [notesList, setNotesList] = useState(getNotes())
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
  const [modalNote, setModalNote] = useState([])
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);

  function getNotes() {
    try {
      const savedNotes = localStorage.getItem("notes");
      if (savedNotes) {
        return JSON.parse(savedNotes);
      }
    } catch (error) {
      console.error("Error getting notes:", error);
      return [];
    }
    return [];
  }

  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notesList));
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  }, [notesList]);

  let addNote = (note, title = "") => {
    let date = formatter.format(new Date());
    setNotesList([{ id: crypto.randomUUID(), title, note, date }, ...notesList]);
  }

  let updateNote = (id, title, text) => {
    let updatedNotesList = notesList.map((item) => {
      if (item.id == id) {
        let newDate = formatter.format(new Date());
        return { ...item, note: text, title: title, newDate: newDate }
      }
      return item;
    })
    setNotesList(updatedNotesList);
    closeOpenNoteModal();
  }

  let deletNote = (id) => {
    const result = confirm("Are you sure you want to delete your note?")
    if (result) {
      let newArr = notesList.filter((item) => item.id != id)
      setNotesList(newArr)
      setIsNoteModalOpen(false);
    }
  }

  let closeOpenNoteModal = () => {
    setIsNoteModalOpen(!isNoteModalOpen);
  }

  let openNote = (note) => {
    setModalNote({ ...notesList.find(item => item.id == note.id), context: note.context });
    setIsNoteModalOpen(true);
  }

  return (
    <>
      <InputForm addNote={addNote} />
      <Notes notes={notesList} deletNote={deletNote} openNote={openNote} />
      {isNoteModalOpen && <NoteModal updateNote={updateNote} deletNote={deletNote} closeModal={closeOpenNoteModal} note={modalNote} />}
    </>
  )
}

export default App

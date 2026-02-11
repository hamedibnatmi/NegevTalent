import { useState, useEffect } from 'react'
import './App.css'
import InputForm from './components/inputForm.jsx'
import Notes from './components/notes.jsx'
import NoteModal from './components/noteModal.jsx'
import NoteSearch from './components/noteSearch.jsx'

function App() {
  const [notesList, setNotesList] = useState(getNotes())
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
  const [modalNote, setModalNote] = useState([])
  const [searchedListNotes, setSearchedListNotes] = useState(notesList)
  const [searchInput, setSearchInput] = useState({ text: "", categories: [] })
  const categories = [{ category: "Personal", color: "brown" }, { category: "Work", color: "orange" }, { category: "Other", color: "gray" }]
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

  const addNote = (note, title = "", selectedCategory) => {
    const { category, color } = categories.find(item => item.category == selectedCategory);
    let date = formatter.format(new Date());
    setNotesList([{ id: crypto.randomUUID(), title, note, date, category, color }, ...notesList]);
  }

  const updateNote = (id, title, note, selectedCategory) => {
    const { category, color } = categories.find(item => item.category == selectedCategory);
    let updatedNotesList = notesList.map((item) => {
      if (item.id == id) {
        let newDate = formatter.format(new Date());
        return { ...item, note, title, newDate, category, color }
      }
      return item;
    })

    setNotesList(updatedNotesList);
    closeOpenNoteModal();
  }

  const deletNote = (id) => {
    const result = confirm("Are you sure you want to delete your note?")
    if (result) {
      let newArr = notesList.filter((item) => item.id != id)
      setNotesList(newArr)
      setIsNoteModalOpen(false);
    }
  }

  const closeOpenNoteModal = () => {
    setIsNoteModalOpen(!isNoteModalOpen);
  }

  const openNote = (note) => {
    setModalNote({ ...notesList.find(item => item.id == note.id), context: note.context });
    setIsNoteModalOpen(true);
  }


  const search = (input) => {
    if (input.text != null) {
      setSearchInput({ ...searchInput, text: input.text });
    } else {
      if (input.checked) {
        let rest = searchInput.categories.filter((item) => item != input.category)
        setSearchInput({ ...searchInput, categories: [...rest, input.category] });
      } else {
        let rest = searchInput.categories.filter((item) => item != input.category)
        setSearchInput({ ...searchInput, categories: rest });
      }
    }
  }

  useEffect(() => {
    let listFilter;
    listFilter = searchInput.text ? notesList.filter(item => (item.note.includes(searchInput.text) || item.title.includes(searchInput.text))) : notesList;
    listFilter = searchInput.categories.length ? listFilter.filter(item => searchInput.categories.includes(item.category)) : listFilter;

    setSearchedListNotes(listFilter)

  }, [searchInput, notesList])

  return (
    <>
      <InputForm addNote={addNote} categories={categories} />
      <NoteSearch search={search} categories={categories} />
      <Notes searchedListNotes={searchedListNotes} deletNote={deletNote} openNote={openNote} />
      {isNoteModalOpen && <NoteModal updateNote={updateNote} deletNote={deletNote} closeModal={closeOpenNoteModal} note={modalNote} categories={categories} />}
    </>
  )
}

export default App

import InputForm from "./inputForm"
import Note from "./note"
export default function NoteModal({ updateNote, closeModal, note, categories }) {
    return (
        <>
            <div className="note-modal" onClick={() => closeModal()}>
                {(note.context == "openNote") && <Note context={note.context} note={note} xbtn={closeModal} />}
                {(note.context == "editNote") && <InputForm updateNote={updateNote} note={note} context={note.context} closeModal={closeModal} categories={categories} />}
            </div>
        </>
    )
}
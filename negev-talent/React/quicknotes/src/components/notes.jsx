import Note from "./note"

export default function Notes({ notes, deletNote, openNote }) {

    let creatNotes = notes.map((note) => {
        return (
            <Note context={"list"} key={note.id} note={note} xbtn={deletNote} openNote={openNote} />
        )
    })
    return (
        <div className="notes">
            {creatNotes}
        </div>
    )
}
export default function Notes({ notes, deletNote }) {

    let creatNotes = notes.map((note, index) => {
        return (
            <div className="note" key={index}>
                <div>
                    <font>{note.date}</font>
                    <button onClick={() => deletNote(index)}>x
                        <span className="tooltip">Delete</span>
                    </button>
                </div>
                {note.title && <h4 className="title">{note.title}</h4>}
                <p>
                    {note.note}
                </p>
            </div>
        )
    })
    return (
        <div className="notes">
            {creatNotes}
        </div>
    )
}
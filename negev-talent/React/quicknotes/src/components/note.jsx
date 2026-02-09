export default function Note({ context, note, xbtn, openNote }) {
    return (
        <div className="note" onClick={(e) => { e.stopPropagation(); openNote?.({ id: note.id, context: "openNote" }) }}>
            <div className="date">
                <div>
                    <font>{note.date}</font><br />
                    {note.newDate && <font>{note.newDate}</font>}
                </div>
                <button className="edit" onClick={(e) => { e.stopPropagation(); openNote?.({ id: note.id, context: "editNote" }) }}>Edit</button>
                <button onClick={(e) => { e.stopPropagation(); xbtn(note.id) }}>x
                    <span className="tooltip">{context == "list" ? "Delete" : "Close"}</span>
                </button>
            </div>
            {note.title && <h4 className="title">{note.title}</h4>}
            <p>
                {note.note}
            </p>
        </div>
    )
}
export default function Note({ context, note, xbtn, openNote }) {
    return (
        <div className="note" onClick={(e) => { e.stopPropagation(); openNote?.({ id: note.id, context: "openNote" }) }}>
            <div className="date">
                <div>
                    <font>{note.date}</font><br />
                    {note.newDate && <font>{note.newDate}</font>}
                </div>
                <button onClick={(e) => { e.stopPropagation(); xbtn(note.id) }}>x
                    <span className="tooltip">{context == "list" ? "Delete" : "Close"}</span>
                </button>
            </div>
            {note.title && <h4 className="title" onClick={(e) => { e.stopPropagation(); openNote?.({ id: note.id, context: "editNote" }) }}>{note.title}</h4>}
            <p onClick={(e) => { e.stopPropagation(); openNote?.({ id: note.id, context: "editNote" }) }}>
                {note.note}
            </p>
        </div>
    )
}
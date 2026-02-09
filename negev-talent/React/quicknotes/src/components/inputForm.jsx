import React, { useState } from "react"

export default function InputForm({ context, addNote, updateNote, note }) {
    const [inputValue, setInputValue] = useState(note?.note || "");
    const [title, setTitle] = useState(note?.title || "");
    const textAreaRef = React.useRef(null);

    const addNoteHandler = () => {
        if (context == "editNote") {
            if (inputValue || title) updateNote(note.id, title, inputValue);
            return;
        }
        if (inputValue || title) addNote(inputValue, title);
        setInputValue("");
        setTitle("");
        const isMobile = window.matchMedia("(max-width: 768px)").matches
        textAreaRef.current.style.height = isMobile ? "150px" : "250px";
    }
    const handleOnChangeTextArea = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
        setInputValue(e.target.value);
    }
    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value.trim())
    }
    return (
        <>
            <div className="formParent" onClick={(e) => e.stopPropagation()}>
                <form action="">
                    <input className="titleInput" placeholder="Title" onChange={handleOnChangeTitle} value={title} />
                    <textarea ref={textAreaRef} placeholder="Your note..." value={inputValue} onChange={handleOnChangeTextArea}></textarea>
                </form>
                <button className="addBtn" onClick={addNoteHandler} >{context == "editNote" ? "Update" : "Add"}</button>
            </div>
        </>
    )
}
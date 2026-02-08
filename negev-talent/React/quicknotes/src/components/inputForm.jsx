import React, { useState } from "react"

export default function InputForm({ addNote }) {
    const [inputValue, setInputValue] = useState("");
    const [title, setTitle] = useState("");
    const textAreaRef = React.useRef(null);

    const addNoteHandler = () => {
        if (inputValue || title) addNote(inputValue, title);
        setInputValue("");
        setTitle("");
        textAreaRef.current.style.height = "250px";
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
            <div className="formParent">
                <form action="">
                    <input className="titleInput" placeholder="Title" onChange={handleOnChangeTitle} value={title} />
                    <textarea ref={textAreaRef} placeholder="Your note..." value={inputValue} onChange={handleOnChangeTextArea}></textarea>
                </form>
                <button className="addBtn" onMouseDown={addNoteHandler} >Add</button>
            </div>
        </>
    )
}
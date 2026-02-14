import React, { useState } from "react"

export default function InputForm({ context, addNote, updateNote, note, categories }) {
    const [inputValue, setInputValue] = useState(note?.note || "");
    const [title, setTitle] = useState(note?.title || "");
    const [selectedCategory, setCelectedCategory] = useState(note ? note.category : categories[0].category)
    const textAreaRef = React.useRef(null);

    const addNoteHandler = () => {
        if (context == "editNote") {
            if (inputValue || title) updateNote(note.id, title, inputValue, selectedCategory);
            return;
        }
        if (inputValue || title) addNote(inputValue, title, selectedCategory);
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

    const selectCategory = () => {
        if (note) {
            let orderedCategories = [...categories.filter(item => item.category == note.category), ...categories.filter(item => item.category != note.category)]
            return orderedCategories.map(item => <option key={item.category}>{item.category}</option>)
        }
        return categories.map(item => <option key={item.category}>{item.category}</option>)
    }
    return (
        <>
            <div className="formParent" onClick={(e) => e.stopPropagation()}>
                <form action="">
                    <input className="titleInput" placeholder="Title" onChange={handleOnChangeTitle} value={title} />
                    <select className="category" name="category" onChange={e => setCelectedCategory(e.target.value)}>
                        {selectCategory()}
                    </select>
                    <textarea ref={textAreaRef} placeholder="Your note..." value={inputValue} onChange={handleOnChangeTextArea}></textarea>
                </form>
                <button className="addBtn" onClick={addNoteHandler} >{context == "editNote" ? "Update" : "Add"}</button>
            </div>
        </>
    )
}
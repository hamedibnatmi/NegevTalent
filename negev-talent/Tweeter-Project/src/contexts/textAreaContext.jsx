import { createContext, useContext, useState } from "react";

const TextAreaContext = createContext()

export const TextAreaProvider = ({ children }) => {
    const [textAreaInput, setTextAreaInput] = useState("");
    const [tweetsList, setTweetsList] = useState([])

    let value = {
        textAreaInput,
        setTextAreaInput,
        tweetsList,
        setTweetsList
    }
    return (
        <TextAreaContext.Provider value={value}>
            {children}
        </TextAreaContext.Provider>
    )
}

export const useTextAreaContext = () => {
    const context = useContext(TextAreaContext);
    if (!context) {
        return new Error("Error of Context using.. ")
    }
    return context
}
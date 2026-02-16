import { createContext, useContext, useReducer } from "react";

const TextAreaContext = createContext()
function reducer(state, action) {
    switch (action.type) {
        case "Set-TextArea-Input":
            return {
                ...state,
                textAreaInput: action.payload,
            }
        case "Set-Tweets-List":
            return {
                ...state,
                tweetsList: [action.payload, ...state.tweetsList],
            }

        default:
            return state;
    }
}

export const TextAreaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        textAreaInput: "",
        tweetsList: []
    },
        (init) => {
            const loaclTweetsList = localStorage.getItem("tweetsList");
            return loaclTweetsList ? JSON.parse(loaclTweetsList) : init;
        }
    )

    let value = {
        state,
        dispatch
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
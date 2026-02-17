import { createContext, useContext, useReducer } from "react";

const TweetsContext = createContext()
function reducer(state, action) {
    switch (action.type) {
        case "Set-TextArea-Input":
            return {
                ...state,
                textAreaInput: action.payload,
            }
        case "Set-post-Input":
            return {
                ...state,
                searchInput: action.payload,
            }
        case "Set-Tweets-List":
            return {
                ...state,
                tweetsList: [...action.payload],
            }
        case "Set-Tweets-Loader":
            return {
                ...state,
                loader: action.payload
            }
        case "Set-Tweets-Errors":
            return {
                ...state,
                errors: { ...state.errors, ...action.payload }
            }

        default:
            return state;
    }
}

export const TweetsContextProvider = ({ children }) => {
    const [tweetsListState, tweetsListDispatch] = useReducer(reducer, {
        tweetsList: [],
        loader: false,
        errors: {}
    },
        // (init) => {
        //     const loaclTweetsList = localStorage.getItem("tweetsList");
        //     return loaclTweetsList ? JSON.parse(loaclTweetsList) : init;
        // }
    )
    const [textAreaInputState, textAreaInputDispatch] = useReducer(reducer, {
        textAreaInput: "",
    })

    const [postInputState, postInputDispatch] = useReducer(reducer, {
        searchInput: "",
    })

    let value = {
        tweetsListState,
        tweetsListDispatch,
        textAreaInputState,
        textAreaInputDispatch,
        postInputState,
        postInputDispatch
    }
    return (
        <TweetsContext.Provider value={value}>
            {children}
        </TweetsContext.Provider>
    )
}

export const useTweetsContextContext = () => {
    const context = useContext(TweetsContext);
    if (!context) {
        return new Error("Error of Context using.. ")
    }
    return context
}
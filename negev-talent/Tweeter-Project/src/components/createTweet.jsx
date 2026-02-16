import { useState, useEffect } from "react";
import { useTextAreaContext } from "../contexts/textAreaContext";
import { Button } from "@mantine/core";

const CreatTweet = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const { state, dispatch } = useTextAreaContext();
    const submitHandle = (e) => {
        e.preventDefault();
        const time = new Date().toDateString();
        dispatch({
            type: "Set-Tweets-List",
            payload: { id: crypto.randomUUID(), text: state.textAreaInput, time, user: "name" }
        })
        dispatch({
            type: "Set-TextArea-Input",
            payload: "",
        })
    }

    useEffect(() => {
        localStorage.setItem("tweetsList", JSON.stringify(state))
    }, [state])

    const onChangeextAreaHandle = (e) => {
        e.target.value.length > 140 ?
            setIsDisabled(true)
            : setIsDisabled(false)
        dispatch({
            type: "Set-TextArea-Input",
            payload: e.target.value,
        })
    }


    return (
        <>
            <div className="create-tweet-form">
                <form action="" onSubmit={submitHandle}>
                    <textarea className="input" type="text" placeholder="What you have in mind..." value={state.textAreaInput} onChange={onChangeextAreaHandle} />
                    <div className={`form-footer ${isDisabled ? "two-elements" : ""}`}>
                        {isDisabled && <div><span>The tweet can't containe mre than 140 chars.</span></div>}
                        <Button type="submit" disabled={isDisabled} >Tweet</Button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CreatTweet;
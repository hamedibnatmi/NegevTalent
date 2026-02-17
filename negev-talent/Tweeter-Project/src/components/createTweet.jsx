import { useState, useEffect } from "react";
import { useTweetsContextContext } from "../contexts/tweetsContext";
import { Button, Loader } from "@mantine/core";

const CreatTweet = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const { tweetsListState, dispatch, textAreaInputState, textAreaInputDispatch, postInputState, postInputDispatch } = useTweetsContextContext();
    const submitHandle = (e) => {
        e.preventDefault();
        const date = new Date().toDateString();
        postInputDispatch({
            type: "Set-post-Input",
            payload: { content: textAreaInputState.textAreaInput, date, id: crypto.randomUUID(), userName: "joe" }
        })
        textAreaInputDispatch({
            type: "Set-TextArea-Input",
            payload: "",
        })
    }

    // useEffect(() => {
    //     localStorage.setItem("tweetsList", JSON.stringify(state))
    // }, [state])

    const onChangeextAreaHandle = (e) => {
        e.target.value.length > 140 ?
            setIsDisabled(true)
            : setIsDisabled(false)
        textAreaInputDispatch({
            type: "Set-TextArea-Input",
            payload: e.target.value,
        })
    }


    return (
        <>
            <div className="create-tweet-form">
                <form action="" onSubmit={submitHandle}>
                    <textarea className="input" type="text" placeholder="What you have in mind..." value={textAreaInputState.textAreaInput} onChange={onChangeextAreaHandle} />
                    <div className={`form-footer ${isDisabled || tweetsListState.errors.postTweets ? "two-elements" : ""}`}>
                        {isDisabled && <div><span>The tweet can't containe more than 140 chars.</span></div>}
                        {tweetsListState.errors.postTweets && <div><span>Failed to post the tweet!</span></div>}
                        <Button type="submit" loading={tweetsListState.loader} disabled={isDisabled} >Tweet</Button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CreatTweet;
import { useState } from "react";
import { useTextAreaContext } from "../contexts/textAreaContext";
import { Button } from "@mantine/core";
import { useEffect } from "react";

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
        console.log("myState: ", state)
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
                    <Button type="submit" mb="xs" mr="xs" disabled={isDisabled} >Tweet</Button>
                </form>
            </div>
        </>
    )
}

export default CreatTweet;
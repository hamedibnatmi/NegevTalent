import { useTextAreaContext } from "../contexts/textAreaContext";
import { Button } from "@mantine/core";

const CreatTweet = () => {
    const { state, dispatch } = useTextAreaContext();
    const submitHandle = (e) => {
        e.preventDefault();
        const time = new Date().toDateString();
        dispatch({
            type: "Set-Tweets-List",
            payload: { id: crypto.randomUUID(), text: state.textAreaInput, time, user: "hard coded" }
        })
        dispatch({
            type: "Set-TextArea-Input",
            payload: "",
        })

    }
    return (
        <>
            <div className="create-tweet-form">
                <form action="" onSubmit={submitHandle}>
                    <textarea className="input" type="text" placeholder="What you have in mind..." value={state.textAreaInput} onChange={e => dispatch({
                        type: "Set-TextArea-Input",
                        payload: e.target.value,
                    })} />
                    <Button type="submit" mb="xs" mr="xs" >Tweet</Button>
                </form>
            </div>
        </>
    )
}

export default CreatTweet;
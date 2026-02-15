import { useTextAreaContext } from "../contexts/textAreaContext";

const CreatTweet = () => {
    const { textAreaInput, setTextAreaInput, tweetsList, setTweetsList } = useTextAreaContext();
    const submitHandle = (e) => {
        e.preventDefault();
        setTweetsList([{ id: crypto.randomUUID(), text: textAreaInput }, ...tweetsList])
        setTextAreaInput("")

    }
    return (
        <>
            <div className="create-tweet-form">
                <form action="" onSubmit={submitHandle}>
                    <textarea className="input" type="text" placeholder="What you have in mind..." value={textAreaInput} onChange={e => setTextAreaInput(e.target.value)} />
                    <input className="tweet-btn" type="submit" value={"Tweet"} />
                </form>
            </div>
        </>
    )
}

export default CreatTweet;
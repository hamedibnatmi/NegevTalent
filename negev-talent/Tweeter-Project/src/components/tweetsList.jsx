import { useTextAreaContext } from "../contexts/textAreaContext";
import Tweet from "./tweet";


const TweetList = () => {
    const { state } = useTextAreaContext()

    const tweetsListRender = () => {
        return state.tweetsList.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
    }

    return (
        <>
            <div className="list">
                {tweetsListRender()}
            </div>
        </>
    )
}


export default TweetList;
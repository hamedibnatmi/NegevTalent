import { useTextAreaContext } from "../contexts/textAreaContext";
import Tweet from "./tweet";


const TweetList = () => {
    const { textAreaInput, tweetsList } = useTextAreaContext()

    const tweetsListRender = () => {
        return tweetsList.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
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
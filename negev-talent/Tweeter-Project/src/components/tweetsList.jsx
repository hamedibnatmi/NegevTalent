import { useEffect } from "react";
import { useTweetsContextContext } from "../contexts/tweetsContext";
import Tweet from "./tweet";
import { getTweets } from "../models/tweetsAPI";


const TweetList = () => {
    const { tweetsListState, tweetsListDispatch, postInputState } = useTweetsContextContext();

    useEffect(() => {
        (async () => {
            const tweets = await (await getTweets()).json()
            tweetsListDispatch({
                type: "Set-Tweets-List",
                payload: tweets || []
            })


        })();

    }, [postInputState])

    const tweetsListRender = () => {
        console.log("Dd1", postInputState)
        return tweetsListState.tweetsList.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
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
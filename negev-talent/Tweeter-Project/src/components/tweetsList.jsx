import { useEffect } from "react";
import { useTweetsContextContext } from "../contexts/tweetsContext";
import Tweet from "./tweet";
import { getTweets, postTweet } from "../models/tweetsAPI";


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

    }, [])

    useEffect(() => {
        console.log("post1", postInputState)
        if (postInputState.searchInput) {
            (async () => {
                await postTweet(postInputState.searchInput)
                const tweets = await (await getTweets()).json()

                tweetsListDispatch({
                    type: "Set-Tweets-List",
                    payload: tweets || []
                })


            })();
        }

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
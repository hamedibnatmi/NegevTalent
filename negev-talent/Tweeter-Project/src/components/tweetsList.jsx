import { useEffect } from "react";
import { useTweetsContextContext } from "../contexts/tweetsContext";
import Tweet from "./tweet";
import { getTweets, postTweet } from "../models/tweetsAPI";
import { Loader } from "@mantine/core";


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
        if (postInputState.searchInput) {

            (async () => {
                try {
                    tweetsListDispatch({
                        type: "Set-Tweets-Loader",
                        payload: true
                    })
                    await postTweet(postInputState.searchInput)

                } catch (error) {
                    console.error("Failed to post the tweet")
                } finally {
                    tweetsListDispatch({
                        type: "Set-Tweets-Loader",
                        payload: false
                    })
                }
                const tweets = await (await getTweets()).json()

                tweetsListDispatch({
                    type: "Set-Tweets-List",
                    payload: tweets || []
                })
            })();
        }
    }, [postInputState])

    const tweetsListRender = () => {
        return tweetsListState.loader && <Loader mt={"30%"}></Loader> || tweetsListState.tweetsList.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
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
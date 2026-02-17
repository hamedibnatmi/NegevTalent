import { useEffect } from "react";
import { useTweetsContextContext } from "../contexts/tweetsContext";
import Tweet from "./tweet";
import { getTweets, postTweet } from "../models/tweetsAPI";
import { Loader, Text } from "@mantine/core";


const TweetList = () => {
    const { tweetsListState, tweetsListDispatch, postInputState } = useTweetsContextContext();

    useEffect(() => {
        (async () => {
            try {
                tweetsListDispatch({
                    type: "Set-Tweets-Loader",
                    payload: true
                })
                const tweets = await (await getTweets()).json()
                tweetsListDispatch({
                    type: "Set-Tweets-List",
                    payload: tweets || []
                })
            } catch (error) {
                tweetsListDispatch({
                    type: "Set-Tweets-Errors",
                    payload: { getTweets: true }
                })
            } finally {
                tweetsListDispatch({
                    type: "Set-Tweets-Loader",
                    payload: false
                })
            }



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
                    tweetsListDispatch({
                        type: "Set-Tweets-Errors",
                        payload: { postTweets: true }
                    })
                } finally {
                    tweetsListDispatch({
                        type: "Set-Tweets-Loader",
                        payload: false
                    })
                    setTimeout(() => {
                        tweetsListDispatch({
                            type: "Set-Tweets-Errors",
                            payload: { postTweets: false }
                        })
                    }, 10000)
                }

                try {
                    tweetsListDispatch({
                        type: "Set-Tweets-Loader",
                        payload: true
                    })
                    console.error("Failed to post the tweet")
                    tweetsListDispatch({
                        type: "Set-Tweets-Errors",
                        payload: { getTweets: false }
                    })
                    const tweets = await (await getTweets()).json()
                    tweetsListDispatch({
                        type: "Set-Tweets-List",
                        payload: tweets || []
                    })
                } catch (error) {
                    console.error("Failed to post the tweet")
                    tweetsListDispatch({
                        type: "Set-Tweets-Errors",
                        payload: { getTweets: true }
                    })
                } finally {
                    tweetsListDispatch({
                        type: "Set-Tweets-Loader",
                        payload: false
                    })
                }

            })();
        }
    }, [postInputState])

    const tweetsListRender = () => {
        console.log("e1: ", tweetsListState)
        return tweetsListState.loader && <Loader mt={"30%"}></Loader> || tweetsListState.errors.getTweets && <Text c="red" mt={"30%"} >Failed to get list</Text> || tweetsListState.tweetsList.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
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
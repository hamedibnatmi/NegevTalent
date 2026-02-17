import CreatTweet from "../components/createTweet";
import TweetList from "../components/tweetsList";

const MainScreen = () => {


    return (
        <>
            <div className="main-screen">
                <CreatTweet />
                <TweetList />
            </div>
        </>
    )
}


export default MainScreen;
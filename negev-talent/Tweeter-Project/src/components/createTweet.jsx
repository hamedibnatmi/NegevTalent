

const CreatTweet = () => {


    return (
        <>
            <div className="create-tweet-form">
                <form action="">
                    <textarea className="input" type="text" placeholder="What you have in mind..." />
                    <input className="tweet-btn" type="submit" value={"Tweet"} />
                </form>
            </div>
        </>
    )
}


export default CreatTweet;
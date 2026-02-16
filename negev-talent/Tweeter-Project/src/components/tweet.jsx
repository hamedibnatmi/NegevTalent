
const Tweet = ({ tweet }) => {
    return (
        <>
            <div className="tweet">
                <div className="tweet-header">
                    <span className="name">{tweet.user}</span>
                    <span className="date">{tweet.time}</span>
                </div>
                <p className="tweet-text">
                    {tweet.text}
                </p>

            </div>
        </>
    )
}

export default Tweet;
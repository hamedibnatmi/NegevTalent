
const Tweet = ({ tweet }) => {
    return (
        <>
            <div className="tweet">
                <div className="tweet-header">
                    <span className="name">{tweet.userName}</span>
                    <span className="date">{tweet.date}</span>
                </div>
                <p className="tweet-text">
                    {tweet.content}
                </p>

            </div>
        </>
    )
}

export default Tweet;
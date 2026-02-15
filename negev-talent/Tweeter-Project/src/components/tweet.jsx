
const Tweet = ({ tweet }) => {
    return (
        <>
            <div className="tweet">
                <div className="tweet-header">
                    <span className="name">name</span>
                    <span className="date">fate</span>
                </div>
                <p className="tweet-text">
                    {tweet.text}
                </p>

            </div>
        </>
    )
}

export default Tweet;
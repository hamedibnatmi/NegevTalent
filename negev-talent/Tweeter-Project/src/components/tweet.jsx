
const Tweet = ({ tweet }) => {
    return (
        <>
            <div className="tweet">
                {tweet.text}
            </div>
        </>
    )
}

export default Tweet;
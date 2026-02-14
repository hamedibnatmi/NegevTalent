function Ex2() {
    const getClassName = (temprature) => {
        if (temprature > 25) return <div id="weatherBox" className="hell-scape"></div>
        if (temprature > 15) return <div id="weatherBox" className="fair"></div>
        return <div id="weatherBox" className="cold"></div>
    }
    return (
        <div>
            <div className="ex-space">
                <h4 className='ex-title'>Exercise 2</h4>
                <div className="exercise" id="ex-2">
                    {getClassName(26)}
                </div>
            </div>
        </div>
    )
}

export default Ex2
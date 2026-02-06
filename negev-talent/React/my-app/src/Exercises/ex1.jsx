

function Ex1() {
    let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }
    ]
    const showCompany = (name, revenue) => {
        return (
            <>
                {name} makes {revenue} every year
            </>
        )
    }

    return (
        <div>
            <div className="ex-space">
                <h4 className='ex-title'>Exercise 1</h4>
                <div className="exercise" id="ex-1">
                    {companies.map(company => {
                        return <div key={company.name}>{showCompany(company.name, company.revenue)}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Ex1
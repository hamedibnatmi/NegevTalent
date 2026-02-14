import { useEffect, useState } from "react";

export default function Ex2Fetch() {
    let [data, setData] = useState([])
    let [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(res => res.json()).then(setData).catch(err => console.log("error", err))
    }, [])

    let postsList = data.map(item => {
        return (
            <div key={item.id} style={{ border: "1px solid black" }}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        )
    })

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: isMobileScreen ? "repeat(1,minmax(100px, 1fr))" : "repeat(4,minmax(100px, 1fr))",
            gap: "10px",

        }}>
            {postsList}
        </div>
    )
}
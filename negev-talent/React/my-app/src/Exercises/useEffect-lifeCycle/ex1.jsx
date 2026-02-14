import { useEffect, useState } from "react";

export default function Ex1Time() {
    let [time, setTime] = useState("")
    useEffect(() => {
        let interval = setInterval(() => {
            let current = new Date().toString().split(" ")[4];
            setTime(current)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            {time}
        </div>
    )
}
import React, {useEffect, useState} from 'react'

function Count() {
    const [count, setCount] = useState("0")
    const [number, setnumber] = useState("1000123")
    const [duration, setduration] = useState("1")

    useEffect(() => {
        let start = 0;
        const end = parseInt(number.substring(0,3))

        if(start === end) return;

        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;

        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if(start === end) clearInterval(timer)
        }, incrementTime);
    }, [number, duration])

    return (
        <div>
            <i>{count}</i>
        </div>
    )
}

export default Count

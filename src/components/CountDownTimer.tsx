import React, { useState, useEffect } from "react"

const CountDownTimer: React.FC = () => {

    const [time, setTime] = useState(0); // initial time in seconds
    const [isRuning, setIsRuning] = useState(false);
    const [remainingTime, setRemainingTime] = useState (0);
    
useEffect (() => {

    let timer: NodeJS.Timeout;
    if (isRuning && remainingTime > 0) {
        timer = setInterval(() => {
            setRemainingTime((prev) => prev -1)
        }, 1000)
    }
    
    else if (remainingTime === 0) {
        setIsRuning(false);
    }

    return () => clearInterval (timer);
} , [isRuning, remainingTime])

const handleStart = () => {
    if (time > 0 ) {
        setRemainingTime(time);
        setIsRuning(true)
    }
}

const handlePause = () => {
    setIsRuning(false)
}

const handleReset = () => {
    setIsRuning(false)
    setRemainingTime(0)
    setTime(0)
}

return (
    <div className="flex flex-col min-h-screen 
    items-center justify-center bg-gradient-to-br
    from-black to-grey">

<img src="../image/logo.png" alt="IT Man Pakistan"
className="absolute top-4 right-4 h-auto w-40"
/>

<h1 className="text-4xl font-extrabold uppercase mb-6 
text-white"> Countdown Timer</h1>

<input type="number" 
className="border-2 border-grey-400 bg-transparent p-3 
mb-6 text-yellow-500 text-xl rounded"
placeholder="Enter Time In Seconds"
value={time > 0 ? time : ""}
onChange={(e) => setTime(Number(e.target.value))}
/>

<div className="text-3xl font-semibold uppercase mb-6 
text-white">
    {remainingTime} second remaining
</div>

<div className="self-center content-place-self-centeruppercase"> 
    <button
    onClick={handleStart} className="text-white px-8 py-4 rounded-lg font-normal
    bg-gradient-to-r from-green-800 to-green-500
    hover:from-green-900 hover:to-green-600">
Start   
    </button>

 <button
    onClick={handlePause} className="text-white px-8 py-4 rounded-lg font-normal
    bg-gradient-to-r from-yellow-500 to-orange-500
    hover:from-yellow-600 hover:to-orange-600">
Pause 
    </button>

    <button
    onClick={handleReset} className="text-white px-8 py-4 rounded-lg font-normal
    bg-gradient-to-r from-red-800 to-red-400
    hover:from-red-900 hover:to-red-600">
Rest
    </button>

<footer className=" mt-10 text-black-bold text-medium">
    Under the Supervision of IT MAN Pakistan
</footer>

</div>

    </div>
)
}

export default CountDownTimer
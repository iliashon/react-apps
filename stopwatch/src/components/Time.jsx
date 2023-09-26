import { useEffect, useState } from "react";
import style from "./Time.module.css";

export default function Time() {
    const [time, setTime] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(time + 1);
            }, 10);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    return (
        <div className={style.TimeBlock}>
            <h4 className={style.TimeNumber}>
                {("0" + (Math.floor(time / 6000) % 60)).toString().slice(-2)}:
                {("0" + Math.floor((time / 100) % 60)).toString().slice(-2)}:
                {("0" + Math.floor(time)).toString().slice(-2)}
            </h4>
            <div className={style.TimeBlockButton}>
                <button
                    onClick={() => {
                        setIsRunning(!isRunning);
                    }}
                >
                    {!isRunning ? "Start" : "Stop"}
                </button>
                <button
                    disabled={time === 0 ? true : false}
                    onClick={() => {
                        setTime(0);
                        setIsRunning(false);
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

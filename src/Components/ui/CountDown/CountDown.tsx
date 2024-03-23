import {FC, useEffect, useState} from "react";
import * as SC from './CountDown.style'

export interface CountDownProps {
    minutes: number
    seconds: number
    openWindow: () => void
}

const CountDown: FC<CountDownProps> = ({minutes, seconds, openWindow}) => {

    const [[m, s], setTime] = useState([minutes, seconds]);
    const [timeOut, setTimeOut] = useState(false)

    const tick = () => {
        if (m === 0 && s === 0) {
            setTime([0, 0]);
            openWindow()
        } else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
        if (m === 0 && s <= 31) {
            setTimeOut(true)
        }
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <SC.Counter timeOut={timeOut}>
            <p>{`${m
                .toString()
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
            </p>
        </SC.Counter>
    );
};

export default CountDown;
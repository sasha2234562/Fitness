import {useEffect, useState} from "react";
import * as SC from './CountDown.style.ts'

const CountDown = ({minutes = 0, seconds = 0}) => {
    const [[m, s], setTime] = useState([minutes, seconds]);
    const [timeOut, setTimeOut] = useState(false)

    const tick = () => {
        if (m === 0 && s === 0) {
            setTime([0, 0]);
        } else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
        if( m === 0 && s <= 31){
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
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
        </SC.Counter>
    );
};

export default CountDown;
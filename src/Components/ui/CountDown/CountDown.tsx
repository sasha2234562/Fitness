import {FC, memo, useCallback, useEffect, useState} from "react";
import * as SC from './CountDown.style'
import points from '../../../assets/images/points.svg'
import pointsBlue from '../../../assets/images/pointsBlue.svg'

export interface CountDownProps {
    minutes: number
    seconds: number
    openWindow: () => void
}

const CountDown: FC<CountDownProps> = memo(({minutes, seconds, openWindow}) => {
    const [[m, s], setTime] = useState([minutes, seconds]);
    const [timeOut, setTimeOut] = useState(false);

    const tick = useCallback(() => {
        if (m === 0 && s === 0) {
            setTime([0, 0]);
        } else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
        if (m === 0 && s <= 31) {
            setTimeOut(true)
        }
    }, [m, s]);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, [s, m, tick]);

    useEffect(() => {
        if (m === 0 && s === 0) {
            openWindow();
        }
    }, [s, m]);
    return (
        <SC.Counter timeOut={timeOut}>
            <div style={{width: "fit-content"}}>
                <SC.TimeCount>{`${m.toString().padStart(2, '0')}`}</SC.TimeCount>
                <SC.TextCount>часов</SC.TextCount>
            </div>
            <SC.Poins src={timeOut ? points : pointsBlue} alt="points"/>
            <div>
                <SC.TimeCount>{`${s.toString().padStart(2, '0')}`}</SC.TimeCount>
                <SC.TextCount>минут</SC.TextCount>
            </div>
        </SC.Counter>
    );
});

export default CountDown;
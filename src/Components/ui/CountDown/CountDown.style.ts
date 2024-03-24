import styled from "styled-components";
import {font} from "@/common";
export interface CounterProps{
    timeOut: boolean
}

export const Counter = styled.div<CounterProps>`
    ${font({Fmax:60, Fmin:40, lineHeight: 1.3, weight: 400, family: 'Bebas Neue, sans-serif'})};
    color: ${(props) => (props.timeOut ? 'rgb(253, 77, 53)' : 'rgb(1, 185, 197)')};
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0;
    text-transform: uppercase;
`
export const Poins = styled.img`
    padding: 0 10px 15%;
    height: fit-content;
    z-index: 11110;
`
export const TimeCount = styled.p`
    height: fit-content;
`
export const TextCount = styled.p`
    ${font({Fmax: 16, Fmin:14, color: 'rgb(129, 135, 152)', lineHeight: 1.3})}
    letter-spacing: 0;
    text-align: center;
`
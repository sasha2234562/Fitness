import styled from "styled-components";
import {font} from "@/common";
export interface CounterProps{
    timeOut: boolean
}

export const Counter = styled.div<CounterProps>`
    ${font({Fmax:60, Fmin:40, lineHeight: 1.3, weight: 400, family: 'Bebas Neue, sans-serif'})};
    color: ${(props) => (props.timeOut ? 'rgb(253, 77, 53)' : 'rgb(1, 185, 197)')};
    display: flex;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
`
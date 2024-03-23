import styled from "styled-components";
import {font} from "@/common";

export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid rgb(231, 234, 241);
    border-radius: 1.25rem;
    background: rgb(255, 255, 255);
    padding: 1.63rem 1.38rem 1.25rem 1.63rem;
    width: 100%;
`
export const Radio = styled.input`
    padding: 3px;
    background-color: yellow;
`
export const Name = styled.span`
    ${font({Fmax:26, Fmin: 24, lineHeight: 1.0,weight: 400, family: 'Bebas Neue Cyrillic, sans-serif'})};
    letter-spacing: 0;
    text-align: left;
`
export const Price = styled.div`
    ${font({Fmax: 20, Fmin: 20, lineHeight: 1.1})};
    letter-spacing: 0;
    text-align: left;
    position: relative;
    &:before {
        content: "";
        border-bottom: 2px solid rgb(253, 77, 53);
        position: absolute;
        width: 100%;
        height: 44%;
        transform: rotate(-18deg);
        left: 0;
    }
    &:after {
        content: "";
        border-bottom: 2px solid rgb(253, 77, 53);
        position: absolute;
        width: 100%;
        height: 44%;
        transform: rotate(18deg);
        left: 0;
    }
`
export const PriceActual = styled.span`
    ${font({Fmax:46, Fmin: 44, lineHeight: 1.1})}
    letter-spacing: 0;
    text-align: left;
`
import styled from "styled-components";
import {font} from "../../../common.ts";

export const Container = styled.div`
    display: flex;
    align-items: center;
    //width: 100%;
    min-height: 5.47rem;
    border: 0.13rem solid rgb(211, 214, 221);
    border-radius: 1.25rem;
    background: rgb(255, 255, 255);
    padding: 23px 31px 14px 52px;
    gap: 42px;
    margin: 40px 0 12px 0;
    position: relative;
    @media (max-width: 1200px) {
        margin: 6px 0 12px 0 ;
        flex-wrap: wrap;
    }
`
export const Star = styled.img`
    position: absolute;
    right: 6px;
    top: -20%;
`
export const Wrapper = styled.div`
    gap: 22px; 
    display: flex;
`

export const Title = styled.span`
    ${font({Fmax: 38, Fmin: 24, weight: 400, lineHeight: 1.0})};
    font-family: Bebas Neue Cyrillic,sans-serif;
    letter-spacing: 0;
    text-align: left;
`
export const Price = styled.span`
    ${font({Fmax:50, Fmin:44, lineHeight: 1.1})};
    font-family: PT Root UI, sans-serif;
    letter-spacing: -0.13rem;
    text-align: left;
`
export const Recommendation = styled.p`
    ${font({Fmax:16, Fmin: 14, weight: 500, lineHeight: 1.3, color:'rgb(47, 67, 83)'})};
    font-family: PT Root UI, sans-serif;
    letter-spacing: 0;
    text-align: left;
`
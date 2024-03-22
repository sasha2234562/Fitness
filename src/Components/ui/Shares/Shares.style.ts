import styled from "styled-components";
import {font} from "../../../common.ts";

export const Container = styled.div`
    padding: 0 27px 0 31px;
    gap: 20px;
    border: 2px solid rgb(211, 214, 221);
    border-radius: 20px;
    background: rgb(255, 255, 255);
    width: 130px;
    height: 261px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
export const Star = styled.img`
    position: absolute;
    top: -10%;
    right: 6px;
`
export const Discount = styled.span`
    ${font({Fmax: 18, Fmin: 13, weight: 500, color: 'rgb(255, 255, 255)', lineHeight: 1.3})};
    letter-spacing: 0;
    position: absolute;
    right: 16px;
    top: -4px;
`
export const Name= styled.span`
    ${font({Fmin:24, Fmax:30, lineHeight: 1.0, family: 'Bebas Neue Cyrillic, sans-serif', color: 'rgb(104, 112, 120)', weight: 400})};
    margin-top: 45px;
    letter-spacing: 0;
    text-align: left;
    white-space: nowrap;
`
export const Price = styled.span`
    ${font({Fmin: 44, Fmax: 46, lineHeight: 1.1})}
    font-family: PT Root UI, sans-serif;
    letter-spacing: -0.13rem;
    text-align: left;
`
export const Recommendation = styled.p`
    color: rgb(47, 67, 83);
    font-family: PT Root UI, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 16px;
`
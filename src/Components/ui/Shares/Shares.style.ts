import styled from "styled-components";
import {font} from "@/common";

export const Container = styled.div`
    padding: 0 27px 0 31px;
    gap: 20px;
    border: 2px solid rgb(211, 214, 221);
    border-radius: 20px;
    background: rgb(255, 255, 255);
    width: 100%;
    max-height: 261px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media (max-width: 500px) {
        gap: 26px;
        padding: 1rem;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
    }
`
export const Star = styled.img`
    position: absolute;
    top: -10%;
    right: 6px;
    @media (max-width: 800px){
        top: -14%;
    }
`
export const Discount = styled.span`
    ${font({Fmax: 18, Fmin: 13, weight: 500, color: 'rgb(255, 255, 255)', lineHeight: 1.3})};
    letter-spacing: 0;
    position: absolute;
    right: 18px;
    top: -4px;

`
export const Name= styled.span`
    ${font({Fmin:24, Fmax:30, lineHeight: 1.0, family: 'Bebas Neue Cyrillic, sans-serif', color: 'rgb(104, 112, 120)', weight: 400})};
    margin-top: 45px;
    letter-spacing: 0;
    white-space: nowrap;
    @media (max-width: 800px){
        margin: 0;
    }
`
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Price = styled.span`
    ${font({Fmin: 44, Fmax: 46, lineHeight: 1.1})}
    font-family: PT Root UI, sans-serif;
    letter-spacing: -0.13rem;
    text-align: left;
`
export const DiscountPrice = styled.span`
    ${font({Fmax: 24, Fmin: 20, color: 'rgb(149, 151, 159)', weight: 500, lineHeight: 1.1})}
    letter-spacing: 0;
    text-align: right;
    text-decoration: line-through;
    @media (max-width: 500px) {
        position: absolute;
        bottom: -20px;
        right: 0;
    }
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
    @media (max-width: 800px){
        width: 50%;
        text-align: left;
    }
`
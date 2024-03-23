import styled from "styled-components";
import {font} from "@/common";

export const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 5.47rem;
    border: 2px solid rgb(211, 214, 221);
    border-radius: 1.25rem;
    background: rgb(255, 255, 255);
    padding: 23px 31px 14px 52px;
    gap: 42px;
    margin: 40px 0 12px 0;
    position: relative;
    @media (max-width: 1200px) {
        margin: 6px 60px 12px 0 ;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 800px) {
        margin: 6px 20px 12px 20px;
    }
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
    right: 6px;
    top: -20%;
    @media (max-width: 800px) {
        top: -14%;
    }
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
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Price = styled.span`
    ${font({Fmax:50, Fmin:44, lineHeight: 1.1})};
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
    ${font({Fmax:16, Fmin: 14, weight: 500, lineHeight: 1.3, color:'rgb(47, 67, 83)'})};
    font-family: PT Root UI, sans-serif;
    letter-spacing: 0;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 800px){
        width: 50%;
    }
`
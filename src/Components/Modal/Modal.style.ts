import styled from "styled-components";
import {font} from "../../common.ts";

export const Window = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`
export const Container = styled.div`
    background: rgb(245, 247, 247);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 61px 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`
export const Title = styled.h2`
    ${font({Fmax: 30, Fmin: 24, lineHeight: 1.3, family:"Rubik, sans-serif"})}
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
    span{
        color: rgb(1, 185, 197);
    }
`
export const WeKnow = styled.p`
    ${font({Fmax: 24, Fmin: 15, family:'Rubik, sans-serif', lineHeight:1.3, weight: 500})}
    letter-spacing: 0;
    text-align: left;
    span{
        font-weight: 700;
    }
`
export const Discount = styled.p`
    ${font({Fmax: 24, Fmin: 15, lineHeight: 1.3})};
    letter-spacing: 0;
    text-align: left;
    span{
        color: rgb(1, 185, 197);
    }
`
export const Look = styled.p`
    ${font({Fmax: 24, Fmin: 15, lineHeight:1.3, color: 'rgb(18, 25, 29)'})};
    letter-spacing: 0;
    text-align: left;
`
export const PriceContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
`
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
export const Data = styled.span`
    ${font({Fmax:26, Fmin: 24, lineHeight: 1.0,weight: 400, family: 'Bebas Neue Cyrillic, sans-serif'})};
    letter-spacing: 0;
    text-align: left;
`
export const Price = styled.span`
    ${font({Fmax: 20, Fmin: 20, lineHeight: 1.1})};
    letter-spacing: 0;
    text-align: left;
`
export const PriceActual = styled.span`
    ${font({Fmax:46, Fmin: 44, lineHeight: 1.1})}
    letter-spacing: 0;
    text-align: left;
`
export const Close = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
`
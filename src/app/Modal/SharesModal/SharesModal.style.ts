import styled from "styled-components";
import {font} from "@/common";
import {ContainerProps} from "./SharesModal.type";


export const PriceWrapper = styled.div<ContainerProps>`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 196px;
    width: 210px;
    justify-content: space-between;
    align-items: flex-start;
    border: 2px solid ${(props=> props.active ? 'rgb(1, 185, 197)' : 'rgb(211, 214, 221)')};
    background: ${(props=> props.active ? 'rgba(1, 185, 197, 0.05)' : 'rgb(255, 255, 255)')};
    border-radius: 1.25rem;
    background: rgb(255, 255, 255);
    padding: 1.63rem 1.38rem 1.25rem 1.63rem;
    @media (max-width: 930px) {
        width: 100%;
        gap: 26px;
        padding: 24px 12px 18px 20px;
        height: auto;
        min-height: 134px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    @media (max-width: 425px) {
        flex-direction: column;
        align-items: flex-start;
    }
    .radio input { display: none; }
    .radio span {
        position: relative; 
        display: inline-block; 
        width: 20px; height: 20px;
        background: #fff; 
        border-radius: 50%; 
        border: 2px solid rgb(85, 89, 101);
    }
    .radio input:checked + span {
        background: #fff; 
    }
  
    .radio input:checked + span::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 5px;
        background: rgb(1, 185, 197);
        width: 10px; 
        height: 10px;
        border-radius: 50%;
    }

`
export const Radio = styled.label`
    position: absolute;
    top: 1.5rem;
    right: 20px;
`
export const NameWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`
export const Name = styled.span`
    ${font({Fmax:26, Fmin: 24, lineHeight: 1.0,weight: 400, family: 'Bebas Neue Cyrillic, sans-serif'})};
    letter-spacing: 0;
    text-align: left;
`
export const PriceOld = styled.div`
    ${font({Fmax: 20, Fmin: 20, lineHeight: 1.1, weight: 700, color: 'rgb(45, 50, 66)'})};
    letter-spacing: 0;
    text-align: left;
    position: relative;
    width: fit-content;
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
    @media (max-width: 425px) {
     position: absolute;
        bottom: 30px;
        right: 14px;
    }
`
export const Line = styled.hr`
    width: 100%;
    background-color: rgb(231, 234, 241);
    @media (max-width: 930px) {
        display: none;
    }
`
export const StarWrapper = styled.div`
    position: relative;right: 0;
`
export const Star = styled.img`
    position: absolute;
    top: -16px;
    right: -44px;
    width: 50px;
    height: 50px;
    @media (max-width: 800px){
        width: 40px;
        height: 40px;
        top: -26%;
        right: -40px;
    }
`
export const Discount = styled.span`
    ${font({Fmax: 13, Fmin: 10, weight: 500, color: 'rgb(255,255,255)', lineHeight: 1.3})};
    letter-spacing: 0;
    position: absolute;
    right: -36px;
    top: 0;
    @media (max-width: 800px){
        top: 0;
        right: -32px;
    }
`
export const PriceActual = styled.span`
    ${font({Fmax:46, Fmin: 44, lineHeight: 1.1})}
    letter-spacing: 0;
`
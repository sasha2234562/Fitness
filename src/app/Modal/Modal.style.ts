import styled from "styled-components";
import {font} from "@/common";

export const Window = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999999;
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
    align-items: center;
    gap: 40px;
    @media (max-width: 930px) {
        width: 70%;
    }
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
    padding: 1rem 28px;
    box-sizing: border-box;
    border: 1.5px solid rgb(1, 185, 197);
    border-radius: 30px;

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
    @media (max-width: 930px) {
        margin-right: 2rem;
        flex-direction: column;
    }
`
export const Close = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
`
export const ButtonStart = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    padding: 20px 0 22px 0;
    background: rgb(253, 77, 53);
    ${font({Fmax: 20, color: 'rgb(255, 255, 255)', weight: 500, Fmin: 20 ,family: 'Rubik, sans-serif'})};
    letter-spacing: 0;
    text-align: left;
    width: 100%;
    max-width: 310px;
`
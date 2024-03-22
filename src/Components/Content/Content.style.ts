import styled from "styled-components";
import {font} from "../../common.ts";

export const Container = styled.div`
    width: 50%;

    .checkbox {
        position: absolute;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .checkbox-label {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    .checkbox-view {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background: #fff;
        transition: .3s;
    }

    .checkbox-icon {
        opacity: 0;
        transition: .3s;
    }

    .checkbox:checked + .checkbox-view {
        background-color: rgb(1, 185, 197);
    }

    .checkbox:checked + .checkbox-view .checkbox-icon {
        opacity: 1;
    }
`
export const Recommendation = styled.p`
    color: rgb(45, 50, 66);
    font-family: PT Root UI, sans-serif;
    font-size: 1.13rem;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: 0;
    text-align: left;
`
export const CheckboxContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    margin: 25px 0 50px 0;
    align-items: center;
    border-radius: 4.8px;
`
export const CheckboxLabel  =styled.p`
    font-family: PT Root UI, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    span{
        color: rgb(45, 151, 249);
    }
`
export const BuyButton = styled.button`
    padding: 1.75rem 6.25rem;
    border: none;
    border-radius: 3.75rem;
    background: rgb(253, 77, 53);
    color: rgb(255, 255, 255);
    font-family: Rubik,sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
    cursor: pointer;
`
export const Warning = styled.p`
    ${font({Fmax: 18, Fmin: 14, weight: 400, lineHeight:1.3, })}
    margin-top: 30px;
    margin-bottom: 88px;
    color: rgb(129, 135, 152);
    font-family: PT Root UI, sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0;
    text-align: left;
`
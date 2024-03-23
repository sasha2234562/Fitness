import styled from "styled-components";
import {font} from "@/common";

export const Container = styled.div`
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
export const SharesWrapper = styled.div`
    display: flex;
    flex-wrap: unset;
    gap: 0.5rem;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        gap: 6px;
        margin-right: 60px;
    }
    @media (max-width: 800px) {
        margin: 0 20px;
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
    @media (max-width: 500px) {
        margin: 0 20px 1rem;
    }
`
export const CheckboxContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    margin: 25px 0 50px 0;
    align-items: center;
    border-radius: 5px;
    @media (max-width: 500px) {
        margin: 0 20px;
    }
`
export const CheckboxLabel  =styled.p`
    ${font({Fmax: 16, Fmin:16, weight: 400, lineHeight: 1.1})}
    letter-spacing: 0;
    text-align: left;
    span{
        color: rgb(45, 151, 249);
    }
`
export const BuyButton = styled.button`
    padding: 1.75rem 0;
    border: none;
    border-radius: 3.75rem;
    background: rgb(253, 77, 53);
    ${font({Fmax: 20, Fmin: 20, family: 'Rubik,sans-serif', weight: 500, color: 'rgb(255, 255, 255)'})};
    line-height: 1.25rem;
    letter-spacing: 0;
    text-transform: uppercase;
    cursor: pointer;
    max-width: 280px;
    width: 100%;
    @media (max-width: 800px) {
        max-width: 90%;
        margin: 4px 20px 20px;
    }
`
export const Warning = styled.p`
    ${font({Fmax: 18, Fmin: 14, weight: 400, lineHeight:1.3, color: 'rgb(129, 135, 152)'})}
    margin-top: 30px;
    margin-bottom: 88px;
    letter-spacing: 0;
    text-align: left;
    @media (max-width: 500px) {
        display: none;
    }
`
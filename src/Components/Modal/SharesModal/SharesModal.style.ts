import styled from "styled-components";
import {font} from "@/common";

export interface ContainerProps{
    active: boolean
}

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
        padding: 1rem;
        height: auto;
        min-height: 134px;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
    }
    .radio input { display: none; /* Прячем исходный переключатель */ }
    .radio span {
        position: relative; /* Относительное позиционирование */
        display: inline-block; /* Строчно-блочный элемент */
        width: 20px; height: 20px; /* Размеры */
        background: #fff; /* Серый цвет фона */
        border-radius: 50%; /* Круглый переключатель */
        border: 2px solid rgb(85, 89, 101);
    }
    .radio input:checked + span {
        background: #fff; /* Красный цвет фона */
    }
    /* Добавляем белую точку по центру */
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
export const Name = styled.span`
    ${font({Fmax:26, Fmin: 24, lineHeight: 1.0,weight: 400, family: 'Bebas Neue Cyrillic, sans-serif'})};
    letter-spacing: 0;
    text-align: left;
`
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Price = styled.div`
    ${font({Fmax: 20, Fmin: 20, lineHeight: 1.1, weight: 700, color: 'rgb(45, 50, 66)'})};
    letter-spacing: 0;
    text-align: left;
    position: absolute;
    top: 60px;
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
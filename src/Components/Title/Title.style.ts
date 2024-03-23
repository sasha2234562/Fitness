import styled from "styled-components";
import {font} from "@/common";

export const Title = styled.h1`
    ${font({Fmax: 40, Fmin: 24, weight: 700, lineHeight: 1.1})}
    margin-top: 28px;
    font-family: Rubik, sans-serif;
    letter-spacing: 1%;
    text-align: center;
    text-transform: uppercase;
`
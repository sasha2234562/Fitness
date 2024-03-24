import styled from "styled-components";
import {font} from "@/common";

export const Header = styled.div`
    background-color: #ffffff;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
`
export const Title = styled.h2`
    ${font({Fmax:30, Fmin: 16, lineHeight: 1.3, weight: 700})};
    font-family: PT Root UI, sans-serif;
    letter-spacing: 0;
    text-align: right;
`

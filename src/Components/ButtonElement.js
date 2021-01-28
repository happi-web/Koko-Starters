import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary? 'purple': 'gray')};
    white-space: nowrap;
    padding: ${({big}) =>(big? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark? 'rgb(59, 1, 37)' : 'white')};
    font-size: ${({ fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary? 'rgb(245, 178, 115)': 'rgb(204, 115, 245)')};

}

`
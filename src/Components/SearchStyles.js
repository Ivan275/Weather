import styled from "styled-components";

export const Input = styled.input`
font-size: 18px;
padding: 10px;
margin-top: 120px;
background: #f9f9f9;
border: 2px solid black;
padding: 10px;
border-radius: 3px;

`;

export const SearchContainer = styled.div`
display: grid;
justify-content: center; 
flex-direction: row; 
display: flex;

`;

export const TextContainer = styled.div`
padding-top: 50px;
margin-top: auto;
justify-content: center; 
flex-direction: row; 
display: flex;
`;

export const FormButton = styled.button`
border-radius: 4px;
background-color: #256ce1;
color: #fff;
margin-top: 120px;
white-space: nowrap;
outline: none;
width: 120px;
height: 40px;
font-size: 1.4rem;
cursor: pointer;
position: relative;
overflow: hidden;
margin-left: 20px;

&:hover {
color: white;
transition: background-color 0.4s ease-in;
background-color: black;
}
`;
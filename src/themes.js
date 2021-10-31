import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#fff',
    color: 'rgb(0, 89, 178)',
    fontColor: 'rgb(0, 89, 178'
}

export const darkTheme = {
    body: '#0c002b',
    color: 'rgb(0, 89, 178)',
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
`;
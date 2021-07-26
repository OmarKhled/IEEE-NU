import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.member {
    color: ${(props) => props.theme.memberColor};
}
.info {
    color: ${(props) => props.theme.infoColor};
}
.back {
    background-color: ${(props) => props.theme.backgroundColor};
}
body {
    background: ${(props) => props.theme.mainBackgroundColor};
    color: ${(props) => props.theme.mainColor};
    transition: all 0.25s linear;
}
.member:hover {
    .name {
        color:${(props) => props.theme.nameColorSecondary}; 
    }
}
.name {
    color: ${(props) => props.theme.nameColorPrimary}
}
.footer  {
    background-color: ${(props) => props.theme.footerBackground} !important;
}
.copyright {
    background-color: ${(props) => props.theme.tailFooter}
}
.arrow {
    color: ${(props) => props.theme.mainColor};
}
.arrow:disabled {
    color: #9e9e9e
}
.events *:hover *{
    color: ${(props) => props.theme.nameColorSecondary} !important;
}
.custom-shape-divider-bottom-1627333295 .shape-fill {
    fill: ${(props) => props.theme.mainBackgroundColor};
}
`;

import React from 'react';
import styled from 'styled-components';

type Props = {
    buttonText: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    shape: 'square' | 'pill';
    kind: 'primary' | 'secondary';
};

const ButtonComponent = styled.button<Props>`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    color: ${(props) => (props.kind === 'primary' ? 'black' : 'white')};
    background-color: ${(props) =>
        props.kind === 'primary' ? 'white' : 'transparent'};
    border: ${(props) =>
        props.kind === 'primary' ? 'none' : '2px solid white'};
    border-radius: ${(props) => (props.shape === 'square' ? '3px' : '16px')};
    cursor: pointer;
`;

function Button({
    buttonText,
    onClick = () => {},
    shape,
    kind,
}: Props): JSX.Element {
    return (
        <ButtonComponent
            onClick={onClick}
            shape={shape}
            kind={kind}
            buttonText={buttonText}
        >
            {buttonText}
        </ButtonComponent>
    );
}

export default Button;

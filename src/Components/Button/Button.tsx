import React from 'react';
import styled from 'styled-components';

type Props = {
  buttonText: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  shape: 'square' | 'pill';
  type: 'primary' | 'secondary';
};

function Button({ buttonText, onClick = () => {}, shape, type }: Props): JSX.Element {
  const ButtonComponent = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    color: ${type === 'primary' ? 'black' : 'white'};
    background-color: ${type === 'primary' ? 'white' : 'transparent'};
    border: ${type === 'primary' ? 'none' : '2px solid white'};
    border-radius: ${shape === 'square' ? '3px' : '16px'};
    cursor: pointer;
  `;

  return <ButtonComponent onClick={onClick}>{buttonText}</ButtonComponent>;
}

export default Button;

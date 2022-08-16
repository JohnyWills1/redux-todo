// #region Global Imports
import React from 'react';
import styled from 'styled-components';
// #endregion Global Imports

// #region Local Imports

// #endregion Local Imports

// #region Interface Imports

// #endregion Interface Imports

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
};

function TextInput({ onChange = () => {}, placeholder, value }: Props) {
  const TextInputComponent = styled.input`
    width: 100%;
    border-radius: 4px;
    background-color: transparent;
    border: 2px solid white;
    padding: 1em 1.5em;
    font-size: 1em;
  `;

  return <TextInputComponent type='text' onChange={onChange} placeholder={placeholder} value={value} />;
}

export default TextInput;

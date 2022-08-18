// #region Global Imports
import React from 'react';
import styled from 'styled-components';
// #endregion Global Imports

type Props = {
    onChange?: (value: string) => void;
    placeholder?: string;
    value: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TextInputComponent = styled.input`
    width: 100%;
    border-radius: 4px;
    background-color: transparent;
    border: 2px solid white;
    padding: 1em 1.5em;
    font-size: 1em;
`;

function TextInput({
    onChange = () => {},
    onKeyDown = () => {},
    placeholder,
    value,
}: Props) {
    return (
        <TextInputComponent
            autoFocus
            type="text"
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
            onKeyDown={onKeyDown}
        />
    );
}

export default TextInput;

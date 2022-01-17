import React from 'react';
import {Selector} from './style';

export function Selects({text, name, options, handleOnChange, value}){
    return(
        <Selector>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.tipousuario}
                    </option>
                ))}
            </select>
        </Selector>
    )
}

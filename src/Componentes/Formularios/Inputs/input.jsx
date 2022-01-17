import {Input} from './input';

export const Inputs = ({type, text, name, placeholder, handleOnChange, value, classe}) => {

    return(
        <Input>
            <label htmlFor={name}>{text}</label>
            <input 
            className={classe}
            type={type} 
            name={name} 
            id={name}
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
            />
        </Input>
    )
}
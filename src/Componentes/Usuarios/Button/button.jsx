import {Button} from './style';

export const Buttons = ({type,  text, name, onClick}) => {
   
    return(
        <Button type={type} id={name} className={name} onClick={onClick}>{text}</Button>
    )
}
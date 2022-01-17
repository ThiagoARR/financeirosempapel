import { NavLink } from "react-router-dom";

function LinkButton({to, text}){
    return(
        <NavLink className="btn margin" to={to}>{text}</NavLink>
    )
}

export default LinkButton;
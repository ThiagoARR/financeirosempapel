import { NavLink } from "react-router-dom";
import {faEdit, faPen, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function DetailButton({to, text}){
    return(
        <NavLink className="detalhe-box detalhe" to={to}><FontAwesomeIcon className="action" icon={faPlus}/></NavLink>
    )
}

export default DetailButton;
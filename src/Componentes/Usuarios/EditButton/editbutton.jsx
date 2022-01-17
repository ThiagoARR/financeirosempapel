import { NavLink } from "react-router-dom";
import {faEdit, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function EditButton({to, text}){
    return(
        <NavLink className="edit-box edit" to={to}><FontAwesomeIcon className="action" icon={faPen}/></NavLink>
    )
}

export default EditButton;
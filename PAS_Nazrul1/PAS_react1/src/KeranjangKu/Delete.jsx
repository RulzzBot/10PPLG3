import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";


function Delete({id, onDelete}){
    return(
        <FaRegTrashAlt className="delete" onClick={() => onDelete(id)}/>
    )
}

export default Delete;
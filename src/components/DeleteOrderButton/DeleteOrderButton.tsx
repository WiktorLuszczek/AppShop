import React from "react";
import { axiosOrderDelete } from "../../untils/axiosOrderDelete";

export const DeleteOrderButton = ({id} : {id: number}) => {
    const handleDelete = () => {
        axiosOrderDelete(id);
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}
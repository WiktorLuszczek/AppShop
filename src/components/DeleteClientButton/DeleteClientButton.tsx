import { axiosClientDelete } from '../../untils/axiosClientDelete'

export const DeleteClientButton = ({id} : {id: number}) => {
    const handleDelete = () => {
        axiosClientDelete(id);
    }
    return(
        <button onClick={handleDelete}>Delete</button>
    )
}
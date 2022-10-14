import { useState } from "react"
import { ClientFormEdit } from "../ClientFormEdit/ClientFormEdit"

export const ClientEditButton = ({id} : {id: number}) => {
    const [activeButton, setActiveButton] = useState('')
    const [active, setActive] = useState('')
    const toggleActive = () => {
        if(active === 'active') {
            setActive('');
            setActiveButton('');
        } else {
            setActive('active');
            setActiveButton('active-button');
        };
    };
    return(
        <>
            <button onClick={toggleActive} className={activeButton}>Edit</button>
            <ClientFormEdit active={active} id={id}/>
        </>
        
    )
}
import { useState } from "react"
import { axiosOrderStatusChange } from "../../untils/axiosOrderStatusChange"

export const StatusChange = ({isReady, id, details} : {isReady: boolean, id: number, details: string}) => {
    const [Ready, setReady] = useState(isReady)
    const [className, setClassName] = useState(() => {
        if(isReady) return 'ready'
        else return 'not-ready'
    })
    const setClassNameFunction = () => {
        if(Ready){
            setClassName('not-ready')
        } else {
            setClassName('ready');
        }
    }
    const handleSubmit = () => {
        setReady(!Ready);
        setClassNameFunction();
        axiosOrderStatusChange(Ready, id, details);
    }
    return(
        <button onClick={handleSubmit} className={'status-button ' + className}>
            {Ready ? "READY" : "NOT READY"}
        </button>
    )
}
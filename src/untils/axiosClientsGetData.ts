import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ClientsGetData = () => {
    const query = useQuery(['clients'], () => {
        const res = axios.get('http://localhost:3000/clients')
        return res;
    })
    const isLoading = query.isLoading;
    const error = query.error;
    const data = query.data;
    return {isLoading, error, data}
    
}
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const OrderGetData = () => {
    const query = useQuery(['orders'], () => {
        const res = axios.get('http://localhost:3000/orders')
        return res;
    })
    const isLoading = query.isLoading;
    const error = query.error;
    const data = query.data;
    return {isLoading, error, data}
    
}
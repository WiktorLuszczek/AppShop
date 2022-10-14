import axios from "axios";

export const axiosOrderStatusChange = async (isReady: boolean, id: number, details: string) => {
    const http = 'http://localhost:3000/orders/' 
    const url = http + id;
    await axios.put(url, {
        id: id,
        details: details,
        isReady: !isReady
    });
    alert('Pomyślnie zmieniono status zamówienia')
}
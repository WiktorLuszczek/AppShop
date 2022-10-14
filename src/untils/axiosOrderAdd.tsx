import axios from "axios";

export const axiosOrderAdd = async (details: string) => {
    const http = 'http://localhost:3000/orders' 
    await axios.post(http, {
        details: details,
        isReady: false
    });
    alert('Pomyślnie dodano zamówienie')
}
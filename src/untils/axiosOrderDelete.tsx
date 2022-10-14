import axios from "axios";

export const axiosOrderDelete = async (id: number) => {
    const http = 'http://localhost:3000/orders/' 
    const url = http + id;
    await axios.delete(url);
    alert('Pomyślnie usunięto zamówienie')
}
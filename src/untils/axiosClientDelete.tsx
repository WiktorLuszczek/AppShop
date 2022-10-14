import axios from "axios";

export const axiosClientDelete = async (id: number) => {
    const http = 'http://localhost:3000/clients/' 
    const url = http + id;
    await axios.delete(url);
    alert('Pomyślnie usunięto klienta')
}
import axios from "axios";

export const axiosClientEdit = async (id: number, name: string, surname: string, email: string) => {
    const http = 'http://localhost:3000/clients/' 
    const url = http + id;
    await axios.put(url, {
        id: id,
        name: name,
        surname: surname,
        email: email
    });
alert('Pomyślnie zmieniono dane klienta')
}
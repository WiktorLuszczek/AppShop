import axios from "axios";

export const axiosClientAdd = async (name: string, surname: string, email: string) => {
    const http = 'http://localhost:3000/clients' 
    await axios.post(http, {
        name: name,
        surname: surname,
        email: email
    });
    alert('Pomyślnie dodano klienta')
}
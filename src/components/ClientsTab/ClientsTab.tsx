import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { ClientsGetData } from "../../untils/axiosClientsGetData"
import { ClientAddForm } from "../ClientAddForm/ClientAddForm"
import { ClientEditButton } from "../ClientEditButton/ClientEditButton"
import { DeleteClientButton } from "../DeleteClientButton/DeleteClientButton"

export type ClientsType = {
    id: number,
    name: string,
    surname: string,
    email: string
}

export const ClientsTab = () => {
        
        const query = ClientsGetData()
        const data = query.data?.data

        if(data === undefined){
            return(
                <h1>Please wait</h1>
            )
        } else {
            return (
                <div className="container-tab">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>ID</TableCell>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Surname</TableCell>
                                    <TableCell align='center'>Email</TableCell>
                                    <TableCell align="center">Edit</TableCell>
                                    <TableCell align='center'>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: ClientsType) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center' component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align='center'>{row.name}</TableCell>
                                    <TableCell align='center'>{row.surname}</TableCell>
                                    <TableCell align='center'>{row.email}</TableCell>
                                    <TableCell align="center">
                                        <ClientEditButton id={row.id}/>
                                    </TableCell>
                                    <TableCell align='center'><DeleteClientButton id={row.id}/></TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ClientAddForm />
                </div>
            )
        }
}
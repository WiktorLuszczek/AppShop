import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { OrderGetData } from "../../untils/axiosOrderGetData"
import { DeleteOrderButton } from "../DeleteOrderButton/DeleteOrderButton"
import { OrderAddForm } from "../OrderAddForm/OrderAddForm"
import { StatusChange } from "../StatusChange/StatusChange"

type OrderType = {
    id: number,
    details: string,
    isReady: boolean
}

export const OrdersTab = () => {
    
    const query = OrderGetData()
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
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Order details</TableCell>
                                <TableCell align="center">Status order</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row: OrderType) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align="center">{row.details}</TableCell>
                                    <TableCell align="center">
                                        <StatusChange isReady={row.isReady} id={row.id} details={row.details} />
                                    </TableCell>
                                    <TableCell align="center">
                                        <DeleteOrderButton id={row.id}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <OrderAddForm />
            </div>
        )
    }
}

import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <nav>
            <h1 className="header">Home</h1>
            <Link to="/orders">Orders</Link>
            <Link to="/clients">Clients</Link>
        </nav>
    )
}
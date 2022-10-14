import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ClientsTab } from "../ClientsTab/ClientsTab";

export const Clients = () => {

    const queryClient = new QueryClient();
    return (
        <main className="container">
            <QueryClientProvider client={queryClient}>
                <nav className="nav-subpage">
                    <h1>Clients</h1>
                    <Link to="/">Strona główna</Link>
                </nav>
                <ClientsTab />
            </QueryClientProvider>
        </main>
    )
}
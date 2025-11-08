import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router"


export function Dashboard() {

    const {isLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate("/");
        }
    },[])


    return ( <>
        <div>
            <h1>Dashboard</h1>
            <p>Bem vindo ao dashboard!!</p>
        </div>
        </>
    )
}
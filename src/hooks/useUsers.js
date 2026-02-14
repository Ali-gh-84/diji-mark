import { useState, useEffect } from "react";
import {getUsers} from "../services/userService";

export function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers()
            .then(setUsers)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
}

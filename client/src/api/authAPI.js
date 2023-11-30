const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
    const body = {
        email,
        password
    }
 
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    
    const result = await response.json()

    return result
}

export const register = async (email, password) => {
    const body = {
        email,
        password
    }

    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return await response.json();
}

export const logout = () => {
    const response = fetch (`${baseUrl}/logout`);

    if (response.status === 204) {
        return{}
    }

    return response

}

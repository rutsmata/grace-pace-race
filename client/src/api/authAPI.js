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
const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (data) => {
    const body = {
        username: data.username,  
        comment: data.comment,  

    }
 
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const result = await response.json()

    return result
}



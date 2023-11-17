const baseUrl = "http://localhost:3030/jsonstore/comments";

export const getAll = async (articleId) => {
    const query = new URLSearchParams({
        where: `articleId="${articleId}"`
    })
    // Jsonstore does not support advance retrieval, need to migrate to collection service
    const response = await fetch(`${baseUrl}?${query}`);
    const result = await response.json();

    const data = Object.values(result)

    return data;

};

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



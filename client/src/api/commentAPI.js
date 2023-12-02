const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (articleId) => {
    const query = new URLSearchParams({
        where: `articleId="${articleId}"`
    });

    const response = await fetch(`${baseUrl}?${query}`);
    const result = await response.json();

    return result;

};

export const create = async (data, token) => {
    const body = {
        username: data.username,  
        comment: data.comment,  

    }
 
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization' : token,

        },
        body: JSON.stringify(body)
    })

    const result = await response.json()

    return result
}



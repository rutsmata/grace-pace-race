const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (articleId) => {
    const query = new URLSearchParams({
        where: `articleId="${articleId}"`,
        load: `owner=_ownerId:users`
    });

    const response = await fetch(`${baseUrl}`);
    const result = await response.json();

    const data = Object.values(result)

    return data;

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



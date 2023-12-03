const baseUrl = "http://localhost:3030/data/articles";

export const getAll = async () => {

    const response = await fetch(baseUrl);
    const result = await response.json();

    return result

};

export const getOne = async (articleId) => {
    const response = await fetch (`${baseUrl}/${articleId}`);
    const articleDetails = await response.json();

    return articleDetails;
}

export const deleteArticle = async (articleId, token) => {
    await fetch(`${baseUrl}/${articleId}`, {
        method: 'DELETE',
        headers: {
            "X-Authorization" : token
        }

    })
}


export const create = async (data, token) => {
    const body = {
        title: data.title,  
        description: data.description,  
        type: data.type,  
        author: data.author,
        createdAt: new Date().toISOString(), 
        img: data.img
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

export const edit = async (articleId, data, token) => {
    const body = {
        title: data.title,  
        description: data.description,  
        type: data.type,  
        author: data.author,
        createdAt: new Date().toISOString(), 
        img: data.img
    }
 
    const response = await fetch(`${baseUrl}/${articleId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization' : token,
        },
        body: JSON.stringify(body)
    })

    const result = await response.json()

    return result
}


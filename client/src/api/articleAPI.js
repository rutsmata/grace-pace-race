const baseUrl = "http://localhost:3030/jsonstore/articlesNew";

export const getAll = async () => {

    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;

};

export const getOne = async (articleId) => {
    const response = await fetch (`${baseUrl}/${articleId}`);
    const articleDetails = await response.json();

    return articleDetails;
}

export const create = async (data) => {
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const result = await response.json()
    console.log(result);

    return result
}

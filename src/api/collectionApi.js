import fetch from 'node-fetch';

const endpoint = 'http://localhost:3000';

class CollectionApi {
    static async store(collection) {
        const isNewCollection = collection._id === "";

        const route = isNewCollection ? `collections` : `collections/${collection._id}`;

        const httpMethod = isNewCollection ? 'POST' : 'PATCH';

        collection = Object.assign({}, collection);

        let response = await fetch(`${endpoint}/api/v1/${route}`, {
            method: httpMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(collection)
        });

        response = await response.json();

        return response.collection;
    }

    static async find() {
        const response = await fetch(`${endpoint}/api/v1/collections`);

        return await response.json();
    }
}

export default CollectionApi;
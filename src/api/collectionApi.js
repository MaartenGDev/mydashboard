import fetch from 'node-fetch';

const endpoint = 'http://localhost:3000';

class CollectionApi {
    static async store(collection) {
        collection = Object.assign({}, collection);

        const response = await fetch(`${endpoint}/api/v1/collections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(collection)
        });

        await response.json();

        return collection;
    }

    static async find() {
        const response = await fetch(`${endpoint}/api/v1/collections`);

        return await response.json();
    }
}

export default CollectionApi;
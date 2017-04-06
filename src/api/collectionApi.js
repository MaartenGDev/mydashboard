import fetch from 'node-fetch';
import CollectionDataApi from './CollectionDataApi';

const endpoint = 'http://localhost:3000';

class CollectionApi {
    static store(collection) {
        return new Promise((res, rej) => {
            const isNewCollection = collection._id === "";

            const route = isNewCollection ? `collections` : `collections/${collection._id}`;

            const httpMethod = isNewCollection ? 'POST' : 'PATCH';

            fetch(`${endpoint}/api/v1/${route}`, {
                method: httpMethod,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(collection)
            })
                .then(response => response.json())
                .then(async () => {
                    const items = await CollectionDataApi.getDataFromSource(collection.source);

                    return res(
                        Object.assign({},
                        collection,
                        {items})
                    );
                });


        });
    }

    static async find() {
        const response = await fetch(`${endpoint}/api/v1/collections`);

        return await response.json();
    }
}

export default CollectionApi;
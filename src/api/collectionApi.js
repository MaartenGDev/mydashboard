import fetch from 'node-fetch';
import CollectionDataApi from './CollectionDataApi';

const endpoint = 'http://localhost:3000';

class CollectionApi {
    static store(collection) {
        return new Promise((res, rej) => {
            const isNewCollection = collection.id === "";

            const route = isNewCollection ? `collections` : `collections/${collection.id}`;

            const httpMethod = isNewCollection ? 'POST' : 'PATCH';

            fetch(`${endpoint}/api/v1/${route}`, {
                method: httpMethod,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(collection)
            })
                .then(response => response.json())
                .then(async (updatedCollection) => {
                    const items = await CollectionDataApi.getDataFromSource(updatedCollection.source);

                    return res(
                        Object.assign({},
                        collection,
                        {items, id: updatedCollection.id})
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

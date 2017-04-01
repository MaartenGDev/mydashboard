import fetch from 'node-fetch';

const endpoint = 'http://localhost:3000';

class CollectionApi {
    static async create(collection) {
        collection = Object.assign({}, collection);

        const minCollectionTitleLength = 3;

        if (collection.title.length < minCollectionTitleLength) {
            throw Error('Failed title validation');
        }

        let formData = new FormData;

        Object.keys(collection).forEach(key => {
            formData.set(key, collection[key]);
        });

        const response = await fetch('/api/v1/collections', {method: 'post', body: formData});

        return response.json();
    }

    static async find() {
        const response = await fetch(`${endpoint}/api/v1/collections`);

        return response.json();
    }
}

export default CollectionApi;
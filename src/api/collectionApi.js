import fetch from 'node-fetch';

class collectionApi {
    static saveCollection(collection) {
        collection = Object.assign({}, collection);

        const minCollectionTitleLength = 3;

        return new Promise((res, rej) => {
            if (collection.title.length < minCollectionTitleLength) {
                rej(`Title must be at leat ${minCollectionTitleLength} characters.`);
            }

            let formData = new FormData;

            Object.keys(collection).forEach(key => {
                formData.set(key, collection[key]);
            });

            fetch('/api/v1/collection', {method: 'post', body: formData})
                .then(res => res.json())
                .then(data => res(data))
                .catch(err => rej(err));
        });
    }
}
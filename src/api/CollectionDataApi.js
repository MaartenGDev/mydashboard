import fetch from 'node-fetch';

class CollectionDataApi {
    static getDataFromSource(source) {
        return new Promise((res, rej) => {
            fetch(source)
                .then(result => result.json())
                .then(data => res(data))
                .catch(err => rej(err));
        });

    }
}

export default CollectionDataApi;
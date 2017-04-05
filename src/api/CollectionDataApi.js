import fetch from 'node-fetch';

class CollectionDataApi {
    static getDataFromSource(source) {
        return new Promise((res, rej) => {
            fetch(source)
                .then(result => result.json())
                .then(data => {
                    console.log('got em');
                    console.log(data);
                    res(data)
                })
                .catch(err => {
                    console.log('kapot');
                    rej(err)
                })
        });

    }
}

export default CollectionDataApi;
import fetch from 'node-fetch';

class CollectionDataApi {
    static getDataFromSource(source) {
        return [
            {
                title: 'My Card',
                description: 'This is my card'
            },
            {
                title: 'Second Card',
                description: 'Verry nice card'
            }
        ];

        // return fetch(source)
        //         .then(source.json())
        //         .then(data => res(data))
        //         .catch(err => rej(err))
        // });
    }
}

export default CollectionDataApi;
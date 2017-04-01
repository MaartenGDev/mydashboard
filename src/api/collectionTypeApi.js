import fetch from 'node-fetch';

const endpoint = 'http://localhost:3000';

class CollectionTypeApi {
   static async find(){
       const response = await fetch(`${endpoint}/api/v1/types`);

       return await response.json();
   }
}

export default CollectionTypeApi;
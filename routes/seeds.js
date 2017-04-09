import express from 'express';
const router = express.Router();

let getDataForType = function (type) {
    switch (type){
        case 'table': {
            return {
                columns: [
                    {
                        name: "Title",
                    },
                    {
                        name: "Description"
                    },
                    {
                        name: "Count"
                    }
                ],
                rows: [
                    ["My title", "Hello World description", 245],
                    ["My title", "Hello World description", 245],
                    ["My title", "Hello World description", 245],
                    ["My title", "Hello World description", 245],
                    ["My title", "Hello World description", 245]
                ]
            };
        }
        case 'card': {
           return [
               {
                   title: 'My Card',
                   description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
               },
               {
                   title: 'Second Card',
                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ligula dapibus, dictum justo eget, rutrum lacus. Pellentesque condim.'
               }
           ];
        }
        case 'chart': {
            return {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                data: [65, 59, 58, 70, 56, 55, 63]
            };
        }
        default:
            return [
                {
                    title: 'My Card',
                    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
                },
                {
                    title: 'Second Card',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ligula dapibus, dictum justo eget, rutrum lacus. Pellentesque condim.'
                }
            ];
    }


};

router.get('/:type', (req, res, next) => {
    const {type} = req.params;

    return res.json(getDataForType(type));
});

export default router;

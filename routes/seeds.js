import AmsterdamOpenDataApi from '../src/api/vendor/AmsterdamOpenDataApi';
import express from 'express';


const OpenDataApi = new AmsterdamOpenDataApi;


const router = express.Router();

let getDataForType = async function (type) {
    switch (type) {
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
                    ["My title", "first item", 245],
                    ["My title", "Hello World description", 245],
                    ["My title", "Hello World description", 245],
                    ["My title", "Hello World description", 245],
                    ["My title", "Hello World description", 245]
                ]
            };
        }
        case 'card': {
            const activities = await OpenDataApi.getActivities();

            return activities.map(activity => {
                return {
                    image: activity.image,
                    title: activity.name,
                    description: activity.description.nl.shortdescription
                };
            });
        }
        case 'chart': {
            return {
                title: 'Hello Worlds Count',
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

router.get('/:type', async (req, res, next) => {
    const {type} = req.params;

    const dataForType = await getDataForType(type);

    return res.json(dataForType);
});

export default router;

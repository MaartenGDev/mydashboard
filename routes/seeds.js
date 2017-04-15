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
                        name: "Title"
                    },
                    {
                        name: "Description"
                    },
                    {
                        name: "Count"
                    },
                ],
                rows: [
                    [
                        "First Row - Title Column",
                        "First Row - Description Column",
                        "First Row - Count Column"
                    ],
                    [
                        "Second Row - Title Column",
                        "Second Row - Description Column",
                        "Second Row - Count Column"
                    ],
                    [
                        "Third Row - Title Column",
                        "Third Row - Description Column",
                        "Third Row - Count Column"
                    ]
                ]
            };
        }
        case 'card': {
            return [
                {
                    image: "https://source.unsplash.com/random",
                    title: "My first card",
                    description: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu diam, maximus sed libero nec, condimentum sodales tortor. Quisque ac consequat diam. Praesent laoreet ullamcorper nunc, at molestie risus vehicula a. Pellentesque aliquam diam purus. Pellentesque in nequ"
                },
                {
                    image: "https://source.unsplash.com/random",
                    title: "My second card",
                    description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu diam, maximus sed libero nec, condimentum sodales tortor. Quisque ac consequat diam. Praesent laoreet ullamcorper nunc, at molestie risus vehicula a. Pellentesque aliquam diam purus. Pellentesque in nequ?"
                },
                {
                    image: "https://source.unsplash.com/random?",
                    title: "My third card",
                    description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu diam, maximus sed libero nec, condimentum sodales tortor. Quisque ac consequat diam. Praesent laoreet ullamcorper nunc, at molestie risus vehicula a. Pellentesque aliquam diam purus. Pellentesque in nequ"
                }
            ];
        }
        case 'chart': {
            return {
                title: "Programming Languages",
                labels: [
                    "JavaScript",
                    "SQL",
                    "Java",
                    "C#",
                    "Python",
                    "PHP"
                ],
                data: [
                    62,
                    51,
                    39,
                    34,
                    32,
                    28
                ]
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

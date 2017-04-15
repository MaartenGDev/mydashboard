import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

class AmsterdamOpenDataApi {
    getActivities() {
        return new Promise(resolve => {
            this.gatherActivities()
                .then(activities => resolve(activities));

        });
    }


    gatherActivities() {
        return new Promise(resolve => {
            const cacheFile = path.join(__dirname, '../../../storage/cache/activities.json');


            fs.readFile(cacheFile, async (err, data) => {
                if (!err) return resolve(JSON.parse(data));

                const activities = await this.fetchActivities();

                const activeActivities = this.filterActivities(activities);

                fs.writeFile(cacheFile, JSON.stringify(activeActivities), function (err) {
                    return resolve(activeActivities);
                });
            });
        });
    }

    fetchActivities() {
        return fetch(`http://open.datapunt.amsterdam.nl/Activiteiten.json`)
            .then(res => res.json());
    }

    filterActivities(activities) {
        activities = activities.filter(activity => {
            const {media, details} = activity;

            const hasMedia = media[0] !== undefined && media[0].url !== "";
            const hasDescription = details.en.shortdescription !== "" && details.nl.shortdescription !== "";

            return hasMedia && hasDescription;
        });

        const amountOfItemsToShow = 5;

        const offset = this.getRandomInt(0, activities.length - amountOfItemsToShow);

        activities = activities.slice(offset, offset + amountOfItemsToShow);

        return activities.map(activity => {
            const {title, details, media} = activity;

            return {
                name: title,
                image: media[0].url,
                description: {
                    en: details.en,
                    nl: details.nl
                },
            };
        });
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export default AmsterdamOpenDataApi;
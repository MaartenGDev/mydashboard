import fetch from 'node-fetch';

class AmsterdamOpenDataApi {
    getActivities() {
        return new Promise(resolve => {
            fetch(`http://open.datapunt.amsterdam.nl/Activiteiten.json`)
                .then(res => res.json())
                .then(data => {
                    resolve(this.transformActivities(data));
                });
        });
    }

    transformActivities(activities) {
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
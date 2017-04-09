class ColorGenerator {
    static getColors() {
        return {
            light: ['rgba(26, 188 ,156, 0.2)', 'rgba(46, 204 ,113, 0.2)', 'rgba(52, 152 ,219, 0.2)', 'rgba(155, 89 ,182, 0.2)', 'rgba(52, 73 ,94, 0.2)', 'rgba(241, 196 ,15, 0.2)', 'rgba(230, 126 ,34, 0.2)', 'rgba(231, 76 ,60, 0.2)', 'rgba(236, 240 ,241, 0.2)', 'rgba(149, 165 ,166, 0.2)'],
            dark: [ 'rgba(26, 188 ,156, 1)', 'rgba(46, 204 ,113, 1)', 'rgba(52, 152 ,219, 1)', 'rgba(155, 89 ,182, 1)', 'rgba(52, 73 ,94, 1)', 'rgba(241, 196 ,15, 1)', 'rgba(230, 126 ,34, 1)', 'rgba(231, 76 ,60, 1)', 'rgba(236, 240 ,241, 1)', 'rgba(149, 165 ,166, 1)' ]

        };
    }

    static generate(count, returnDarkVersion = false) {
        const colors = ColorGenerator.getColors();

        if (returnDarkVersion) {
            return {
                light: colors.light.slice(0, count),
                dark: colors.light.slice(0, count)
            };

        }

        return colors.light.concat(colors.dark).slice(0, count);
    }
}

export default ColorGenerator;
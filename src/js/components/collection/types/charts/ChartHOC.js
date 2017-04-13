import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Chart from 'chart.js';
import Colors from '../../../../../helpers/ColorGenerator';

class ChartHOC extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const {title, type, labels, data} = this.props;

        const {light, dark} = Colors.generate(data.length, true);

        let canvas = this.refs.chart;

        let chartData = {
            labels,
            datasets: [
                {
                    label: title,
                    data,
                    backgroundColor: light,
                    borderColor: dark,
                    borderWidth: 1,
                }
            ]
        };

       new Chart(canvas, {
            type: type,
            data: chartData,
            options: {
                maintainAspectRatio: false
            }
        });
    }
    render() {
        return (
            <section className="collection-chart card">
                <canvas ref={'chart'} height={'300'} />
            </section>
        );
    }
}

ChartHOC.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default ChartHOC;

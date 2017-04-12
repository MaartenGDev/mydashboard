import React, {PropTypes} from 'react';
import Chart from 'chart.js';
import Colors from '../../../../helpers/ColorGenerator';

class ChartCollection extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const {labels, data} = this.props;

        const {light, dark} = Colors.generate(data.length, true);

        let canvas = this.refs.chart;

        let chartData = {
            labels,
            datasets: [
                {
                    label: 'My Title',
                    data,
                    backgroundColor: light,
                    borderColor: dark,
                    borderWidth: 1,
                }
            ]
        };

        const chart = new Chart(canvas, {
            type: 'line',
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

ChartCollection.propTypes = {
    labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default ChartCollection;

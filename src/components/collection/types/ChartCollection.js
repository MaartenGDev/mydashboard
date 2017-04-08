import React, {PropTypes} from 'react';
import Chart from 'chart.js';

class ChartCollection extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const {labels, data} = this.props;

        let canvas = this.refs.chart;

        let chartData = {
            labels,
            datasets: [
                {
                    label: 'My Title',
                    data
                }
            ]
        };

        const myBarChart = new Chart(canvas, {
            type: 'bar',
            data: chartData,
            options: {}
        });
    }
    render() {
        return (<section className="collection-chart card">
            <canvas ref={'chart'} height={'300'} width={'300'} />
        </section>);
    }
}

ChartCollection.propTypes = {
    labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default ChartCollection;
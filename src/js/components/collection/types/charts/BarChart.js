import React from 'react';
import PropTypes from 'prop-types';

import Chart from './ChartHOC';

const BarChart = ({title, labels, data}) => {
    return <Chart title={title} type="bar" labels={labels} data={data}/>;
};

BarChart.propTypes = {
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default BarChart;
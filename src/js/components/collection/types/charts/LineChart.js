import React, {PropTypes} from 'react';
import Chart from './ChartHOC';

const LineChart = ({title, labels, data}) => {
  return <Chart title={title} type="line" labels={labels} data={data}/>;
};

LineChart.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default LineChart;

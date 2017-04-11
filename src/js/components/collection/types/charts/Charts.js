import React, {PropTypes} from 'react';
import Chart from './ChartHOC.js';

const Bar = ({labels, data}) => {
  return <Chart type="bar" labels={labels} data={data}/>
};

Bar.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};


const Line = ({labels, data}) => {
  return <Chart type="line" labels={labels} data={data}/>
};

Line.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export {Line, Bar};

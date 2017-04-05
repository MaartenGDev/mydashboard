import React, {PropTypes} from 'react';

const TableCollection = ({columns, rows}) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => <th key={index}>{column.name}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => {
                    return (<tr key={index}>{row.map((rowColumn, index) => {
                        return <td key={index}>{rowColumn}</td>;
                    })}</tr>);
                })}
            </tbody>
        </table>
    );
};

TableCollection.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
};

export default TableCollection;
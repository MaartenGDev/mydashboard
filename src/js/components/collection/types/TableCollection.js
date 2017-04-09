import React, {PropTypes} from 'react';

const TableCollection = ({columns, rows}) => {
    return (
        <table className="table">
            <thead>
                <tr className="table__row">
                    {columns.map((column, index) => <th className="table__column table__column--header" key={index}>{column.name}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => {
                    return (<tr className="table__row" key={index}>{row.map((rowColumn, index) => {
                        return <td className="table__column" key={index}>{rowColumn}</td>;
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
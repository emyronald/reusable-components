import React from 'react';
import Table from './Table';

interface DataTableProps {
  data: { [key: string]: any }[];
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, className }) => {
  if (data.length === 0) {
    return <p>No data to display</p>;
  }

  const headers = Object.keys(data[0]);
  const rows = data.map(item => headers.map(header => item[header]));

  return <Table headers={headers} rows={rows} className={className} />;
};

export default DataTable;

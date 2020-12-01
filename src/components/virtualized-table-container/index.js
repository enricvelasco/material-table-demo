import React from 'react';
import {columnsName, getRowsList} from "./data";
import MuiVirtualizedTable from "./components/virtualized-table";

const ReactVirtualizedTable = () => {
  const list = getRowsList()
  return (
    <div style={{ height: 400, width: '100%', backgroundColor: 'red' }}>
      <MuiVirtualizedTable
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
        columns={columnsName}
      />
    </div>
  );
}

export default ReactVirtualizedTable

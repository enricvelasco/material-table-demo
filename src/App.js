import './App.css';
import React from "react";
import Demo from "./components/demo";
import ReactVirtualizedTable from "./components/virtualized-table-container";

function App() {
  return (
    <div className="App">
      <Demo />
      <ReactVirtualizedTable />
    </div>
  );
}

export default App;

// App.js

import React from "react";
import TableComponent from "./TableComponent";

const App = () => {
  const data = [
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { column1: "Data 4", column2: "Data 5", column3: "Data 6" },
  ];

  return (
    <div className="App">
      <TableComponent data={data} />
    </div>
  );
};

export default App;

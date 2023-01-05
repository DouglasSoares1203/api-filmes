import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import movies from "./movies";
import SortIcon from "@material-ui/icons/ArrowDownward";
import { Select } from "@material-ui/core";
// eslint-disable-next-line no-unused-vars
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/App.css";
// eslint-disable-next-line no-unused-vars
import { columns, data } from "./data";
import "../src/App.css";


function App() {
  const [tableRowsData, setTableRowsData] = useState(movies);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState([]);

  const onChange = async (e) => {
    setTitle(e.target.value);
    console.log(e);
    // eslint-disable-next-line array-callback-return
    var searchData = movies.filter((item) => {
      if (
        item.title
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return item
      }

    });

    setTableRowsData(searchData);
  };

  const onChange2 = async (e) => {
    if (genre.length === 0) return;
    const value = setGenre(e.target.value);
    const searchData = [...Select].filter(
      (gen) =>
        gen.genre.toLowerCase().includes(value.toLowerCase())
    );
    setTableRowsData(searchData);
  };

  const headerResponsive = [
    {
      name: (
        <div>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => onChange}
            style={{ width: "80%" }}
          />
        </div>
      ),
    },
    {
      name: (
        <div>
          Genero
          <input
            type="select"
            value={genre}
            onChange2={(e) => onChange2}
            style={{ width: "80%" }}
          />
        </div>
      )

    },

    {
      name: "Ano",
      selector: "year",
      sortable: true,
      right: true
    },
    {
      name: "Faturamento",
      selector: "revenue",
      sortable: true,
      right: true
    },
    {
      name: "Nota",
      selector: "rating",
      sortable: true,
      right: true
    },

  ]  

useEffect(() => { }, [tableRowsData]);

return (
  <DataTable
    title="Movies"
    columns={headerResponsive}
    data={tableRowsData}
    sortIcon={<SortIcon />}
  />
)

}

export default App;
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import movies from "./movies";
// import SortIcon from "@material-ui/icons/ArrowDownward";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";
import "./styles.css";


function App() {
  const [tableRowsData, setTableRowsData] = useState(movies);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const onChange = async (e) => {
    setTitle(e.target.value);
    console.log(e);

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
    setGenre(e.target.value);
    console.log(e);

    var searchData = movies.filter((item) => {
      if (
        item.genre
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return item
      }

    });

    setTableRowsData(searchData);
  };

  // const onChange2 = async (e) => {
  //   if (genre.length === 0) return;
  //   const value = setGenre(e.target.value);
  //   const searchData = [...Select].filter(
  //     (gen) =>
  //       gen.genre.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setTableRowsData(searchData);
  // };

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
      selector: "title",
      sortable: false
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
      ),

      selector: "genre",
      sortable: false

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

  ];

  useEffect(() => { }, [tableRowsData]);

  return (
    <DataTable
      title="Movies"
      columns={headerResponsive}
      data={tableRowsData}
      pagination={20}
      defaultSortField="title"
      // sortIcon={<SortIcon />}
    />
  );

}

export default App;
import React from "react";
import { ApisHeader } from "../styles/apis";
import ApiTable from "../components/ApiTable";

function ShowData({ title, apis, headers }) {
  return (
    <div className="container">
      <ApisHeader className="display-1">{title}</ApisHeader>
      <ApiTable headers={headers} apis={apis} />
    </div>
  );
}

export default ShowData;

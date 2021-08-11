import React from "react";
import ApiTable from "../components/ApiTable";
import { ApisHeader } from "../styles/apis";
import { Headers } from "../resources/Headers";
import { Apis as api } from "../resources/Data";
function Apis() {
  return (
    <div className="">
      <div className="container">
        <ApisHeader className="display-1">Public Apis</ApisHeader>

        <ApiTable headers={Headers} apis={api} />
      </div>
    </div>
  );
}

export default Apis;

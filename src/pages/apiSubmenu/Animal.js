import ApiTable from "../../components/ApiTable";
import { ApisHeader } from "../../styles/apis";
import React from "react";
import { ApiHeaders } from "../../resources/Headers";
import {AnimalsData} from "../../resources/Data";

function Animal() {
  return (
    <div className="">
      <div className="container">
        <ApisHeader className="display-1">Animals</ApisHeader>

        <ApiTable headers={ApiHeaders} apis={AnimalsData} />
      </div>
    </div>
  );
}

export default Animal;

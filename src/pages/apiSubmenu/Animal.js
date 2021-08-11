
import React from "react";
import { ApiHeaders } from "../../resources/Headers";
import {AnimalsData} from "../../resources/Data";
import ShowData from '../../components/ShowData'
function Animal() {
  return (
    <div>
   <ShowData title="Animals" apis={AnimalsData} headers={ApiHeaders}/>
    </div>
  );
}

export default Animal;

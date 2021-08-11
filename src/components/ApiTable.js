import React from "react";
import "../styles/table.css";
function ApiTable({ headers, apis }) {
  console.log(headers);
  return (
    <div>
      <table class="table table-striped table-sm">
        <thead>
          {headers.map((header) => (
            <tr>
              <th scope="col">{header?.header1}</th>
              <th scope="col">{header?.header2}</th>
              {header.header3 && (
                <>
                  <th scope="col">{header?.header3}</th>
                  <th scope="col">{header?.header4}</th>
                  <th scope="col">{header?.header5}</th>
                </>
              )}
            </tr>
          ))}
        </thead>
        <tbody>
          {apis.map((api, i) => (
            <tr>
              {api?.description ? (
                <>
                  <td>
                    <a href={api.url} target="_blank" rel="noreferrer">
                      {api.name}
                    </a>
                  </td>
                  <td>{api.description}</td>
                  <td>{api.auth}</td>
                  <td>{api.https}</td>
                  <td>{api.cors}</td>
                </>
              ) : (
                <>
                  <td>{i + 1}</td>
                  <td>{api.name}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiTable;

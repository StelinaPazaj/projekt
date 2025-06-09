import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
const ArrayComp = () => {
  const infos = [
    {
      first_name: "Anna",
      last_name: "Doe",
    },
    {
      first_name: "Ben",
      last_name: "Smith",
    },
    {
      first_name: "Anna",
      last_name: "Smith",
    },
  ];
  const [arrayInfo, setArrayInfo] = useState(infos);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {arrayInfo.map((info, index) => {
            return (
              <tr key={index}>
                <td>{info.first_name}</td>
                <td>{info.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="danger" onClick={() => setArrayInfo([])}>
        Delete All
      </Button>
      <Button variant="primary" onClick={() => setArrayInfo(infos)}>
        Reset All
      </Button>
    </div>
  );
};

export default ArrayComp;

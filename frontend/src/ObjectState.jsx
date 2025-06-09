import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ObjectState = () => {
  const [infoObj, setInfoObj] = useState({
    first_name: "Anna",
    last_name: "Doe",
  });
  return (
    <div>
      <h1>
        {infoObj.first_name} {infoObj.last_name}
      </h1>
      <Button
        variant="primary"
        onClick={() => setInfoObj({...infoObj, first_name: "Jane" })}
      >
        Change name
      </Button>
    </div>
  );
};

export default ObjectState;

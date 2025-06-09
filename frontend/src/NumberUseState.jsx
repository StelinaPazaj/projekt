import React, { useState } from "react";
import { Button } from "react-bootstrap";

const NumberUseSate = () => {
  // get-er mban info => nje emer cfaredo
  // set-er modifikon informacion => emri i get-er me germe te madhe
  //  dhe fjala set perpara
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <Button variant="danger" onClick={() => setCount(count - 1)}>
        -
      </Button>
      <Button variant="primary" onClick={() => setCount(0)}>
        Reset
      </Button>
      <Button variant="success" onClick={() => setCount(count + 1)}>
        +
      </Button>
    </div>
  );
};

export default NumberUseSate;

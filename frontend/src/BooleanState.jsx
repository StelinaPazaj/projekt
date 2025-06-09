import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
const BooleanState = () => {
  const [bool, setBool] = useState(false);
  const handleChange = () => {
    bool === false ? setBool(true) : setBool(false);
  };
  return (
    <div>
      <Button variant="primary" onClick={()=>setBool(!bool)}>
        Get info
      </Button>
      {/* <Button variant="primary" onClick={handleChange}>
        Get info
      </Button> */}
      {bool && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default BooleanState;

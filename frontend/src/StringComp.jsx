import React, { useState } from "react";
import { Button } from "react-bootstrap";

const StringComp = () => {
  const [text, setText] = useState("Text");
  const handleChange = () => {
    // if (text === "Text") {
    //   setText("Hello");
    // } else {
    //   setText("Text");
    // }
    text === "Text" ? setText("Hello") : setText("Text");
  };
  return (
    <div>
      <h1>{text}</h1>
      <p>{1 < 3 ? "1 me i vogel" : "1 me i madh"}</p>
      <Button variant="primary" onClick={handleChange}>
        Change
      </Button>
    </div>
  );
};

export default StringComp;

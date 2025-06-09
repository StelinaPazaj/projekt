import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ItemProps from "./ItemProps";
const AllItems = () => {
  const allitems = [
    {
      id: 1,
      nameItem: "Name 1",
      starItem:4, 
      textItem: "Some text for item 1",
    },
    {
      id: 2,
      nameItem: "Name 2",
      starItem: 3,
      textItem: "Some text for item 2",
    },
    {
      id: 3,
      nameItem: "Name 3",
      starItem: 2,
      textItem: "Some text for item 3",
    },
  ];
  return (
    <Container>
      <h1> AllItems</h1>
      <Row>
        {allitems.map((allitem, index) => {
          return (
            <Col key={index}>
              <ItemProps {...allitem} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllItems;

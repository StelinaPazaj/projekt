import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ItemProps = ({ id, nameItem, starItem, textItem }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{nameItem}</Card.Title>
        {[...Array(starItem)].map((_, index) => (
          <FontAwesomeIcon
            icon={faStar}
            key={index}
            className="me-1 text-warning"
          />
        ))}
        <Card.Text>{textItem}</Card.Text>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ItemProps;

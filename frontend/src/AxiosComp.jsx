import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
const AxiosComp = () => {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.course-api.com/react-tours-project")
      .then((res) => setInfos(res.data))
      .catch((err) => console.log("Error " + err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch(
        "https://www.course-api.com/react-tours-project"
      );
      const infosConvert = await getData.json();
      setInfos(infosConvert);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Row>
        {infos.map((info) => {
          return (
            <Col key={info.id}>
              <Card>
                <Card.Img variant="top" src={info.image} />
                <Card.Body>
                  <Card.Title>
                    {info.name}-{info.price}
                  </Card.Title>
                  <Card.Text>{info.info}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AxiosComp;

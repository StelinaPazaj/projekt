import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import banner from "./images/banner.jpg";
const BannerComp = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1 className="display-1">Title</h1>
          <p>
            Në fillim, zgjidh problemin. Pastaj, shkruaj kodin. Në qoftë se ka
            diçka të sigurt, është që karriera në kodim & programim ka potencial
            të madh përfitimi. Janë të shumta drejtimet e profesionit që mund të
            merrni duke filluar që nga web apo so
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={banner} className="img-fluid" alt="banner" />
        </Col>
      </Row>
    </Container>
  );
};

export default BannerComp;

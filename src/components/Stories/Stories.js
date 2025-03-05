import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StoriesCard from "./StoriesCards";
import Particle from "../Particle";
import days from "../../Assets/Stories/5days.png";
import dmatmobil from "../../Assets/Stories/dmatmobil.jpg";
import apple from "../../Assets/Stories/apple.png";
import sandm from "../../Assets/Stories/S&M.png";
import who from "../../Assets/Stories/who.png";
import thuong from "../../Assets/Stories/thuong.png";
import soft from "../../Assets/Stories/soft.jpg";
import jamais from "../../Assets/Stories/jamais.png";
import happiness from "../../Assets/Stories/happiness.png";

function Stories() {
  return (
    <Container fluid className="project-section">
      <Particle />
      {/* translatedByGris */}
      <Container>
        <h1 className="project-heading">
          translatedBy<strong className="purple">Gris</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Stories I've translated.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={dmatmobil}
              isBlog={false}
              title="Draco Malfoy and the Mortifying Ordeal of Being in Love"
              description="By: isthisselfcare"
              ghLink="https://www.wattpad.com/story/341644878-dramione-draco-malfoy-and-the-mortifying-ordeal"
              demoLink="https://archiveofourown.org/works/34500952/chapters/85870804"
            />
          </Col>

          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={sandm}
              isBlog={false}
              title="Secrets and Masks"
              description="By: Emerald_Slytherin"
              ghLink="https://www.wattpad.com/story/362561908-dramione-secrets-and-masks-by-emerald_slytherin"
              demoLink="https://archiveofourown.org/works/32136715/chapters/79619566"
            />
          </Col>

          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={days}
              isBlog={false}
              title="Five Days"
              description="By: RavieSnake"
              ghLink="https://www.wattpad.com/story/340745089-dramione-transfic-five-days-by-raviesnake"
              demoLink="https://archiveofourown.org/works/6225418/chapters/14263153"
            />
          </Col>

          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={soft}
              isBlog={false}
              title="Soft As It Began"
              description="By: rubber_soul02"
              ghLink="https://www.wattpad.com/story/350977933-dramione-soft-as-it-began-by-rubber_soul02"
              demoLink="https://archiveofourown.org/works/37174843/chapters/92745022"
            />
          </Col>

          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={who}
              isBlog={false}
              title="Who I Was With You"
              description="By: Curly_Kay"
              ghLink="https://www.wattpad.com/story/351576503-dramione-who-i-was-with-you-by-curly_kay"
              demoLink="https://archiveofourown.org/works/33265651/chapters/82598278"
            />
          </Col>

          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={jamais}
              isBlog={false}
              title="Jamais Vu"
              description="By: CosmicCthulhu"
              ghLink="https://www.wattpad.com/story/337540478-dramione-transfic-jamais-vu-by-cosmiccthulhu"
              demoLink="https://archiveofourown.org/works/42099753/chapters/105696327"
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />

      {/* madebyGris */}
      <Container>
        <h1 className="project-heading">
          madeBy<strong className="purple">Gris</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few Stories I've written.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={happiness}
              isBlog={false}
              title=" My Little Happiness"
              description="Hạnh Phúc Nhỏ Của Anh"
              ghLink="https://www.wattpad.com/story/335083527-dramione-my-little-happiness"
              demoLink="https://archiveofourown.org/works/52227265/chapters/132109333"
            />
          </Col>

          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={apple}
              isBlog={false}
              title="You are the Apple of my eyes"
              description="Quả táo ngọt ngào của anh"
              ghLink="https://www.wattpad.com/story/318771829-dramione-you-are-the-apple-of-my-eyes"
            />
          </Col>

          <Col md={4} className="project-card">
            <StoriesCard
              imgPath={thuong}
              isBlog={false}
              title="Unexpected Love"
              description="Thương em là điều anh không thể ngờ"
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <h1 className="project-heading">
        "tell your cat i said <strong className="purple">pspsps!</strong>" 😼
      </h1>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default Stories;

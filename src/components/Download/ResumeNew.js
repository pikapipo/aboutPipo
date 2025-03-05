import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import myImg from "../../Assets/Stories/bmbs.png";
import Tilt from "react-parallax-tilt";
import pdf from "../../Assets/../Assets/Breath_Mints_Battle_Scars.pdf";
import pdf2 from "../../Assets/../Assets/ENG_BMBS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Kẹo<span className="purple"> Bạc Hà</span> / Sẹo{" "}
                <span className="purple">Chiến Tranh</span>
              </h1>

              <p className="home-about-body">
                Không có gì nhiều chỉ là muốn chia sẽ chiếc fic cực kì hay này
                đến với mọi người. ✨
                <br />
                <br />
                Nhưng vì tác giả đã xoá fic gốc và không cho phép dịch và mình
                tôn trọng quyết định của cổ nên không thể dịch mà post lên được.{" "}
                <br />
                Nhưng mình đã cố tình dịch chui và chia sẽ nó ở đây 😅. Chắc
                không ai biết đâu :v
                <br />
                <br />
                Mọi người có thể tải bản gốc tiếng anh và bản dịch của mình
                (chưa được beta kĩ nên có hơi sai sót về chính tả) nếu mọi người
                muốn đọc nhé.
                <br />
                <i>
                  <b className="purple">
                    <br />
                    Enjoy!
                  </b>
                </i>
              </p>
              <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ maxWidth: "250px", marginBottom: "10px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Tải bản dịch
                </Button>
              </Row>

              <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                  variant="primary"
                  href={pdf2}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Tải bản gốc
                </Button>
              </Row>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <h1 className="project-heading">
            sharing is <strong className="purple">caring</strong>
          </h1>
          <p style={{ color: "white", fontSize: "1.5em" }}>
            Ngoài ra thì các file bản dịch của mình luôn có sẵn, nếu các bạn cần
            thì cứ liên hệ mình. ✨
          </p>
        </Container>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default ResumeNew;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/bumdesma.png";
import emotion from "../../Assets/Projects/sistekdes.png";
import editor from "../../Assets/Projects/sp2se.png";
import chatify from "../../Assets/Projects/webaru.png";
import suicide from "../../Assets/Projects/sahabatmasjid.png";
import bitsOfCode from "../../Assets/Projects/personalweb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Web V.2"
              description="Personal Web ini adalah yang kedua saya buat makanya namanya V.2 hahahaha nikmati dibawah ya guyss."
              ghLink="null"
              demoLink="https://fajarmdhan.netlify.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal Web V.1"
              description="Personal Website yang pertama kali saya buat dan saya publish secara publik. Dibuat dengan bahasa pemrograman Vue3 dan Tailwind cek hasilnya dibawah cuyy."
              ghLink="https://github.com/Bakcode-Kosong/Bakcode.github.io"
              demoLink="https://fajarmdhan.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SP2SE"
              description="Sistem Percepatan Pelayanan Surat Elektronik, atau disebut juga SP2SE saya buat web ini karena dapat job untuk buat aja hehe."
              ghLink="null"
              demoLink="https://sp2se.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BUMDESMA"
              description="a web application used by village-owned enterprises at the sub-district level to make it easier for them in terms of accounting that is equipped with a microfinance balance."
              ghLink="null"
              demoLink="https://bumdesmasima.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sahabat Masjid"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="null"
              demoLink="https://sahajid.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SISTEKDES"
              description="Sistem Informasi dan Teknologi Desa, a web application to assist village government work in administration, population data management, community services, etc."
              ghLink="null"
              demoLink="https://sistekdes.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

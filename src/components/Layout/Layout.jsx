import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../content/Content";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} sm={2} lg={2}>
            <Sidebar />
          </Col>
          <Col md={10} sm={10} lg={10}>
            <Header />
            <Content />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;

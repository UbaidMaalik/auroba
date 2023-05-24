import { Container, Row, Col, Form } from "react-bootstrap";
import { Input, Button } from "antd";
import "../../styles/styles.css";
const Header = () => {
  return (
    <>
      <Container className="header">
        <Row>
          <Col md={3} sm={3} lg={3} className="page-title">
            <h3>Dashboard</h3>
          </Col>
          <Col md={4} sm={4} lg={4} className="search">
            <Form>
              <Form.Group
                controlId="searchInput"
                className="d-flex align-items-center"
              >
                <Input
                  className="search-input"
                  placeholder="Search"
                  prefix={<i className="ri-search-2-line"></i>}
                />
                <Button
                  className="notification"
                  type="primary"
                  htmlType="submit"
                  icon={<i className="ri-notification-3-line"></i>}
                ></Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={2} sm={2} lg={2} className="profile">
            <h3>Profile</h3>
          </Col>
          <Col md={2} sm={2} lg={2} className="profile">
            <Button
              className="edit"
              type="primary"
              htmlType="submit"
              icon={<i className="ri-edit-box-line"></i>}
            ></Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;

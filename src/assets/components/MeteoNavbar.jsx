import {Navbar , Nav ,Container, Form, Button} from "react-bootstrap"
const MeteoNavbar = function(){
    return(
        <Navbar expand="md" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">LOGO </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Luogo</Nav.Link>
              <Nav.Link href="#action2">30 day</Nav.Link>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default MeteoNavbar

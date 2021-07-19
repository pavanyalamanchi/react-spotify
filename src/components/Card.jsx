import { Card, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const CardComp = (props) => (
  <Router>
    
      <Col className="mb-4 d-flex align-items-center ">
        <Card style={{ width: "18rem", backgroundColor: "black" }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title className="text-white text-ellipsis">
              {props.title}
            </Card.Title>
            <Card.Text className="text-ellipsis text-muted">
              {props.desc}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    
  </Router>
);

export default CardComp;

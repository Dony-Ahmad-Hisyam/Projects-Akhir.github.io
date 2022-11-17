import { Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    
    <div>
      <div>
       
        <img id="genre" className="bgft" src="https://paramountrealty.lk/wp-content/uploads/2016/04/bg-footer.jpg" alt="" />
      </div>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Feedback</Form.Label>
            <Form.Control type="password" placeholder="Leave us some feedback!" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Footer;

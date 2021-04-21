import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function Contact(props) {
    return (
        <div className={'container justify-content-center'} style={{ paddingTop: '10px', marginBlock: '50px', textAlign: 'center' }}>
            <Form className={ 'container-fluid p-3'} style={{ backgroundColor: '#1c94a1', borderStyle: 'groove', borderColor: 'black'}}>
                    <Row>
                        <Col>
                            <Form.Label><b>First Name: </b></Form.Label>
                            <Form.Control placeholder="First name" required />
                        </Col>
                        <Col>
                            <Form.Label><b>Last Name:</b></Form.Label>
                            <Form.Control placeholder="Last name" required />
                        </Col>
                    </Row><br/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><b>Email address:</b></Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Comments:</b></Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        );
}

export default Contact;
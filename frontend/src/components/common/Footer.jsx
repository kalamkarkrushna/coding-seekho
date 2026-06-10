import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Coding Seekho</h5>
                        <p>Empowering students with IT skills.</p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <p>&copy; {new Date().getFullYear()} Coding Seekho. All Rights Reserved.</p>
                        <p>Powered by KRISH</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

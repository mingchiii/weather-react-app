import './App.css';
import Heading from './components/Heading';
import Bodytext from './components/Bodytext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (

    <Container fluid>
      <Row>
        <Col>
        <Heading />
        <Bodytext />
        </Col>
      </Row>
    </Container>
        
        
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import Ballot from './Components/Ballot/Ballot';

export default function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <Container>
      <Row>
        <Col>
          <div className="App">
            <Ballot />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

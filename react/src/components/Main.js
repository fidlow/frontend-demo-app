import { Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../store/actions";

function Main (props) {
  const { count, increment, decrement, reset } = props;
  return (
    <Container>
          <Row className="my-2">
            <Col>Счётчик: {count}</Col>
          </Row>
          <Row>
            <Col>
              <Button className="me-2" variant="primary" onClick={increment}>+</Button>
              <Button className="me-2" variant="primary" onClick={decrement}>-</Button>
              <Button variant="danger" onClick={reset}>Сброс</Button>
            </Col>
          </Row>
        </Container>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
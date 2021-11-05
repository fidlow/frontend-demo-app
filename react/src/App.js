import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";
import { Button, Container, Row, Col } from "react-bootstrap";

export class Counter extends React.Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div id="app">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
});

export const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

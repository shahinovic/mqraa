import { Button, Col, Row } from "react-bootstrap";
import "./StudentsActions.css";

const StudentsActions = ({ show }) => {
  const { state, first, second } = show;

  const firstColor = "#418a84";
  const secondColor = "#bf8b49";
  const renderFirstColActions = () => {
    return first.map((action, index) => (
      <button
        key={action + index}
        className="btn  ms-2"
        // style={{ backgroundColor: firstColor, border: "none" }}
        // style={{ border: "none" }}
      >
        {action}
      </button>
    ));
  };

  const renderSecondColActions = () => {
    return second.map((action, index) => (
      <button
        key={action + index}
        className="btn  ms-2"
        // style={{ backgroundColor: secondColor, border: "none" }}
        // style={{ border: "none" }}
      >
        {action}
      </button>
    ));
  };

  return (
    <div className="students-actions py-3">
      <Row>
        {(state === "first" || state === "both") && (
          <Col xs={12} md={6} className="mb-3">
            {renderFirstColActions()}
          </Col>
        )}
        {(state === "second" || state === "both") && (
          <Col xs={12} md={6} className="mb-3">
            {renderSecondColActions()}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default StudentsActions;

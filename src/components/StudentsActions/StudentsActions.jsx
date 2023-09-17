import { Button, Col, Row } from "react-bootstrap";
import "./StudentsActions.css";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

import { ActionButton } from "../../components";

const StudentsActions = ({ show }) => {
  const { state, first, second } = show;

  const renderFirstColActions = () => {
    return first.map((action, index) => (
      <ActionButton key={action.text + index} {...action} />
    ));
  };

  const renderSecondColActions = () => {
    return second.map((action, index) => (
      <button key={action + index} className="btn  ms-2">
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

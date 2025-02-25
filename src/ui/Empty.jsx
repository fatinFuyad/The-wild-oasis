import styled from "styled-components";
import Button from "./Button";
import Row from "./Row";
import { useNavigate } from "react-router-dom";

const EmptyRow = styled.div`
  margin-top: 100px;
`;

function Empty({ resourceName }) {
  const navigate = useNavigate();
  return (
    <EmptyRow>
      <Row type="horizontal">
        <p>No {resourceName} could be found.</p>
        <Button onClick={() => navigate("/bookings", { replace: true })}>
          Previous page
        </Button>
      </Row>
    </EmptyRow>
  );
}

export default Empty;

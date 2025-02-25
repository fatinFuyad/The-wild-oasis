import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: var(--color-grey-50);
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
`;
const NotFound = styled.div`
  max-width: 780px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & button {
    width: fit-content;
  }

  & h1 {
    font-weight: 700;
    font-size: 9.2rem;
    display: inline-block;
    background: radial-gradient(
      circle,
      var(--color-blue-100),
      var(--color-red-700)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  & h2,
  & p {
    display: inline-block;
    background: linear-gradient(
      to right,
      var(--color-blue-100),
      var(--color-silver-700)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <NotFound>
        <div>
          <h1>404</h1>
        </div>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavailable
        </p>
        <Button onClick={() => navigate("/dashboard", { replace: true })}>
          Go To Homepage
        </Button>
      </NotFound>
    </Container>
  );
}

export default PageNotFound;

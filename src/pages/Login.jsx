import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Row from "../ui/Row";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const P = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-grey-500);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h3">Log in to your account</Heading>
      <LoginForm />
      <Row type="vertical">
        <P>Don't have an account </P>
        <span>
          <Button size="small" variation="secondary" as={Link} to="/signup">
            Sign up
          </Button>
        </span>
      </Row>
    </LoginLayout>
  );
}

export default Login;

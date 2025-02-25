import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  /* overflow: scroll; */
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sginup() {
  return (
    <StyledAppLayout>
      <Main>
        <Container>
          <Heading as="h1">Create a new user</Heading>
          <SignupForm />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default Sginup;

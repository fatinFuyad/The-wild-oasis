import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if there is no authenticated user then redirect to the login page
  // if isLoading is running then isAuthenticated is anyhow going to be false as data has not been arrived yet
  useEffect(() => {
    if (!isLoading && !isAuthenticated) return navigate("/login");
  }, [isAuthenticated, isLoading, navigate]); // why navigate included ?

  // 3. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. if there is authenticated user then render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;

import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & span {
    color: var(--color-brand-800);
    font-size: large;
    font-weight: 600;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({
  resourceName = "",
  cabinName = "",
  onConfirm,
  disabled,
  onClose, // this prop is coming from Modal and onClose is the close function
}) {
  function handleConfirmClick() {
    onConfirm();
  }

  return (
    <StyledConfirmDelete>
      <Heading type="h3">Delete {resourceName || "Action"}</Heading>
      <p>
        Are you sure you want to delete {resourceName || "it"}{" "}
        {cabinName && <span>" {cabinName}"</span>}
        permanently? This action cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variation="danger"
          onClick={handleConfirmClick}
          disabled={disabled}
        >
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;

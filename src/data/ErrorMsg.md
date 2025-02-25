# 1

# BookingRow.jsx:125 Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. Check your code at BookingRow.jsx:110. Error Component Stack

# Solution: In the Modal component there is no "Toggle" component or defined property. So it is undefined. We need to replace the Toggle with the Open. Becase Open is a property of Modal

    <!-- Now it gets a bit confusing...  -->
            <Modal.Toggle opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Toggle>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>

# 2

# the style prop takes an object but it can also take the value of prop as true or null but the prop cannot be false or string.

# the styled component cannot take the value of prop as boolean or in other words non-boolean values should be passed as props to the styled component;

      <Button
        style={confirmedPaid ? null : { cursor: "not-allowed" }}
          cursor={!confirmedPaid ? "not-allowed" : ""}
          style={confirmedPaid || { cursor: "not-allowed" }}
          disabled={!confirmedPaid}
          onClick={handleCheckin}
        >
          Check in booking #{bookingId}
        </Button>

# 3

# This happens when we request more rows of data but there are actually less rows than requested rows.

{code: 'PGRST103', details: 'An offset of 20 was requested, but there are only 8 rows.', hint: null, message: 'Requested range not satisfiable'}

# 4

# custom hooks should be regular functions it cannot be async functions

# 5

# The ContextProvider component should return the children otherwise there will be no error and also there will not be displayed the components

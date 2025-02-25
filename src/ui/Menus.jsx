import { createContext, useContext, useRef, useState } from "react";
import styled from "styled-components";
// import { createPortal } from "react-dom";
import useClickOutside from "../hooks/useClickOutside";
import { HiEllipsisVertical } from "react-icons/hi2";

const Menu = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  background-color: ${(props) => props.isOpen && "var(--color-grey-200)"};
  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  /* position: fixed; */
  position: absolute;
  z-index: 10;
  white-space: nowrap;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-400);
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border-radius: var(--border-radius-md);
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({});

  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id, icon }) {
  const ref = useRef(null);
  const { open, openId, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation(); // this will stop occuring the event on the bubling phase
    const rectEl = ref.current.getBoundingClientRect();
    setPosition({
      x: rectEl.width + 10,
      y: rectEl.height - 10,
    });
    !openId || openId !== id ? open(id) : close();
    // const el = e.target;
    // const rect = el.getBoundingClientRect();
    // setPosition({
    //   x: window.innerWidth - rect.x + rectEl.width - 10,
    //   y: rect.y + rectEl.height - 10,
    // });
  }
  return (
    <StyledToggle
      isOpen={openId === id}
      ref={ref}
      onClick={handleClick}
      aria-label="menu-toggle-button"
    >
      {icon ? <HiEllipsisVertical /> : icon}
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { openId, close, position } = useContext(MenusContext);
  const ref = useClickOutside(close, false);

  if (openId !== id) return null;
  // console.log("openId:", openId, "id:", id);
  // if (!openId === id) return null;

  return (
    <StyledList ref={ref} position={position}>
      {children}
    </StyledList>
  );
}

function Button({ icon, onClick, children }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton aria-label="menu-button" onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;

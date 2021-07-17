import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: orange;
  // 1rem = 16px
  padding: 2rem 3rem;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 50%;
  max-width: 14rem;
  background: red;
`;

const MenuItem = styled.li`
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSizes.normal};
`;

const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem>Index</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Works</MenuItem>
        <MenuItem>Post</MenuItem>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;

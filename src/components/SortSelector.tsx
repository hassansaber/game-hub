import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Revelavce1</MenuItem>
        <MenuItem>Revelavce21</MenuItem>
        <MenuItem>Revelavce12</MenuItem>
        <MenuItem>Revelavce13</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

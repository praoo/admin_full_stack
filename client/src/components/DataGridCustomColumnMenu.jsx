import {
  GridColumnMenuContainer,
  GridColumnMenuHideItem,
} from "@mui/x-data-grid";

import MenuItem from '@mui/material/MenuItem'; 

const CustomFilterMenuItem = ({ hideMenu, column }) => {
  const handleFilterClick = () => {
    // Implement your filter logic here
    hideMenu();
  };

  return (
    <MenuItem onClick={handleFilterClick}>
      Filter {column.field}
    </MenuItem>
  );
};

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <CustomFilterMenuItem hideMenu={hideMenu} column={currentColumn} />
      <GridColumnMenuHideItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
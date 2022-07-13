import React, {useEffect} from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { NavLink } from "react-router-dom";

const options = [
  {
    id: 1,
    name: "Login",
    link: "/login",
  },
  {
    id: 2,
    name: "Pedidos",
    link: "/pedidos",
  },
  {
    id: 3,
    name: "Usuarios",
    link: "/usuarios",
  },
  {
    id: 4,
    name: "Menú",
    link: "/",
  },
];

const ITEM_HEIGHT = 48;

export default function MenuNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    console.log(items);
  }, []);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <DensityMediumIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.name} onClick={handleClose}>
            <NavLink to={option.link} activeclassname="buttonLogin">
              {option.name}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Kimono from "./Icons/Kimono.jsx";
import EmojioneDress from "./Icons/Dress.jsx";
import Shirt from "./Icons/Shirt.jsx";
import Me from "./Icons/me.jsx";
import BagIcon from "./Icons/Bag.jsx";
import HosenIcon from "./Icons/Hosen.jsx";
import { useCategoryStore } from "../store/catagory";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore.js";
import { Link } from "react-router-dom";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
          }),
          marginLeft: 0
        }
      }
    ]
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    }
  ]
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function Sidebar(props) {
  const { user } = useAuthStore();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate(); // <-- add this
  const setCategory = useCategoryStore((state) => state.setCategory); // <-- get setter

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handlePassingValue(selectedCategory) {
    // setCategory(selectedCategory);
    navigate(`/Dresses/${selectedCategory}`);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar bgcolor="grey" sx={{ bgcolor: "grey", color: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2
              },
              open && { display: "none" }
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" bgcolor="grey">
            Aegean's RoSa
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {["Kimono", "Dress", "Shirt", "Hosen"].map((text, index) => ( */}

          <ListItem disablePadding>
            <ListItemButton onClick={() => handlePassingValue("JACKEN")}>
              <ListItemIcon>
                {/* {index % 3 === 0 ? <Kimono /> : <EmojioneDress />} */}
                <Kimono />
              </ListItemIcon>
              <ListItemText primary={"JACKEN"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handlePassingValue("KLEIDER")}>
              <ListItemIcon>
                <EmojioneDress />
              </ListItemIcon>

              <ListItemText primary={"KLEIDER"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                handlePassingValue("TOPS & BLUSEN");
              }}
            >
              <ListItemIcon>
                <Shirt />
              </ListItemIcon>

              <ListItemText primary={"TOPS & BLUSEN"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handlePassingValue("HOSEN")}>
              <ListItemIcon>
                <HosenIcon />
              </ListItemIcon>
              <ListItemText primary={"HOSEN"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handlePassingValue("ACCESSORIES")}>
              <ListItemIcon>
                <BagIcon />
              </ListItemIcon>
              <ListItemText primary={"ACCESSORIES"} />
            </ListItemButton>
          </ListItem>
          {/* ))} */}
        </List>
        <Divider />
        <List>
          <ListItem key={"Mail"} disablePadding>
            <ListItemButton href="/Mail">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Mail"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Ich"} disablePadding>
            <ListItemButton href="/me">
              <ListItemIcon>
                <Me />
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={"Ich"} />
            </ListItemButton>
          </ListItem>
          {/* ))} */}
        </List>
        {/* <ListItem>
          <ListItemButton>
            {user.isAdmin && <Link to="/admin/add-dress">Add Dress</Link>}
          </ListItemButton>
        </ListItem> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 4 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
        </Typography>
      </Main>
    </Box>
  );
}

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
  Avatar,
  Box,
  ButtonBase,
  Drawer,
  List,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { tokens } from "../../../theme";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../../../main.css";
import { drawerWidth } from "../../../utils/constant";
import {
  IconCalendar,
  IconChartBar,
  IconChartLine,
  IconChartPie,
  IconDashboard,
  IconHelp,
  IconReceipt,
  IconUser,
  IconUserScan,
  IconUsers,
} from "@tabler/icons-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface ItemProps {
  open: boolean;
  title: string;
  to: string;
  icon: React.ReactNode; // Replace with the actual type of your icon
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const DesktopDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.spacing(9),
  padding: 0,
});

const Item = ({ open, title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  return open ? (
    <ListItem key={title} disablePadding sx={{ display: "block" }}>
      <ButtonBase
        onClick={() => setSelected(title)}
        component={RouterLink}
        to={to}
        sx={{
          borderRadius: "8px",
          width: "230px",
          height: "46px",
          m: "4px 0px 4px 0px",
          p: "10px 16px 10px 24px",
          justifyContent: "flex-start",
          fontWeight: selected === title ? 700 : 500,
          background:
            selected === title
              ? mode === "dark"
                ? "#7c4dff15"
                : colors.secondary.secondaryLight
              : "transparent",
          color:
            selected === title
              ? mode === "dark"
                ? colors.secondary.secondaryMain
                : colors.secondary.secondaryDark
              : colors.textVariant.TextPrimary,
          "&:hover": {
            color:
              mode === "dark"
                ? colors.secondary.secondaryMain
                : colors.secondary.secondaryDark,
            background:
              mode === "dark" ? "#7c4dff15" : colors.secondary.secondaryLight,
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 36,
            color:
              selected === title
                ? mode === "dark"
                  ? colors.secondary.secondaryMain
                  : colors.secondary.secondaryDark
                : colors.textVariant.TextPrimary,
          }}
        >
          {icon}
        </ListItemIcon>
        {title}
      </ButtonBase>
    </ListItem>
  ) : (
    <>
      <ButtonBase
        key={title}
        onClick={() => setSelected(title)}
        component={RouterLink}
        to={to}
        sx={{
          display: "block",
          width: "46px",
          height: "46px",
          borderRadius: "8px",
          marginBottom: "4px",
          justifyContent: "center",
          background:
            selected === title
              ? mode === "dark"
                ? "#7c4dff15"
                : colors.secondary.secondaryLight
              : "transparent",
          color:
            selected === title
              ? mode === "dark"
                ? colors.secondary.secondaryMain
                : colors.secondary.secondaryDark
              : colors.textVariant.TextPrimary,
          "&:hover": {
            background:
              mode === "dark" ? "#7c4dff15" : colors.secondary.secondaryLight,
          },
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: "46px",
            height: "46px",
            borderRadius: "8px",
            background: "transparent",
            color:
              selected === title
                ? mode === "dark"
                  ? colors.secondary.secondaryMain
                  : colors.secondary.secondaryDark
                : colors.textVariant.TextPrimary,
            "&:hover": {
              color: colors.secondary.secondaryDark,
              background:
                mode === "dark" ? "#7c4dff15" : colors.secondary.secondaryLight,
            },
          }}
          onClick={() => setSelected(title)}
        >
          {icon}
        </Avatar>
      </ButtonBase>
    </>
  );
};

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const [selected, setSelected] = React.useState("Dashboard");

  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const items = (
    <PerfectScrollbar
      options={{ suppressScrollX: true }}
      className="custom-scrollbar"
      component="div"
      style={{
        height: !matchUpMd ? "calc(100vh)" : "calc(100vh - 88px)",
        paddingRight: "16px",
        paddingLeft: open ? "16px" : "10px",
      }}
    >
      <List sx={{ p: open ? "0px 0px 8px" : "0px" }}>
        {open && (
          <Box p="0px 6px 6px" m="0px 0px 0.35em" fontWeight="700">
            Dashboard
          </Box>
        )}
        <Item
          open={open}
          title="Home"
          key="Home"
          selected={selected}
          setSelected={setSelected}
          to="/"
          icon={
            <IconDashboard stroke={1.5} size={open ? "1.2rem" : "1.5rem"} />
          }
        ></Item>
      </List>
      {open && <Divider sx={{ margin: "2px 0px 10px" }} />}
      <List sx={{ p: open ? "0px 0px 8px" : "0px" }}>
        {open && (
          <Box p="6px" m="10px 0px 0.35em" fontWeight="700">
            Application
          </Box>
        )}
        {["Manage Team", "Contacts Information", "Invoices Balances"].map(
          (text, index) => (
            <Item
              open={open}
              key={text}
              title={text}
              selected={selected}
              setSelected={setSelected}
              to={
                index === 0 ? "/team" : index === 1 ? "/contacts" : "/invoices"
              }
              icon={
                index === 0 ? (
                  <IconUser stroke={1.3} size={open ? "1.2rem" : "1.4rem"} />
                ) : index === 1 ? (
                  <IconUserScan
                    stroke={1.3}
                    size={open ? "1.2rem" : "1.4rem"}
                  />
                ) : (
                  <IconReceipt stroke={1.3} size={open ? "1.2rem" : "1.4rem"} />
                )
              }
            ></Item>
          )
        )}
      </List>
      {open && <Divider sx={{ margin: "2px 0px 10px" }} />}
      <List sx={{ p: open ? "0px 0px 8px" : "0px" }}>
        {open && (
          <Box p="6px" m="10px 0px 0.35em" fontWeight="700">
            Forms
          </Box>
        )}
        {["Profile Form", "Calendar", "FAQ Page"].map((text, index) => (
          <Item
            open={open}
            key={text}
            title={text}
            selected={selected}
            setSelected={setSelected}
            to={index === 0 ? "/form" : index === 1 ? "/calendar" : "/faq"}
            icon={
              index === 0 ? (
                <IconUsers stroke={1.3} size={open ? "1.2rem" : "1.4rem"} />
              ) : index === 1 ? (
                <IconCalendar stroke={1.3} size={open ? "1.2rem" : "1.4rem"} />
              ) : (
                <IconHelp stroke={1.3} size={open ? "1.2rem" : "1.4rem"} />
              )
            }
          ></Item>
        ))}
      </List>
      {open && <Divider sx={{ margin: "2px 0px 10px" }} />}
      <List sx={{ p: open ? "0px 0px 8px" : "0px" }}>
        {open && (
          <Box p="6px" m="10px 0px 0.35em" fontWeight="700">
            Charts
          </Box>
        )}
        {["Bar Chart", "Pie Chart", "Line Chart"].map((text, index) => (
          <Item
            open={open}
            key={text}
            title={text}
            selected={selected}
            setSelected={setSelected}
            to={index === 0 ? "/bar" : index === 1 ? "/pie" : "/line"}
            icon={
              index === 0 ? (
                <IconChartBar stroke={1.3} size={open ? "1.2rem" : "1.5rem"} />
              ) : index === 1 ? (
                <IconChartPie stroke={1.3} size={open ? "1.2rem" : "1.4rem"} />
              ) : (
                <IconChartLine stroke={1.3} size={open ? "1.2rem" : "1.4rem"} />
              )
            }
          ></Item>
        ))}
      </List>
    </PerfectScrollbar>
  );
  return (
    <>
      {matchUpMd ? (
        <DesktopDrawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              backgroundColor: colors.paper[100],
              overflow: "auto",
              boxShadow: "none",
              borderRight: "none",
              [theme.breakpoints.up("md")]: {
                top: "88px",
              },
            },
          }}
        >
          {items}
        </DesktopDrawer>
      ) : (
        <Drawer
          anchor="left"
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: drawerWidth,
              overflow: "auto",
              boxShadow: "none",
              borderRight: "0",
              backgroundColor: colors.paper[100],
            },
          }}
        >
          <Toolbar>
            <Box
              component="span"
              sx={{
                padding: "25px 0px 25px 0px",
                ml: 0,
              }}
            >
              <img
                alt="IrisaQCLogo"
                src={
                  mode === "dark"
                    ? "assets/IrisaQCLogoDark.png"
                    : "assets/IrisaQCLogo.png"
                }
                style={{ width: "170px" }}
              />
            </Box>
          </Toolbar>
          <Divider />
          {items}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
